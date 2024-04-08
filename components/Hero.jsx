"use client";

import Image from "next/image";
import Review from "./Review";
import { CiSearch } from "react-icons/ci";

import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find a place you will love to live!</h1>

        <p className="hero__subtitle">
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </p>
        <div className=" mt-10 flex items-center justify-start gap 2 bg-slate-100 pl-3 rounded-[10px] border-1 border-gray-50">
          <CiSearch />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-gray-500 border-none"
          />
        </div>

        <CustomButton
          title="SEARCH"
          containerStyles="bg-[#3366FF] text-white rounded-[5px] mt-5 text-[16px] font-inter font-medium text-[16px]"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container p-4 w-[100%] items-center justify-center">
        <div className="bg-gray-50 p-4 w-[70%] items-center justify-center overflow-auto">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Hero;
