"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomButton } from "../../components";
import Image from "next/image";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";


const page = () => {
   
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState(null);
    const { signUp } = UserAuth();
   const router = useRouter();

   const handleSignin = async () => {
     // try {
     //   const res = await signInWithEmailAndPassword(email, password);
     //   console.log({ res });
     //   sessionStorage.setItem("user", true);
     //   setEmail("");
     //   setPassword("");
     //   router.push("/");
     // } catch (e) {
     //   console.error(e);
     // }
   };

    const handleSignup = async () => {
        if (!(password === confirmPassword)) {
            return setError('Passwords do not match');
        }  else if (password.length < 6 ) {
            return setError('Password must be at least 6 characters long')
        }else{
          try {
              const data = await signUp( username, email, password);
              
              localStorage.setItem("token", data.data.token);
              localStorage.setItem("userId", data.data.user.id);
              router.push('/');
          }catch(err){
              setError(err.message);
          }
      }
    };
    // const handleSignup = async () => {
      

    //   if (password !== confirmPassword) {
    //     setError("Passwords don't match");
    //     return;
    //   }

    // try {
    //   const res = await signUp(email, password);
    //   console.log({ res });
    //   sessionStorage.setItem("user", true);
    //   console.log("Sign up successful!");
    // } catch (error) {
    //   console.error("Error signing up:", error);
    // }

    // };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#ffffff] p-5 rounded-lg shadow-xl w-[498px] font-inter mt-20">
        <h1 className="text-[#101012] text-2xl  mb-5 text-center">Sign Up</h1>
        <div className="flex items-center justify-between gap-x-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 mb-4 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 mb-4 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-gray-500"
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="E-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-[#101012]"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-[#F3F7FE] rounded outline-none text-[#101012] text-[14px] font-inter font-normal placeholder-[#101012]"
        />
        <CustomButton
          title="SIGN UP"
          containerStyles="w-full p-3 mb-4 bg-[#3366FF] rounded-[6px] text-white text-[16px] hover:bg-indigo-500"
          handleClick={handleSignup}
        />

        <p className="mt-5 mb-4 text-center text-gray-700">Or</p>
        <button
          onClick={handleSignup}
          className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
        >
          <Image
            src="/google.svg"
            alt="logo"
            width={20}
            height={18}
            className="object-contain"
          />
          <p>Sign Up with Google</p>
        </button>
        <button
          onClick={handleSignup}
          className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
        >
          <Image
            src="/facebook.svg"
            alt="logo"
            width={20}
            height={18}
            className="object-contain"
          />
          <p>Sign Up with Facebook</p>
        </button>
        <button
          onClick={handleSignup}
          className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
        >
          <Image
            src="/apple.svg"
            alt="logo"
            width={23}
            height={18}
            className="object-contain"
          />
          <p>Sign Up with Apple</p>
        </button>

        <p className="mt-5 text-center text-[12px] font-normal text-gray-700">
          Already have an account? &nbsp;
          <Link
            href="/login"
            className="underline cursor-pointer text-[#3366FF]"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
