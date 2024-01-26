import { Button } from "@material-tailwind/react";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-5 ">
        <div className="gridcont h-screen">
          <div className="flex flex-col Login-area  bg-gray-100 px-16 py-16 rounded-[30px] justify-center ">
            <form className=" w-[100%] h-[auto] flex flex-col  font-poppins">
              <h1 className="text-[48px] font-semibold self-center">Login</h1>
              <img
                className="w-[40%] mb-4 mt-16"
                src="icons/logo-nav.svg"
                alt=""
              />
              <h3 className="text-[20px] font-semibold my-6">
                Nice to see you again
              </h3>
              <label className="flex flex-col font-normal text-[11px]">
                {" "}
                Email
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="border-none rounded-[6px] text-sm mt-1"
                />
              </label>
              <label className="flex flex-col text-[11px] font-normal mt-4">
                {" "}
                Password
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border-none rounded-[6px] text-sm mt-1"
                />
              </label>
              <div className="flex justify-between my-6">
                <p className=" font-normal text-[12px]">Remember me</p>
                <p className="text-customColor text-[12px] font-normal">
                  Forgot password?
                </p>
              </div>
              <Button color="blue" className="mb-16 font-poppins ">
                S<span className="lowercase">ign in</span>
              </Button>
              <Button
                color="black"
                className="mb-6 flex items-center justify-center gap-3 font-poppins"
              >
                <img className="" src="icons/google-icon.png" alt="" />
                <p>O<span className="lowercase">r sign in with Google</span></p>
              </Button>
              <p className=" text-xs self-center">
                Dont have an account?{" "}
                <span className="text-customColor">Sign up now</span>{" "}
              </p>
            </form>
          </div>
          <div className="Welcome bg-brown-500 rounded-[30px] relative">
            <h1 className="font-coolvetica text-[100px] pl-8 text-white">WELCOME</h1>
            <h2 className="font-coolvetica text-[30px] pl-8 text-white font-light">
              ENJOY YOUR LIFE<br></br>WITH TECHNOLOGY
            </h2>
            <img
              className="absolute right-0 bottom-0"
              src="imgs/welcome-woman.png"
              alt=""
            />
          </div>
          <div className="Icon bg-deep-orange-300 rounded-[30px] flex justify-center items-center">
            <img src="icons/opacity-icon-roddan.png" alt="" />
          </div>
          <div className="Girl bg-lime-500 rounded-[30px] flex justify-center">
            <img src="imgs/red-woman.png" alt="" />
          </div>
          <div className="Evolution bg-cyan-600 rounded-[30px] flex justify-center ">
            <img className="" src="imgs/evolution-text.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
