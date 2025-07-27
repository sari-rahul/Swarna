import './App.css';
import './styles/variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Home from './pages/Home/Home';

import { useEffect, useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [ isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(()=>{
    localStorage.setItem('isLoggedIn',isLoggedIn);
  },[isLoggedIn])

  return (
    <Router>
       <div className="App">
          <Header/>  
          <Navbar 
            setShowLogin={setShowLogin} 
            isLoggedIn={isLoggedIn}
          />
          {showLogin && (
            <LoginPopup
              setShowLogin={setShowLogin}
              setIsLoggedIn={setIsLoggedIn} 
              isLoggedIn={isLoggedIn}
            />
          )} 
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/profile' element = {<ProfilePage isLoggedIn={isLoggedIn}/>}/>
          </Routes>
    </div>

    </Router>
  );
}

export default App;
