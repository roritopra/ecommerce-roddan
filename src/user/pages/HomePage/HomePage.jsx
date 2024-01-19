import "./HomePage.css";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import { LogoCarousel } from "./components/LogoCarousel/LogoCarousel";
import { Button } from "@material-tailwind/react";

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <LogoCarousel />

      <section className="px-5 max-w-[1440px] mx-auto mb-16 mt-48">
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
          <div className="w-[40%]">
            <h6 className="text-white text-sm font-poppins mb-3">20% OFF</h6>
            <h4 className="text-white text-4xl font-poppins font-bold mb-5">
              January Sale
            </h4>
            <p className="text-white text-base font-poppins font-light mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
            <Button className="rounded-full text-blue-400 font-poppins" color="white">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
