"use client";

// import { useRouter } from "next/router";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  // const router = useRouter();
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      {/* <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content w-[50%] bg-white p-4 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="close absolute top-0 right-0 p-2 cursor-pointer">

        </span>
        <p>This is the modal content!</p>
      </div> */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-gray-500">Modal Body</p>
            </div>
            <div className="flex justify-center mt-4">
              {/* Using useRouter to dismiss modal*/}
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
