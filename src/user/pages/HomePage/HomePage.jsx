import "./HomePage.css";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import { LogoCarousel } from "./components/LogoCarousel/LogoCarousel";
import { Button } from "@material-tailwind/react";
import { ProductItem } from "./components/ProductItem/ProductItem";

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
          <img
            className="w-[80px]"
            src="icons/secure-icon.png"
            alt="Secure Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">
              Secure Payment
            </h6>
            <p className="text-[#19191B] font-poppins text-sm">
              All cards accepted
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/free-icon.png"
            alt="Free shipping Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">
              Free Shipping
            </h6>
            <p className="text-[#19191B] font-poppins text-sm">
              Free shipping in all order
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/innsure-icon.png"
            alt="Insured Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">
              Insured Equipment
            </h6>
            <p className="text-[#19191B] font-poppins text-sm">
              30 day money back
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/support-icon.png"
            alt="Technical support Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-poppins font-semibold text-lg">
              Online support 24/7
            </h6>
            <p className="text-[#19191B] font-poppins text-sm">
              Technical support 24/7
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center flex-col mb-16">
          <h2 className="text-[#19191B] font-poppins text-[35px] font-bold">
            Trending week
          </h2>
          <p className="text-[#6B6B6B] font-poppins text-base">
            Most trending products for this week
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 px-5 max-w-[1440px] mx-auto gap-[16px]">
        <ProductItem image="imgs/home-item-1.png" name="Sony WH-1000XM4" price="$299" />
        <ProductItem image="imgs/home-item-2.png" name="JBL Charge 5" price="$99" />
        <ProductItem image="imgs/home-item-3.png" name="Oculus Quest" price="$599" />
        <ProductItem image="imgs/home-item-4.png" name="Huawei MatePad 2022" price="$499" />
        <ProductItem image="imgs/home-item-5.png" name="OPPO Watch" price="$199" />
        <ProductItem image="imgs/home-item-6.png" name="Samsung Galaxy Tab s8" price="$1199" />
        <ProductItem image="imgs/home-item-7.png" name="Lenovo Thinkpad X1" price="$1499" />
        <ProductItem image="imgs/home-item-8.png" name="POCO X5 Pro 5G" price="$499" />
      </section>
    </>
  );
}
