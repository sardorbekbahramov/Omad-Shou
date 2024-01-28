import React, { useState } from 'react';
import Logo from '../../assets/omadshou.png';
import Head from './Head';
import { FaUser, FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
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
        <ul className={`navbar__collection ${isMobile ? 'hidden' : ''}`}>
          <Link to={'/'} className="navbar__item">Home</Link>
          <Link to={'/menu'} className="navbar__item">Menu</Link>
          <Link to={''} className="navbar__item">About</Link>
          <Link to={'/'} className="navbar__item">Profile</Link>
          <Link to={'/payment'} className="navbar__item">Payment</Link>
        </ul>
        
        <Link to={'/sign_in'} className="navbar__sign_in">
          <FaUser  className='fa-user'/>
          <p>Sign in</p>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

// {/* <div className={`navbar__sidebar ${isMobile ? 'show' : ''}`}>
//         <ImCross className='navbar__cross' onClick={handleToggle} />
//         <ul className="navbar__collection_2">
//           <Link to={'/'} className="navbar__item_2">Home</Link>
//           <Link to={'/menu'} className="navbar__item_2">Menu</Link>
//           <Link to={''} className="navbar__item_2">About</Link>
//           <Link to={'/'} className="navbar__item_2">Profile</Link>
//         </ul>
//         <Link to={'/sign_in'} className="navbar__sign_in_2">
//           <FaUser />
//           <p>Sign in</p>
//         </Link>
//       </div> */}
  