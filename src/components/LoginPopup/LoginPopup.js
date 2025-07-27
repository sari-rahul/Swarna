import React, { useState } from 'react'
import './LoginPopup.css';

const LoginPopup = ({setShowLogin , setIsLoggedIn}) => {
    const[currentState, setCurrerentState] = useState('Sign Up')
    const[password ,setPassword] = useState('');
    const[error, setError] = useState('');

    const validatePassword = (value)=>{
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        
        if(!strongPasswordRegex.test(value)){
            setError('Password must be at least 8 characters and include an Uppercase, a Lowercase, a Number, and a Special character.');
            return false;
        }else{
            setError('');
            return true;
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentState === 'Sign Up' && !validatePassword(password)){
            return;
        }
        setIsLoggedIn(true);
        setShowLogin(false);
    }
  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <i className="fa-solid fa-xmark" onClick={()=>setShowLogin(false)}></i>    
        </div>

        <div className='login-popup-input'>
            {currentState === 'Login' ? <></> : <input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Email address' required/>
            <input 
                type='password' 
                placeholder='Password' 
                required 
                value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value);
                    if(currentState === 'Sign Up') validatePassword(e.target.value)
                }}
            />
            {error && <p className='password-error'>{error}</p>}
        </div>
        <button type='submit'>
            {currentState === 'Sign Up'? 'Create Account' :'Login'}
        </button>
        <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' 
            ?<p>Create a new Account? <span onClick={()=>setCurrerentState('Sign Up')}>Click here</span> </p>
            :<p>Already have an Account <span onClick={()=>setCurrerentState('Login')}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
