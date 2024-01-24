import React, {useState, useEffect} from 'react';
import "./game_main.css"
import GameHeader from '../game_header/Game_header';
import { Audio } from 'react-loader-spinner';
import cart_image from '../game_images/cart.jpg';




const GameMain = () => {


// =========== Get Randomic Number Btn ============>
let getRandomNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const [randomValue, setRandomValue] = useState(null);
const generateRandomNumber = () => {
    const newRandomValue = getRandomNumber(1, 5);
    setRandomValue(newRandomValue);
};
// =========== Get Randomic Number Btn ============|>


// ==== loader function for each rendering visibility ===>
    const [showLoader, setShowLoader] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            setShowLoader(false);
            setShowContent(true);
        }
        fetchData();
    }, []);
// =====================================================>

    return (
        <>
            {showLoader && <div className='loader'>
                <Audio
                    height="180"
                    width="180"
                    radius="12"
                    color="#1B3358"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                    />
                </div>}
            {showContent && (
                <>
                    <GameHeader/> 
                    <section className='game_main'>
                        <div className="random_content">
                            <div className="btn_box">
                                <button onClick={generateRandomNumber}>Get Randomic number</button>
                            </div>
                            <div className='random_num'>
                                <span>You can choose another cards:{randomValue !== null && <p className='num'>{randomValue}</p>}</span>
                            </div>
                        </div>
                       
                        <div className="container">
                            <div className="content_container">
                                <div className="content_card">
                                    <ul className='f-flex'>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                    </ul>
                                </div>
                                <div className="content_card">
                                    <ul className='f-flex'>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                    </ul>
                                </div>
                                <div className="content_card">
                                    <ul className='f-flex'>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                        <li><img src={cart_image} alt="cartimg" /></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="gift_products">
                                <div className="gift_content">
                                    <ul>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                    </ul>
                                </div>
                                <div className="gift_content">
                                    <ul>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                        <li>Lampochka</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default GameMain;
