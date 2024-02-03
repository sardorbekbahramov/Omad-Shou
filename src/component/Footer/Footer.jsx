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
                        <p>© 2024 Barcha huquqlar himoyalangan, Omad Shou</p>
                        
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
                            <h2>Biz Haqimizda</h2>
                            <ul>
                                <li>Bizning Kompaniya</li>
                                <li>Shartlar & Sharoitlar</li>
                                <li>Maxfiylik Siyosati</li>
                            </ul>
                        </div>
                        <div className='box .box_one'>
                            <h2>Xizmat Ko'rsatish</h2>
                            <ul>
                                <li>Yordam Markazi</li>
                                <li>O'yin Qoidalari </li>
                                <li>To'lov Yo'riqnomasi</li>
                            </ul>
                        </div>
                        <div className='box .box_one'>
                            <h2>Biz Bilan Bog'laning</h2>
                            <ul>
                                <li>Manzil: Labzak 70 Tashkent</li>
                                <li>Email: omadshou.help@gmail.com</li>
                                <li>Tel: +998 77 217 77 77</li>
                            </ul>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;