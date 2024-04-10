import React from "react";
import { Places } from "../../contants";
import { LiaLessThanSolid, LiaGreaterThanSolid } from "react-icons/lia";
import Image from "next/image";
import { CustomButton } from "../../components";
import Emptyreview from "../../components/Emptyreview"
import Peoplereview from "../../components/Peoplereview";
import withAuth from "../../components/ProtectedRoute";

const page = () => {
  return (
    <div className="w-full  pt-[20px]">
      
      <Emptyreview />
      {/* <Peoplereview /> */}
    </div>
  );
};

export default (page);
