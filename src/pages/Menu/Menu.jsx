import React from 'react'
import Omad from '../../assets/omadshou.png'
import Baraka from '../../assets/baraka.png'
import { ImCross } from "react-icons/im";
import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <div className="menus">

      <div className="menu__head">
        <h1>Menu</h1>
        <Link className='menu__cross' to={"/"}>
        <ImCross/>
        </Link>
      </div>
      <div className="menu__text">
        <div className="menu__items">
          <p>O'yin haqida ma'lumot</p>
        </div>
        <div className="menu__items">
          <p>Yordam kerakmi ?</p>
        </div>
      </div>
      <div className="menu__last">
        <img src={Omad} alt="" />
        <img src={Baraka} alt="" />
      </div>
      <div className="menu__footer">
        <p>2024. Barcha huquqlar himoyalangan</p>
      </div>
      </div>
    </div>
  )
}

export default Menu