import React, {useState} from 'react';
import { MdOutlinePayments } from "react-icons/md";
import { FaCcAmazonPay, FaCcApplePay, FaCcPaypal } from "react-icons/fa";

import './payment.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const Payment = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
     };



    return (
        <>
            <Navbar/>
            <div className="container-payment">
                <form className='payment_form'>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" placeholder='youremail@gmail.com'/>
                    </div>
                    <div className="card">
                        <label>Card information</label>
                        <input type="number" placeholder='1234 1234 1234 1234' required className='input-with-icons'/>
                        <span className="input-icons">
                            <FaCcAmazonPay /> <FaCcApplePay className='one'/> <FaCcPaypal className='one'/>
                        </span>

                        <input type="number" placeholder='MM/YY'required/>
                        <input type="number" placeholder='CVC' required className="input-with-icon"/>
                        <span className="input-icon"><MdOutlinePayments/></span>
                    </div>

                    <div className="card_name">
                        <label>Cardholder name</label>
                        <input type="text" placeholder='Full name on card'/>
                    </div>

                    <div className="country">
                        <label htmlFor="country">Country or region</label>
                        <select id="country" value={selectedValue} onChange={handleSelectChange}>
                            <option value="" disabled hidden>Select your country</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Kazakistan">Kazakistan</option>
                            <option value="Turkmanistan">Turkmanistan</option>
                            <option value="Tajikistan">Tajikistan</option>
                        </select>
                    </div>
                    <div className="securety">
                        <input type="checkbox"/>
                        <label>Securety save my information for checkout</label>
                        <p>Pay faster on site, everywhere Link is accepted</p>
                    </div>

                    <button type='submit'>Pay</button>
                </form>
            </div>
            <div className='footer_sign'>
                <Footer/>
            </div>
        </>
    );
}

export default Payment;
