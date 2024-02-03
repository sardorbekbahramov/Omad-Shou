import React, { useState } from 'react';
import Logo from '../../assets/omadshou.png';
import Head from './Head';
import { FaUser, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
    console.log("salom")
  };
  return (
    <>
    <Head/>
      <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <a href="">
          <Link to={''}>
            <img src={Logo} alt="" className="logo" />
          </Link>
        </a>
        <FaBars className='navbar__bar' onClick={handleToggle} />
        <ul className={`navbar__collection ${isMobile ? 'nav-links-MobileMenu' : ''}`}>
          <Link to={'/'} className="navbar__item">Bosh Sahifa</Link>
          <Link to={'/menu'} className="navbar__item">Menyu</Link>
          <Link to={''} className="navbar__item">Haqida</Link>
          <Link to={'/'} className="navbar__item">Kabinet</Link>
          <Link to={'/payment'} className="navbar__item">To'lov</Link>
          <Link to={'/sign_in'} className="navbar__sign_in">
          <FaUser  className='fa-user'/>
          <p>Kirish</p>
        </Link>
        </ul>
        <div className={isMobile?"show" : "hide"} onClick={handleToggle}></div>
        
        
      </nav>
    </>
  );
};

export default Navbar;

  