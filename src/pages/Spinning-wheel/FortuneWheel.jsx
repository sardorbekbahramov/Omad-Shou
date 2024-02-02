import React, { useState, useEffect } from 'react';
import './FortuneWheel.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const FortuneWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);

  useEffect(() => {
    if (!isSpinning && winnerIndex !== null) {
      // Do something with the winnerIndex, e.g., display a message or take an action
      console.log('Winner:', prizes[winnerIndex]);
    }
  }, [isSpinning, winnerIndex]);

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);

      // Reset the rotation before each spin
      setRotation(0);

      // Rotate for a random number of degrees between 360 and 3600
      const randomDegrees = 360 + Math.random() * 3240;
      setRotation((prevRotation) => prevRotation + randomDegrees);

      // Disable the button during the spin
      setTimeout(() => {
        setIsSpinning(false);
        const randomIndex = Math.floor(Math.random() * prizes.length);
        setWinnerIndex(randomIndex);
      }, 7000);
    }
  };

  const prizes = [
    'Nothing here',
    '5000.00 soum',
    '10000.00 soum',
    '5000.00 soum',
    'Nothing here',
    '5000 soum',
    'Nothing here',
    '100000.00 soum',
    'Televezor',
    '500000.00 soum',
  ];

  return (
    <>
    <Navbar/>
    <div className='safd'>
      <div className="clickcac">
        <div className="spin__click"></div>
      </div>

      <div className="wheel-container">
        <div className={`wheel ${isSpinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotation}deg)` }}>
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
          <div className="message">Spinning...</div>
          ) : (
            <button className="spin-button" onClick={spinWheel}>
            Spin the Wheel
          </button>
        )}
      </div>
    </div>
    <Footer/>
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
