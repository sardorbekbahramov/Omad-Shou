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
            <div className="payment_full">
            <div className="container-payment">
                <form className='payment_form'>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" placeholder='email@gmail.com'/>
                    </div>
                    <div className="card">
                        <label>Karta malumotlari</label>
                        <input type="number" placeholder='1234 1234 1234 1234' required className='input-with-icons'/>
                        <span className="input-icons">
                            <FaCcAmazonPay /> <FaCcApplePay className='one'/> <FaCcPaypal className='one'/>
                        </span>

                        <input type="number" placeholder='MM/YY'required/>
                        <input type="number" placeholder='CVC' required className="input-with-icon"/>
                        <span className="input-icon"><MdOutlinePayments/></span>
                    </div>

                    <div className="card_name">
                        <label>Karta nomi</label>
                        <input type="text" placeholder="Kartaning to'liq nomi"/>
                    </div>

                    <div className="country">
                        <label htmlFor="country">Mamlakat & Shahar</label>
                        <select id="country" value={selectedValue} onChange={handleSelectChange}>
                            <option value="" disabled hidden>Mamlakatizni tanlang </option>
                            <option value="Uzbekistan">Uzbekiston</option>
                            <option value="Kazakistan">Kazakiston</option>
                            <option value="Turkmanistan">Turkmaniston</option>
                            <option value="Tajikistan">Tojikistan</option>
                        </select>
                    </div>
                    <div className="securety">
                        <input type="checkbox"/>
                        <label>Ma'lumotlarni saqlashga ruxsat</label>
                        <p>Ma'lumotlar qayta kirish uchun yunaltiriladi</p>
                    </div>

                    <button type='submit'>To'lov 5000.00 </button>
                </form>
            </div>
            </div>
            <div className='footer_signing'>
                <Footer/>
            </div>
        </>
    );
}

export default Payment;
