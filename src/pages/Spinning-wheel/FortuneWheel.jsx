import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './FortuneWheel.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import Modal from './Modal';

const FortuneWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');
  const [arrowAngle, setArrowAngle] = useState(0);

  const prizes = useMemo(() => [
    'Yutuqsiz',
    '5000.00 soum',
    '10000.00 soum',
    '5000.00 soum',
    'Yutuqsiz',
    '5000.00 soum',
    'Yutuqsiz',
    '100000.00 soum',
    'Televezor',
    '500000.00 soum',
  ], []);

  useEffect(() => {
    const handleModalContent = () => {
      if (!isSpinning && winnerIndex !== null) {
        setContent(`Yutuq: ${prizes[winnerIndex]}`);
        console.log(`Yutuq: ${prizes[winnerIndex]}`);
        
        openModal();
      }
    };

    handleModalContent();
  }, [isSpinning, winnerIndex, prizes]);

  useEffect(() => {
    // Baraban qaysi burchakda tugaganini aniqlash
    const arrowRotation = (winnerIndex * 360) / prizes.length + 90; // Markazdan yuqoriga ko'rish uchun 180 qo'shamiz
    setArrowAngle(arrowRotation);
  }, [winnerIndex, prizes]);

  const spinWheel = useCallback(() => {
    if (!isSpinning) {
      setIsSpinning(true);

      const spinButton = document.querySelector('.spin-button');
      if (spinButton) {
        spinButton.disabled = true;
      }

      setRotation(0);

      const randomDegrees = 360 + Math.random() * 3240;
      setRotation((prevRotation) => prevRotation + randomDegrees);

      setTimeout(() => {
        setIsSpinning(false);
        const randomIndex = Math.floor(Math.random() * prizes.length);
        setWinnerIndex(randomIndex);

        if (spinButton) {
          spinButton.disabled = false;
        }
      }, 7000);
    }
  }, [isSpinning, prizes]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      {isModalOpen && (
        <Modal closeModal={closeModal} content={content} />
      )}
      <div className='safd'>
        <div className="clickcac">
          <div className="spin__click"></div>
        </div>

        <div className="wheel-container">
          <div className={`wheel ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="arrow" style={{ transform: `rotate(${arrowAngle}deg)` }}></div>
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`sector ${winnerIndex === index ? 'winner' : ''}`}
                style={{
                  transform: `rotate(${(index * 360) / prizes.length}deg)`,
                  backgroundColor: getRandomColor(),
                }}
              >
                <p>{prize}</p>
              </div>
            ))}
          </div>
          {isSpinning ? (
            <div className="message">Davr qaytmoqda...</div>
          ) : (
            <button className="spin-button" onClick={spinWheel}>
              Tepaga aylanish
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}; 

export default FortuneWheel;


// import React, { useState, useEffect, useMemo } from 'react';
// import './FortuneWheel.css';
// import Navbar from '../../component/Navbar/Navbar';
// import Footer from '../../component/Footer/Footer';
// import Modal from './Modal';

// const FortuneWheel = () => {
//   const [rotation, setRotation] = useState(0);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [winnerIndex, setWinnerIndex] = useState(null);

//   // ===== Modal Page side =========================>
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [content, setContent] = useState('');

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // ===== Modal Page side Finished ================>

//   const prizes = useMemo(() => [
//     'Yutuqsiz',
//     '5000.00 soum',
//     '10000.00 soum',
//     '5000.00 soum',
//     'Yutuqsiz',
//     '5000.00 soum',
//     'Yutuqsiz',
//     '100000.00 soum',
//     'Televezor',
//     '500000.00 soum',
//   ], []);

//   useEffect(() => {
//     if (!isSpinning && winnerIndex !== null) {
//       // Do something with the winnerIndex, e.g., display a message or take an action
//       console.log(`Winner: ${prizes[winnerIndex]}`);
//       setContent(`Yutuq: ${prizes[winnerIndex]}`);
//       openModal()
      
//     }
//   }, [prizes, isSpinning, winnerIndex]);

//   const spinWheel = () => {
//     if (!isSpinning) {
//       setIsSpinning(true);

//       // Reset the rotation before each spin
//       setRotation(0);

//       // Rotate for a random number of degrees between 360 and 3600
//       const randomDegrees = 360 + Math.random() * 3240;
//       setRotation((prevRotation) => prevRotation + randomDegrees);

//       // Disable the button during the spin
//       setTimeout(() => {
//         setIsSpinning(false);
//         const randomIndex = Math.floor(Math.random() * prizes.length);
//         setWinnerIndex(randomIndex);
//       }, 7000);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {isModalOpen && (
//         <Modal closeModal={closeModal} content={content} />
//       )}
//       <div className='safd'>
//         <div className="clickcac">
//           <div className="spin__click"></div>
//         </div>

//         <div className="wheel-container">
//           <div className={`wheel ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotation}deg)`}}>
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className={`sector ${winnerIndex === index ? 'winner' : ''}`}
//                 style={{
//                   transform: `rotate(${(index * 360) / prizes.length}deg)`,
//                   backgroundColor: getRandomColor(),
//                 }}
//               >
//                 <p>{prize}</p>
//               </div>
//             ))}
//           </div>
//           {isSpinning ? (
//             <div className="message">Spinning...</div>
//           ) : (
//             <button className="spin-button" onClick={spinWheel}>
//               Spin the Wheel
//             </button>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// export default FortuneWheel;





















