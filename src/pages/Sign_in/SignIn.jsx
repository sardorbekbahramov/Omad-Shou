import React, {useEffect, useState} from 'react';
import './SignIn.css'
import { FaUser, FaLock } from "react-icons/fa";


function SignIn() {
 return (
    <div className='login_page'>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Sign Up</a></p> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;














{/* <div className="sign__in">
      <Link className='menu__cross a' to={"/"}>
        <ImCross/>
        </Link>
        <h1>SIGN UP</h1>
        <p>Shaxsiy profilingizniyarating o'yinda ishtirok etib</p>
        <p> sovrinlar egasiga aylaning!</p>
        <div className="sign__form">
          <span>Ism va Familya</span>
          <input type="text" />
          <span>Telefon raqam</span>
          <input type='number' />
        </div>    
          <Link className='sign__button' to={'/'}>
          <button>Ro'yhatdan o'tish</button>
          </Link>
      </div> */}