import React from 'react';
import Button from '../Button';
import './Modal.css';

const Modal = ({ text, onClose, secondButtonText, onClicksecondButton }) => {
  return (
    <div className="container-modal" onClick={onClose}>
      <div className="modal">
        <div className="modal-details">
          <div>
            <h2>{text}</h2>
          </div>
          <div className="button-detail">
            <Button onClick={onClose}>Ok</Button>
            {secondButtonText && <Button onClick={onClicksecondButton}>{secondButtonText}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
