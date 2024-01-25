import 'react-responsive-modal/styles.css';
import "../game_main/game_main.css"
import React, { useState, useEffect } from 'react';



const Modal = ({ closeModal, content }) => {

  
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>&times;</span>
            <h2>{content}</h2>
        </div>
      </div>
    );
  };
export default Modal;