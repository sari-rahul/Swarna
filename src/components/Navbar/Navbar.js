import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Logo.png'
import { useState } from 'react';

const Navbar = ({setShowLogin , isLoggedIn}) => {
  const[menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='navbar'>
      <div className='left-section'>
        <div className='input-section'>
          <input placeholder='Search your favourite products'>
          </input>
          <div className='icon-section'>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          
        </div>        
        <ul className='navbar-menu'>
          <a href='#Gold-collection'>Gold</a>
          <a href='#silver-collection'>Silver</a>
          <a href='#Diamond-collection'>Diamonds</a>
          <a href='#Platinum-collection'>Platinum</a>
        </ul>
      </div>
      <div className='logo-section'>
        <Link to="/"><img src={logo} alt="logo" /> </Link>
      </div>
      <div className='right-section'>
        {isLoggedIn ?(
          <ul className='navbar-icons'>
            <li>
              <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
            </li>
            <li><i className="fa-solid fa-location-dot"></i></li>
            <li><i className="fa-solid fa-heart"></i></li>
            <li><i className="fa-solid fa-bag-shopping"></i></li>
        </ul> 
        ):(<button className='signup-button' onClick={()=>setShowLogin(true)}>
            Sign In
          </button>
          )}
        
        
        <ul className='navbar-menu'>
          <a href='#Gift-collection'>Gift</a>
          <a href='#Watches-collection'>Watches</a>
          <a href='#Schemes-collection'>Schemes</a>
          <a href='#Gold-Rate'>Gold Rate</a>
        </ul>
      </div>
    </div>

    <div className='navbar-mobile'>
       <div className='inner-container'>
        <i className="fa-solid fa-bars burger-menu" 
          onClick={()=>setMenuOpen(true)}>
        </i>
        <div className='search-bar'>
          <input placeholder='Search your favourite products'></input>
          <div className='icon-section'>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>       
        </div> 
        <div className='scroll-menu-wrapper'>
          <div className='scroll-menu'>
          <a href='#Gold-collection'>Gold</a>
          <a href='#silver-collection'>Silver</a>
          <a href='#Diamond-collection'>Diamonds</a>
          <a href='#Platinum-collection'>Platinum</a>
          <a href='#Gift-collection'>Gift</a>
          <a href='#Watches-collection'>Watches</a>
          <a href='#Schemes-collection'>Schemes</a>
          <a href='#Gold-Rate'>Gold Rate</a>
        </div>
        </div>
      {/* Sidebar */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li>
            <Link to="/Profile">
              <i className="fa-solid fa-user"></i> Profile
            </Link>
          </li>
          <li><i className="fa-solid fa-heart"></i> Liked</li>
          <li><i className="fa-solid fa-location-dot"></i> Location</li>
          <li><i className="fa-solid fa-cart-shopping"></i> Cart</li>
          <li><button className="signup-btn">Signup</button></li>
        </ul>
      </div>
      {/* Backdrop */}
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)}></div>}
    </div>
    </>
    
  )
}

export default Navbar
