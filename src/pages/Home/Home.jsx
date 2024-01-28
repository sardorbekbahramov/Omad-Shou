import React from 'react'
import Circle from "../../assets/circle.png"
import Baraka from '../../assets/baraka.png'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer/Footer'


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <div className="home__circle">
                    <img className='home__img' src={Circle} alt="" />
                    <Link to={'/omad'}>
                    <button>Omad shouni online oynash</button>
                    </Link>
                </div>
                <div className="home__baraka">
                    <img className='home__img' src={Baraka} alt="" />
                    <Link to='/boriga_baraka'>
                    <button>Boriga barakani online oynash </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home