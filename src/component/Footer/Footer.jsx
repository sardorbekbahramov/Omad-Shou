import React from 'react';
import logoOmadShou from "../../assets/omadshou.png"
import logoBorigaBaraka from "../../pages/Main_game/game_images/logo.png"
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container_footer grid2">
                    <div className="box">
                        <img src={logoOmadShou} width={'50px'} alt="" />
                        <img src={logoBorigaBaraka} width={'50p'} alt="" />
                        <p>© 2024 All Rights Reserved, Omad Shou</p>
                        
                        <div className="icon d-flex">
                            <div className="img d-flex">
                                <i className="fa-brands fa-google-play"></i>
                                <span>Google Play</span>
                            </div>
                            <div className="img d-flex">
                                <i className="fa-brands fa-app-store-ios"></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                        <div className='box box_one'>
                            <h2>About Us</h2>
                            <ul>
                                <li>Our Company</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='box .box_one'>
                            <h2>Customer Care</h2>
                            <ul>
                                <li>Help Center </li>
                                <li>How to Play </li>
                                <li>Payment Guide </li>
                            </ul>
                        </div>
                        <div className='box .box_one'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Street: 70 Washington Square</li>
                                <li>Email: uilib.help@gmail.com</li>
                                <li>Phone: +1 1123 456 780</li>
                            </ul>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;