import "./HomePage.css";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import { LogoCarousel } from "./components/LogoCarousel/LogoCarousel";
import { Button } from "@material-tailwind/react";

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <LogoCarousel />

      <section className="px-5 max-w-[1440px] mx-auto mb-28 mt-48">
        <div className="january relative flex justify-between pl-11 pr-20 rounded-[35px] py-20">
          <div className="relative h-full">
            <img
              className="max-w-full bottom-[-80px] absolute left-52"
              src="/imgs/playstation.png"
              alt="playstation image"
            />
            <h6 className="text-white text-sm font-poppins">20% OFF</h6>
            <h2 className="text-white font-coolvetica text-[110px] leading-[118px]">
              JANUARY<br></br>SALE
            </h2>
            <p className="text-white text-sm font-poppins">
              05 January to 29 January
            </p>
          </div>
          <div className="w-[35%] flex flex-col justify-center">
            <h6 className="text-white text-sm font-poppins mb-3">20% OFF</h6>
            <h4 className="text-white text-4xl font-poppins font-bold mb-5">
              January Sale
            </h4>
            <p className="text-[#EBEBEB] text-[15px] font-poppins font-light mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
            <div>
              <Button
                className="rounded-full text-blue-400 font-poppins"
                color="white"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 mb-28 px-5 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-5">
          <img src="icons/secure-icon.png" alt="Secure Icon" />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">Secure Payment</h6>
            <p className="text-[#19191B] font-poppins text-sm">All cards accepted</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="icons/free-icon.png" alt="Free shipping Icon" />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">Free Shipping</h6>
            <p className="text-[#19191B] font-poppins text-sm">Free shipping in all order</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="icons/innsure-icon.png" alt="Insured Icon" />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">Insured Equipment</h6>
            <p className="text-[#19191B] font-poppins text-sm">30 day money back</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="icons/support-icon.png" alt="Technical support Icon" />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">Online support 24/7</h6>
            <p className="text-[#19191B] font-poppins text-sm">Technical support 24/7</p>
          </div>
        </div>
        
      </section>
    </>
  );
}
