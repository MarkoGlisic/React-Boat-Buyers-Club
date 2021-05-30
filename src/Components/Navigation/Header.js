import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./header.css";
import logo from '../../Images/logo.png'
import hamburger from '../../Images/hamburger.png'
import cross from '../../Images/cross.png'

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
      <Link to='/'>
        <div className="logo-container">
          <img className='logo' src={logo} alt=""/>
          <p className='slogan'>The Boat Buyers Club</p>
        </div>
      </Link>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">HOME</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/boats">BOATS</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
          
        </ul>
      </div>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ?  <img style={{height:'25px'}}src={cross} alt='burger-icon'></img> : <img style={{height:'30px'}}src={hamburger}alt='burger-icon'></img>}
      </div>
    </div>
  );
};

export default Header;