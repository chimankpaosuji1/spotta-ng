import Link from "next/link";
import Image from "next/image";
import Rating from "./common/Rating";
import CustomButton from "./CustomButton";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { ReviewSec } from "../contants/index"

const Review = () => (
  <div className="overflow-y-auto overflow-x-hidden">
    <div className="review gap-5">
      {ReviewSec.map((item, index) => {
          return (
            <div key={index} className="review_section p-3 bg-white">
              <div className="flex items-center justify-between  ">
                <div className="flex items-center justify-start gap-1">
                  <Image
                    src="/james.svg"
                    alt="Picture"
                    height={20}
                    width={20}
                  />
                  <div className="flex flex-col items-start justify-start">
                    <span className="font-inter text-[12px] font-medium">
                      James T.
                    </span>
                    <span className="font-inter text-[8px] font-light">
                      5 months ago
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <span className="font-inter text-[11px] font-medium">
                    Ikate, Lekki
                  </span>
                  <Rating />
                </div>
              </div>
              <div className="font-inter text-[14px] font-normal mt-2">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are lots stores
                and Supermarkets.
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start justify-self gap-2">
                  <AiFillLike
                    size={14}
                    color="#8F95B2"
                    className="mr-0 cursor-pointer"
                  />{" "}
                  <span className="font-inter text-[10px] font-medium text-[#8F95B2]">
                    24
                  </span>
                  <AiFillDislike
                    size={14}
                    color="#8F95B2"
                    className="mr-0 cursor-pointer"
                  />
                  <span className="font-inter text-[10px] font-medium text-[#8F95B2]">
                    02
                  </span>
                  <FaMessage
                    size={14}
                    color="#8F95B2"
                    className="mr-0 cursor-pointer"
                  />
                  <span className="font-inter text-[10px] font-medium text-[#8F95B2]">
                    125
                  </span>
                </div>
                {/* <button
            className={`bg-[#F5E9CB] px-[15px] py-[0.2px] border-[#A07C22] border-[1px] rounded-[15px]`}
          >
            <span className="font-inter text-[9px] font-medium">traffic</span>
          </button> */}
                <CustomButton
                  title={item.buttontitle}
                  containerStyles={`${item.buttonStyle} !pt-[0.2rem] !pb-[0.2rem] !pl-[0.5rem]  !pr-[0.5rem] border-[#A07C22] border-[1px] rounded-[15px] font-inter text-[9px] font-medium`}
                />
              </div>
            </div>
          );
        })}
    </div>
  </div>
);

export default Review;
