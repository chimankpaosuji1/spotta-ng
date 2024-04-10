"use client";
import { useState, useEffect } from "react";
import { CustomButton } from "../../components";
import Image from "next/image";
import { UserAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";


const page = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");   
  const { user, googleSignIn } = UserAuth();
  const [loading, setLoading] = useState(true);
   const router = useRouter();

  //  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  //  const router = useRouter();

     const handleSignInGoogle = async () => {
       try {
         await googleSignIn();
          
       } catch (error) {
         console.log(error);
       }
     };
      const handleSignIn = async () => {};

    

     useEffect(() => {
       const checkAuthentication = async () => {
         await new Promise((resolve) => setTimeout(resolve, 50));
         setLoading(false);
       };
       checkAuthentication();
     }, [user]);


  return (
    <>
      {loading ? <div>loading...</div> : !user ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-[#ffffff] p-5 rounded-lg shadow-xl w-[498px] font-inter">
            <h1 className="text-[#101012] text-2xl mb-5 text-center">Log In</h1>
            <input
              type="email"
              placeholder="E-mail"
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
            <CustomButton
              title="LOG IN"
              containerStyles="w-full p-3 mb-4 bg-[#3366FF] rounded-[6px] text-white text-[16px] hover:bg-indigo-500"
              handleClick={handleSignIn}
            />

            <p className="mt-5 mb-4 text-center text-gray-700">Or</p>
            <button
              onClick={handleSignInGoogle}
              className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
            >
              <Image
                src="/google.svg"
                alt="logo"
                width={20}
                height={18}
                className="object-contain"
              />
              <p>Log in with Google</p>
            </button>
            <button
              onClick={handleSignIn}
              className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
            >
              <Image
                src="/facebook.svg"
                alt="logo"
                width={20}
                height={18}
                className="object-contain"
              />
              <p>Log in with Facebook</p>
            </button>
            <button
              onClick={handleSignIn}
              className="w-full p-3 mb-4 bg-[#ffffff] border-[#D8DAE5] border-2 rounded-[6px] text-[#1E1E1E] text-[14px] font-normal hover:bg-indigo-500 flex items-center justify-center gap-4"
            >
              <Image
                src="/apple.svg"
                alt="logo"
                width={23}
                height={18}
                className="object-contain"
              />
              <p>Log in with Apple</p>
            </button>
            <p className="mt-5 text-center text-[12px] font-normal text-gray-700">
              <a href="/sign-up" className="underline cursor-pointer">
                Forgot your password?
              </a>
            </p>
            <p className="mt-5 text-center text-[12px] font-normal text-gray-700">
              Don't have an account? &nbsp;
              <a
                href="/sign-up"
                className="underline cursor-pointer text-[#3366FF]"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      ) : (
        router.push("/home")
      )}
    </>
  );
};

export default page;
