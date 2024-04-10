'use client'
import { Places, Reviews } from "../contants";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { AiOutlineLike, AiOutlineDislike, AiFillStar } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { useState } from "react";

const Peoplereview = () => {
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
        <div className=" w-[90%] mx-auto">
          <div className="flex xl:items-center items-start xl:justify-between gap-2 xl:flex-row flex-col">
            <div>
              <div className="font-inter text-[24px] font-medium">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </div>
              <div className="font-inter text-[16px] font-semibold">
                “450” Reviews{" "}
                <span className="font-normal">
                  (People are raving about the selected location)
                </span>
              </div>
            </div>
            <div className="flex item-end justify-end gap-3">
              <CustomButton
                title="LEAVE A REVIEW"
                btnType="button"
                containerStyles="bg-[#3366FF] text-white w-[210px] h-[50px] font-inter font-semibold text-[14px] rounded-[6px]"
                handleClick={handleModalOpen}
              />
              <Modal isOpen={modalOpen} onClose={handleModalClose} />
              <CiBookmark
                size={50}
                color="#3366FF"
                className="cursor-pointer p-2 border-2 border-[#3366FF]"
              />
              <CiShare2
                size={50}
                color="#3366FF"
                className="cursor-pointer p-2 border-2 border-[#3366FF]"
              />
            </div>
          </div>

          <ul className="flex items-center justify-center gap-2 overflow-y-hidden xl:overflow-x-hidden overflow-x-scroll xl:w-full md:w-[100%] w-[50%]">
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
      <div className="w-[90%] mx-auto mt-11 flex items-start justify-between">
        <div className="w-[50%]">
          {Reviews.map((item, index) => (
            <>
              <div
                key={index}
                className="flex items-center justify-between key={index}"
              >
                <div className="flex items-center justify-start gap-3">
                  <Image
                    src="/james.svg"
                    alt="Picture"
                    height={20}
                    width={20}
                  />
                  <p className="font-inter text-[14px] font-normal">
                    {item.name}
                  </p>
                  <span className="font-inter text-[14px] font-normal opacity-70">
                    {item.time}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <AiFillStar
                    size={14}
                    color="#f6b100"
                    className="mr-0 cursor-pointer"
                  />
                  <span>4.0</span>
                </div>
              </div>
              <div>
                <p>{item.comment}</p>
              </div>

              <div className="flex items-start justify-self mt-2 mb-5 gap-5">
                <div className="flex items-center justify-start">
                  <AiOutlineLike
                    size={20}
                    color="#3366FF"
                    className="mr-0 cursor-pointer"
                  />{" "}
                  <span className="font-inter text-[12px] font-medium text-[#3366FF]">
                    {item.like}
                  </span>
                </div>
                <div className="flex items-center justify-start">
                  <AiOutlineDislike
                    size={20}
                    color="#8F95B2"
                    className="mr-0 cursor-pointer"
                  />
                  <span className="font-inter text-[12px] font-medium text-[#8F95B2]">
                    {item.dislike}
                  </span>
                </div>
                <div className="flex items-center justify-start">
                  <FaMessage
                    size={20}
                    color="#8F95B2"
                    className="mr-0 cursor-pointer"
                  />
                  <span className="font-inter text-[12px] font-medium text-[#8F95B2]">
                    {item.message}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="review gap-5">
          <Image
            src="land1.svg"
            alt="empty"
            width={235}
            height={224}
            className="object-contain"
          />
          <Image
            src="land2.svg"
            alt="empty"
            width={235}
            height={224}
            className="object-contain"
          />
          <Image
            src="land3.svg"
            alt="empty"
            width={235}
            height={224}
            className="object-contain"
          />
          <Image
            src="land1.svg"
            alt="empty"
            width={235}
            height={224}
            className="object-contain"
          />
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Peoplereview;
