import React, {useState, useEffect}  from 'react'
import Circle from "../../assets/circle.png"
import Baraka from '../../assets/baraka.png'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer/Footer';
import { Audio } from 'react-loader-spinner';



const Home = () => {
    const [showLoader, setShowLoader] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            await new Promise(resolve => setTimeout(resolve, 1500));

            setShowLoader(false);
            setShowContent(true);
        }
        fetchData();
    }, []);

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
                    <div className="header_box_heading">
                        <h1 className='loader_header'>Xush Kelibsiz</h1>
                    </div>
                </div>}
            {showContent && ( 
                <>
                <Navbar />
                <div className='home'>
                    <div className="home__circle">
                        <img className='home__img' src={Circle} alt="img" />
                        <Link to={'/omad'}>
                        <button>Omad shouni online o'ynash</button>
                        </Link>
                    </div>
                    <div className="home__baraka">
                        <img className='home__img' src={Baraka} alt="img" />
                        <Link to='/boriga_baraka'>
                        <button>Boriga barakani online o'ynash </button>
                        </Link>
                    </div>
                </div>
                <Footer/>
                </>
            )}  
        </>        
)}

export default Home