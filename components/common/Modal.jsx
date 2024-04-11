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
        <div className="p-4 border w-[695px] shadow-lg rounded-md bg-white">
          <div className="">
            <h3 className=" text-center text-[18px] font-medium text-[#1E1E1E]">
              Review Location
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-[20px] font-medium text-[#1E1E1E]">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </p>
            </div>
            <div className="flex items-center gap-4 justify-between mt-4">
              {/* Using useRouter to dismiss modal*/}
              <CustomButton
                title="SUBMIT"
                handleClick={handleSubmit}
                containerStyles="px-8 py-3 w-full bg-gray-400 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <CustomButton
                title="CANCEL"
                handleClick={onClose}
                containerStyles="px-8 py-3 w-full bg-white border-2 border-blue text-blue text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
