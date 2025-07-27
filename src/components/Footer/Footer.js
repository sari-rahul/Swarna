import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import QRcode from '../../assets/QR-code.png';
import Playstore from '../../assets/PlaystoreImg.png'
import Appstore from '../../assets/AppstoreImg.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-inner-section'>
             <div className='footer-left-section'>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
        </div>
        <h3>Download the app now</h3>
        <div className='qr-code'>            
            <img src={QRcode} alt='QR code'/>
        </div>
        <div className='download-links'>
            <div>
                <img src={Playstore} alt='playstore button'/>
            </div>
            <div>
                <img src={Appstore} alt='appstore button'/>
            </div>
        </div>
      </div>
      <div className='footer-right-section'>
        <div className='footer-main-links'>
            <div className='useful-links'>
                <h4>Useful Links</h4>
                <ul>
                    <li>Delivery Information</li>
                    <li>International Shipping</li>
                    <li>Payments Options</li>
                    <li>Track Your Order</li>
                    <li>Returns</li>
                    <li>Find a Store</li>
                </ul> 
            </div>
            <div className='information'>
                <h4>Information</h4>
                <ul>
                    <li>Blog</li>
                    <li>Contest & Offer Details</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='contact-section'>
                <div className='contacts'>
                    <h4>Contact Us</h4>
                    <p>1234-098765</p>
                </div>
                <div className='chats'>
                    <h4>Chat With Us</h4>
                    <p>1234-234564</p>
                    <div className='footer-icon-section'>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='social-links'>
            <h5>Social</h5>
            <div className='icon-bg'>
                <i className="fa-brands fa-facebook"></i>
            </div>
            <div className='icon-bg'>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className='icon-bg'>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <div className='icon-bg'>
                <i className="fa-brands fa-twitter"></i>
            </div>
            
        </div>
        <div className='payment-links'>
            <i className="fa-brands fa-cc-visa payment-icons"></i>
            <i className="fa-brands fa-cc-paypal payment-icons"></i>
            <i className="fa-brands fa-cc-mastercard payment-icons"></i>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Footer
