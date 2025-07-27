import React, { useEffect, useState } from 'react'
import './ProfilePage.css';

const ProfilePage = ({isLoggedIn}) => {
    const[ProfileImage, setProfileImage] = useState(null);
    const[review, setReview] = useState('');
    const[product, setProduct] = useState('');
    const[submittedReviews, setSubmittedReviews] = useState([]);
    const [uploadError, setUploadError] = useState('');
    const [reviewError, setReviewError] = useState('');


    useEffect(()=>{
        const storedImg = localStorage.getItem('profileImage');
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        
        if (storedImg) setProfileImage(storedImg);
        setSubmittedReviews(storedReviews);
    },[])

    const handleImageChange =(e)=>{
        const file = e.target.files[0];
        if(file){
            const validTypes = ['image/jpeg', 'image/png'];
            const maxSizeInBytes = 2 * 1024 * 1024;
            if(!validTypes.includes(file.type)){
               setUploadError('Only JPEG or PNG files are allowed.');
                return;
            }
            if (file.size > maxSizeInBytes) {
                setUploadError('File size must be less than 2MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Img = reader.result;
                setProfileImage(base64Img);
                localStorage.setItem('profileImage', base64Img);
      };
      reader.readAsDataURL(file);
    }};

    const removeImage = ()=>{
        setProfileImage(null);
    }

    const submitReview = ()=>{
       if (product.trim() === '' || review.trim() === '') {
            setReviewError('Please enter both the product name and review.');
            return;
        }

        setReviewError('');

        const newReviews = [...submittedReviews, `${product}: ${review}`];
        setSubmittedReviews(newReviews);
        setReview('');
        setProduct('');
        localStorage.setItem('reviews', JSON.stringify(newReviews));
    }

    const removeReview = (indexToRemove) => {
        const updatedReviews = submittedReviews.filter((_, i) => i !== indexToRemove);
        setSubmittedReviews(updatedReviews);
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    }


    if (!isLoggedIn) {
        return <div className="profile-message">Please sign in to view your profile.</div>;
    }

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('profileImage');
        localStorage.removeItem('reviews');
        window.location.reload(); 
    };

  return (
    <div className='profile-page'>
      <h2>My Profile</h2>
      <div className='profile-image-section'>
        {ProfileImage?(
            <>
                <img src={ProfileImage} className='profile-img' alt='profile-image'/>
                <button onClick={removeImage} className='photo-remove-button'>Remove Photo</button></>
        ):(
            <>
                <label htmlFor='profileUpload' className='upload-label'>Upload Photo</label>
                <input
                 type='file'
                 accept='image/*'
                 id='profileUpload'
                 onChange={handleImageChange}
                 hidden/>
                {uploadError && <p className="error-msg">{uploadError}</p>}
            </>
        )}
       
      </div>
      <div className='review-section'>
        <h3>Write a Review</h3>
        <input 
            placeholder='Enter the product you bought'
            value={product}
            onChange={(e)=>setProduct(e.target.value)}></input>
        <textarea 
            placeholder='Share your thoughts'
            value={review}
            onChange={(e)=>setReview(e.target.value)}>
        </textarea>
        {reviewError && <p className="error-msg">{reviewError}</p>}
        <button className='submit-button' onClick={submitReview}>Submit Review</button>


        {submittedReviews.length >0 &&(
            <div className='review-list'>
                <h4>Your Reviews</h4>
                <ul className='reviews-items'>
                    {submittedReviews.map((rev,index)=>(
                      <li key={index} className='review-items'>
                        <span className='reviews'>{rev}</span>
                        <button 
                            onClick={() => removeReview(index)} 
                            className='remove-review-button'>
                            Delete
                        </button>
                      </li>  
                    ))}

                </ul>
            </div>
        )}
      </div>

      <div className='logout-container'>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfilePage
