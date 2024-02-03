import React, {useState} from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import './SignIn.css';


const SignIn = () => {
  const [isContainerActive, setContainerActive] = useState(false);

  const handleRegisterClick = () => {
    setContainerActive(true);
  };

  const handleLoginClick = () => {
    setContainerActive(false);
  };

  return (
    <>
    <Navbar/>
    <div className="sign_content_full">
    <div className={`container_full ${isContainerActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h2>Registratsiya</h2>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>Emal & Paroldan foydalaning ...</span>
          <input type="text" placeholder="Ism" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Parol" required/>
          <button>Registratsiya</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h2>Kirish</h2>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>Emal & Paroldan foydalaning ...</span>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Parol" required/>
          <a href="#">Parolni unutdingizmi?</a>
          <button>Kirish</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isContainerActive ? 'active' : ''}`}>
            <h2>Xush Kelibsiz!</h2>
            <p>Uzingiz haqingizdagi ma'lumotlarni to'liq kiriting</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Kirish</button>
          </div>
          <div className={`toggle-panel toggle-right ${isContainerActive ? 'active' : ''}`}>
            <h2>Hayrli kun!</h2>
            <p>O'yinda yangi ishtirokchimisiz? Ruyxatdan o'ting va omadingizni sinab kuring</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Registratsiya</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='footer_sign'>
      <Footer/>
    </div>
    </>
  );
};

export default SignIn;






