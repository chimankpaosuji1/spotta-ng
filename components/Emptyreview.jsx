'use client'
import { Places } from "../contants";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Modal from "./common/modal";
import { useState } from "react";

const Emptyreview = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="bg-[#F2F6FD] pt-[100px]">
        <div className=" w-[90%] mx-auto flex flex-col items-start justify-start ">
          <div className="font-inter text-[24px] font-medium">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </div>
          <div className="font-inter text-[16px] font-semibold">
            “0” Reviews
          </div>
          <ul className="flex items-center justify-center gap-2 overflow-y-hidden xl:overflow-x-hidden overflow-x-scroll xl:w-full w-[50%]">
            <LiaLessThanSolid />
            {Places.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-[1px] my-[30px] py-0.5 px-1.5 border-2 border-gray-200"
              >
                <span className="font-inter text-[14px] font-normal">
                  {item.name}
                </span>
              </li>
            ))}
            <LiaGreaterThanSolid />
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-11 p-auto flex flex-col gap-10 items-center justify-center">
        <Image
          src="empty.svg"
          alt="empty"
          width={323.4}
          height={255}
          className="object-contain"
        />
        <span className="font-inter text-[16px] font-normal">
          Oops! No reviews yet.
        </span>
        <CustomButton
          title="LEAVE A REVIEW"
          btnType="button"
          containerStyles="bg-[#3366FF] text-white w-[210px] font-inter font-semibold text-[14px] rounded-[6px]"
          handleClick={handleModalOpen}
        />
        <Modal isOpen={modalOpen} onClose={handleModalClose} />
      </div>
    </>
  );
};

export default Emptyreview;
