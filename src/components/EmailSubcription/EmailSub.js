import './EmailSub.css';

const EmailSub = () => {
  return (
    <div className='email-sub-section'>
        <div className='email-sub-left-section'></div>
        <div className='email-sub-center-section'>
            <h2>Join Our<span> SWARNA</span> Family</h2>
            <div className='email-input-section'>
                <input className='email-sub-input' placeholder='Enter Your Email' required/>
                <button className='email-sub-button'>SIGN UP NOW</button>
            </div>
        </div>
        <div className='email-sub-right-section'></div>  
    </div>
  )
}

export default EmailSub
