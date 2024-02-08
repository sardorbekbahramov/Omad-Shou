
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import './SignIn.css';

const SignIn = () => {
  const [isContainerActive, setContainerActive] = useState(false);
//========== Animation scrol "Kirish" va "Registratsiya" uchun==========>
  const handleLoginClickAnim =()=> {
    setContainerActive(false);
  }

  const handleRegisterClickAnim =()=>{
    setContainerActive(true);
  }
//========== Animation scrol "Kirish" va "Registratsiya" uchun finished ==========>

  const [registrationData, setRegistrationData] = useState({
      name: '',
      email: '',
      password: '',
    });
  const [loginData, setLoginData] = useState({
      email: '',
      password: '',
    });

  const handleRegisterClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: registrationData.email,
          password: registrationData.password,
          name: registrationData.name,
        }),
      });
  
      // Handle the response as needed
      const data = await response.json();
      console.log(data);
  
      // If registration is successful, save user data in local storage
      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(registrationData));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
  
      // Handle the response as needed
      const data = await response.json();
      console.log(data);
  
      // If login is successful, save user data in local storage
      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(loginData));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleInputChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
     <div className="sign_content_full">
      <div className={`container_full ${isContainerActive ? 'active' : ''}`} id="container">
          
            <div className="form-container sign-up">
              <form>
                <h2>Registratsiya</h2>
                <div className="social-icons">
                  <Link to="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-github"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
                <span>Emal & Paroldan foydalaning ...</span>
                <input
                  type="text"
                  placeholder="Ism"
                  name="name"
                  value={registrationData.name}
                  onChange={(e) => handleInputChange(e, setRegistrationData)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={registrationData.email}
                  onChange={(e) => handleInputChange(e, setRegistrationData)}
                  required
                />
                <input
                  type="password"
                  placeholder="Parol"
                  name="password"
                  value={registrationData.password}
                  onChange={(e) => handleInputChange(e, setRegistrationData)}
                  required
                />
                <button type="button" onClick={handleRegisterClick}>
                  Registratsiya
                </button>
              </form>
            </div>

            <div className="form-container sign-in">
              <form>
                <h2>Kirish</h2>
                <div className="social-icons">
                  <Link to="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-github"></i></Link>
                  <Link to="/" className="icon"><i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
                <span>Emal & Paroldan foydalaning ...</span>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  required
                />
                <input
                  type="password"
                  placeholder="Parol"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, setLoginData)}
                  required
                />
                <Link to="/">Parolni unutdingizmi?</Link>
                <button type="submit" onClick={handleLoginClick}>
                  Kirish
                </button>
              </form>
            </div>

            <div className="toggle-container">
            <div className="toggle">
              <div className={`toggle-panel toggle-left ${isContainerActive ? 'active' : ''}`}>
                <h2>Xush Kelibsiz!</h2>
                <p>Uzingiz haqingizdagi ma'lumotlarni to'liq kiriting</p>
                <button className="hidden" id="login" onClick={handleLoginClickAnim}>Kirish</button>
              </div>
              <div className={`toggle-panel toggle-right ${isContainerActive ? 'active' : ''}`}>
                <h2>Hayrli kun!</h2>
                <p>O'yinda yangi ishtirokchimisiz? Ruyxatdan o'ting va omadingizni sinab kuring</p>
                <button className="hidden" id="register" onClick={handleRegisterClickAnim}>Registratsiya</button>
              </div>
            </div>
          </div>

        </div>
     </div>
      <div className="footer-sign">
        <Footer />
      </div>
    </>
  );
};

export default SignIn;



// ============= Sign in codes without database Api codes =====================>
// import React, {useState} from 'react';
// import Navbar from '../../component/Navbar/Navbar';
// import Footer from '../../component/Footer/Footer';
// import './SignIn.css';


// const SignIn = () => {
//   const [isContainerActive, setContainerActive] = useState(false);

//   const handleRegisterClick = () => {
//     setContainerActive(true);
//   };

//   const handleLoginClick = () => {
//     setContainerActive(false);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="sign_content_full">
//     <div className={`container_full ${isContainerActive ? 'active' : ''}`} id="container">
//       <div className="form-container sign-up">
//         <form>
//           <h2>Registratsiya</h2>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>Emal & Paroldan foydalaning ...</span>
//           <input type="text" placeholder="Ism" required/>
//           <input type="email" placeholder="Email" required/>
//           <input type="password" placeholder="Parol" required/>
//           <button>Registratsiya</button>
//         </form>
//       </div>
//       <div className="form-container sign-in">
//         <form>
//           <h2>Kirish</h2>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>Emal & Paroldan foydalaning ...</span>
//           <input type="email" placeholder="Email" required/>
//           <input type="password" placeholder="Parol" required/>
//           <a href="#">Parolni unutdingizmi?</a>
//           <button>Kirish</button>
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className={`toggle-panel toggle-left ${isContainerActive ? 'active' : ''}`}>
//             <h2>Xush Kelibsiz!</h2>
//             <p>Uzingiz haqingizdagi ma'lumotlarni to'liq kiriting</p>
//             <button className="hidden" id="login" onClick={handleLoginClick}>Kirish</button>
//           </div>
//           <div className={`toggle-panel toggle-right ${isContainerActive ? 'active' : ''}`}>
//             <h2>Hayrli kun!</h2>
//             <p>O'yinda yangi ishtirokchimisiz? Ruyxatdan o'ting va omadingizni sinab kuring</p>
//             <button className="hidden" id="register" onClick={handleRegisterClick}>Registratsiya</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className='footer_sign'>
//       <Footer/>
//     </div>
//     </>
//   );
// };

// export default SignIn;






