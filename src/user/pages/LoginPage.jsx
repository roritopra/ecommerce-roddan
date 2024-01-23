
import { Button } from "@material-tailwind/react";
import "./LoginPage.css"


export function LoginPage() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-5 ">        
        <div className="gridcont h-screen">
          <div className="flex flex-col Login-area  bg-gray-100 px-16 py-16 rounded-[30px] justify-center ">
            <form className=" w-[100%] h-[auto] flex flex-col  font-poppins">
            <h1 className="text-4xl font-semibold self-center">Login</h1>
            <h3 className="text-lg font-semibold my-6">Nice to see you again</h3>
            <label className="flex flex-col font-normal text-[11px]">
              {" "}
              Login
              <input type="text" placeholder="Email or phone number" className="border-none rounded-[6px] text-sm" />
            </label>
            <label className="flex flex-col text-[11px] font-normal">
              {" "}
              Password
              <input type="text" placeholder="Enter passoword" className="border-none rounded-[6px] text-sm" />
            </label>
            <div className="flex justify-between">
              <p className=" font-normal text-[12px]">Remember me</p>
              <p className="text-customColor text-[12px] font-normal">Forgot password?</p>
            </div>
            <Button color="blue" >Sign in</Button>
            <p className=" text-xs self-center">Dont have an account? <span className="text-customColor">Sign up now</span> </p>
            </form>
          </div>
          <div className="Welcome bg-brown-500">2</div>
          <div className="Icon bg-deep-orange-300">3</div>
          <div className="Girl bg-lime-500">4</div>
          <div className="Evolution bg-cyan-600">5</div>
        </div>
      </section>
    </>
  );
}
