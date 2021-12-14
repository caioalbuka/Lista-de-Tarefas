// import React, { useRef } from 'react';
// import ReactDom from 'react-dom';
// import Button from './Button';

// export const Modal = ({ setShowModal }) => {
//   // close the modal when clicking outside the modal.
//   const modalRef = useRef();
//   const closeModal = (e) => {
//     if (e.target === modalRef.current) {
//       setShowModal(true);
//     }
//   };
//   //render the modal JSX in the portal div.
//   return ReactDom.createPortal(
//     <div className="container" ref={modalRef} onClick={closeModal}>
//       <div className="modal">
//         <h2>Isto é um PopUp</h2>
//         <Button onClick={() => setShowModal(true)}>Voltar</Button>
//         <Button onClick={() => setShowModal(false)}>Ok</Button>
//       </div>
//     </div>,
//     document.getElementById('portal'),
//   );
// };
// export default Modal;
