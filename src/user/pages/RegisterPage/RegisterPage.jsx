import { Button } from "@material-tailwind/react";
import "./RegisterPage.css";

export function RegisterPage() {
    return (
      <>
        <section className="max-w-[1440px] mx-auto px-5 ">
          <div className="gridcont2 h-screen">
            <div className="flex flex-col Register  bg-gray-100 px-16 py-16 rounded-[30px] justify-center ">
              <form className=" w-[100%] h-[auto] flex flex-col  font-poppins">
                <h1 className="text-[48px] font-semibold self-center">Register</h1>
                <img
                  className="w-[40%] mb-4 mt-16"
                  src="icons/logo-nav.svg"
                  alt=""
                />
                <h3 className="text-[20px] font-semibold my-6">
                  Welcome to a new experience
                </h3>
                <label className="flex flex-col font-normal text-[11px]">
                  {" "}
                  Name
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="border-none rounded-[6px] text-sm mt-1"
                  />
                </label>
                <label className="flex flex-col font-normal text-[11px] mt-4">
                  {" "}
                  Phone
                  <input
                    type="number"
                    required
                    placeholder="Your phone number"
                    className="border-none rounded-[6px] text-sm mt-1"
                  />
                </label>
                <label className="flex flex-col font-normal text-[11px] mt-4">
                  {" "}
                  Email
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="border-none rounded-[6px] text-sm mt-1"
                  />
                </label>
                
                <div className="flex justify-between my-6">
                  <p className=" font-normal text-[12px]">Remember me</p>
                  
                </div>
                <Button color="blue" className="mb-16 font-poppins ">
                  R<span className="lowercase">egister</span>
                </Button>
                <Button
                  color="black"
                  className="mb-6 flex items-center justify-center gap-3 font-poppins"
                >
                  <img className="" src="icons/google-icon.png" alt="" />
                  <p>O<span className="lowercase">r register with Google</span></p>
                </Button>
                <p className=" text-xs self-center">
                  Already have an account?{" "}
                  <span className="text-customColor">Log in now</span>{" "}
                </p>
              </form>
            </div>
            <div className="Welcome2 bg-brown-500 rounded-[30px] flex flex-col relative justify-center">
              <h1 className="font-coolvetica text-[110px] pl-10 text-white">WELCOME</h1>
              <h2 className="font-coolvetica text-[30px] pl-10 text-white font-light">
                START A NEW EXPERIENCE
              </h2>
              <img
                className="absolute items-center z-1 right-0"
                src="imgs/3dballs.png"
                alt=""
              />
            </div>
            <div className="yellow-man bg-deep-orange-300 rounded-[30px] flex flex-col justify-end items-center">
              <img src="imgs/yellow-man.png" alt="" />
            </div>
            <div className="roddan-text bg-lime-500 rounded-[30px] flex justify-center">
              <img src="imgs/roddantext-image.png" alt="" />
            </div>
            <div className="green-logo bg-cyan-600 rounded-[30px] flex justify-center items-center ">
              <img className="" src="icons/bigger-logo-opacity.png" alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }