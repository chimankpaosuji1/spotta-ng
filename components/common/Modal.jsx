"use client";

import React from "react";
import { CustomButton } from "../../components";

const Modal = ({ isOpen, onClose }) => {
  // const router = useRouter();

  const handleSubmit = () => {

  }
  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Review Location
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-gray-500">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              {/* Using useRouter to dismiss modal*/}
              <CustomButton
                title="SUBMIT"
                handleClick={handleSubmit}
                containerStyles="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <CustomButton
                title="CANCEL"
                handleClick={onClose}
                containerStyles="px-4 py-2 bg-white border-2 border-blue text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
