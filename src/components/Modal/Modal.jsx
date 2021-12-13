import React from 'react';
import Button from '../Button';
import './Modal.css';

const Modal = ({ text, onClose, secondButtonText, onClicksecondButton }) => {
  
  return (
    <div className="container-modal" onClick={onClose}>
      <div className="modal">
        <div className="modal-details">{text}
        <Button onClick={onClose}>Fechar</Button>
        {secondButtonText && <Button onClick={onClicksecondButton}>{secondButtonText}</Button>}
        </div>
      </div>
     
    </div>
  );
};

export default Modal;
