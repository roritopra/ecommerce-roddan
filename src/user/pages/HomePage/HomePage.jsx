import "./HomePage.css";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { LogoCarousel } from "../../components/LogoCarousel/LogoCarousel";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "@nextui-org/react";
import { useScrollReveal } from "../../../libs/ScrollReveal";

export function HomePage() {
  useScrollReveal();

  return (
    <>
      <HomeHeader />
      <LogoCarousel />

      <section className="px-5 max-w-[1440px] mx-auto mb-28 mt-48">
        <div className="january relative flex justify-between pl-11 pr-20 rounded-[35px] py-20">
          <div className="relative h-full">
            <img
              className="play z-20 max-w-full bottom-[-80px] absolute left-52"
              src="/imgs/playstation.png"
              alt="playstation image"
            />
            <h6 className="january-title z-10 text-white text-sm font-satoshi">
              20% OFF
            </h6>
            <h2 className="january-title z-10 text-white font-coolvetica text-[110px] leading-[118px]">
              JANUARY<br></br>SALE
            </h2>
            <p className="january-title z-10 text-white text-sm font-satoshi">
              05 January to 29 January
            </p>
          </div>
          <div className="w-[35%] flex flex-col justify-center">
            <h6 className="january-text text-white text-sm font-satoshi mb-3">
              20% OFF
            </h6>
            <h4 className="january-text text-white text-4xl font-satoshi font-bold mb-5">
              January Sale
            </h4>
            <p className="january-text text-[#EBEBEB] text-[15px] font-satoshi font-light mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
            <div className="january-button">
              <Button className="rounded-full bg-white text-[#0081FE] px-7 font-satoshi">
                Browse
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 mb-28 px-5 max-w-[1440px] mx-auto">
        <div className="box1 flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/secure-icon.png"
            alt="Secure Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-satoshi font-semibold text-lg">
              Secure Payment
            </h6>
            <p className="text-[#19191B] font-satoshi text-sm">
              All cards accepted
            </p>
          </div>
        </div>
        <div className="box2 flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/free-icon.png"
            alt="Free shipping Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-satoshi font-semibold text-lg">
              Free Shipping
            </h6>
            <p className="text-[#19191B] font-satoshi text-sm">
              Free shipping in all order
            </p>
          </div>
        </div>
        <div className="box3 flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/innsure-icon.png"
            alt="Insured Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-satoshi font-semibold text-lg">
              Insured Equipment
            </h6>
            <p className="text-[#19191B] font-satoshi text-sm">
              30 day money back
            </p>
          </div>
        </div>
        <div className="box4 flex items-center gap-5">
          <img
            className="w-[80px]"
            src="icons/support-icon.png"
            alt="Technical support Icon"
          />
          <div>
            <h6 className="text-[#19191B] font-satoshi font-semibold text-lg">
              Online support 24/7
            </h6>
            <p className="text-[#19191B] font-satoshi text-sm">
              Technical support 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="product-title">
        <div className="flex justify-center items-center flex-col mb-16">
          <h2 className="text-[#19191B] font-satoshi text-[35px] font-bold">
            Trending week
          </h2>
          <p className="text-[#6B6B6B] font-satoshi text-base">
            Most trending products for this week
          </p>
        </div>
      </section>

      <section className="products grid sm:grid-cols-2 lg:grid-cols-4 px-5 max-w-[1440px] mx-auto gap-[16px]">
        <ProductItem
          image="imgs/home-item-1.png"
          name="Sony WH-1000XM4"
          price="$299"
        />
        <ProductItem
          image="imgs/home-item-2.png"
          name="JBL Charge 5"
          price="$99"
        />
        <ProductItem
          image="imgs/home-item-3.png"
          name="Oculus Quest"
          price="$599"
        />
        <ProductItem
          image="imgs/home-item-4.png"
          name="Huawei MatePad 2022"
          price="$499"
        />
        <ProductItem
          image="imgs/home-item-5.png"
          name="OPPO Watch"
          price="$199"
        />
        <ProductItem
          image="imgs/home-item-6.png"
          name="Samsung Galaxy Tab s8"
          price="$1199"
        />
        <ProductItem
          image="imgs/home-item-7.png"
          name="Lenovo Thinkpad X1"
          price="$1499"
        />
        <ProductItem
          image="imgs/home-item-8.png"
          name="POCO X5 Pro 5G"
          price="$499"
        />
      </section>

      <section className="blog-title">
        <div className="flex justify-center items-center flex-col mb-16 mt-28">
          <h2 className="text-[#19191B] font-satoshi text-[35px] font-bold">
            Recent News
          </h2>
          <p className="text-[#6B6B6B] font-satoshi text-base">
            Know about our variations and manages
          </p>
        </div>
      </section>

      <section className="blog grid sm:grid-cols-2 lg:grid-cols-3 px-5 max-w-[1440px] mx-auto gap-[16px]">
        <div className="mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all">
          <figure className="flex justify-center items-center">
            <img className="" src="imgs/new-1.png" alt="News home" />
          </figure>
          <div className="mt-5">
            <p className="text-[#19191B] font-satoshi text-[18px] mb-4">
              October 5
            </p>
            <span className="text-[#19191B] font-satoshi text-[20px] font-semibold">
              20 Best gadgets for 2023
            </span>
            <p className="text-[#19191B] font-satoshi text-[18px] w-[85%] mt-4">
              Sed ut perspiciatis unde omnis iste laudantium, totam rem aperiam,
              eaque ipsa quae ab pariatur?
            </p>
          </div>
        </div>

        <div className="mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all">
          <figure className="flex justify-center items-center">
            <img className="" src="imgs/new-2.png" alt="News home" />
          </figure>
          <div className="mt-5">
            <p className="text-[#19191B] font-satoshi text-[18px] mb-4">
              October 5
            </p>
            <span className="text-[#19191B] font-satoshi text-[20px] font-semibold">
              20 Best gadgets for 2023
            </span>
            <p className="text-[#19191B] font-satoshi text-[18px] w-[85%] mt-4">
              Sed ut perspiciatis unde omnis iste laudantium, totam rem aperiam,
              eaque ipsa quae ab pariatur?
            </p>
          </div>
        </div>

        <div className="mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all">
          <figure className="flex justify-center items-center">
            <img className="" src="imgs/new-3.png" alt="News home" />
          </figure>
          <div className="mt-5">
            <p className="text-[#19191B] font-satoshi text-[18px] mb-4">
              October 5
            </p>
            <span className="text-[#19191B] font-satoshi text-[20px] font-semibold">
              20 Best gadgets for 2023
            </span>
            <p className="text-[#19191B] font-satoshi text-[18px] w-[85%] mt-4">
              Sed ut perspiciatis unde omnis iste laudantium, totam rem aperiam,
              eaque ipsa quae ab pariatur?
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
