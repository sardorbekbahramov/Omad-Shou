import React from 'react'
import './SignIn.css'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
      <div className="sign__in">
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
      </div>
    </>
  )
}

export default SignIn  