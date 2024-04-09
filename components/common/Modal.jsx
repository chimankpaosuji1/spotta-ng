import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content w-[80%] bg-white p-4 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="close absolute top-0 right-0 p-2 cursor-pointer">
         
        </span>
        <p>This is the modal content!</p>
      </div>
    </div>
  );
};


export default Modal;