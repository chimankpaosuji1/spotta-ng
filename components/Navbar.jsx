"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import CustomButton from "./CustomButton";
import { UserAuth } from "../context/AuthContext";
import { IoMdExit } from "react-icons/io";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <header className="w-full bg-white  fixed z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {loading ? null : !user ? (
          <Link href="/login">
            <CustomButton
              title="LOGIN"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] font-inter font-semibold text-[14px]"
            />
          </Link>
        ) : (
          <div className="flex gap-1 font-inter text-16px font-medium items-center justify-between">
            <p>Welcome</p>
            <div className="flex flex-col items-end justify-end ml-4">
              <img
                src="james.svg"
                alt="logo"
                width={20}
                height={18}
                className="object-contain"
              />
              {/* <p className="text-[14px]">{user.displayName}</p> */}
            </div>
            <IoMdExit
              size={25}
              color="red"
              className="ml-4 cursor-pointer"
              onClick={handleSignOut}
            />
            {/* <p className="cursor-pointer" onClick={handleSignOut}>
              Sign out
            </p> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
