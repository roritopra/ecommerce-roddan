import "./HomeHeader.css";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

import { useScrollReveal } from "../../../libs/ScrollReveal";

export function HomeHeader() {
  useScrollReveal();

  return (
    <>
      <section id="header" className="container-grid">
        <div className="div1 rounded-[20px] p-12 bg-linear-black">
          <div className="time flex items-center gap-5">
            <img src="/icons/logo-icon.svg" alt="Logo icon" />
            <p className="text-white text-sm font-satoshi">
              Time for offers-24
            </p>
          </div>
          <h1 className="title mt-7 text-white text-9xl font-coolvetica">
            JANUARY OFFERS, WE START THE YEAR
          </h1>
          <NavLink to={"/shop"} className="button">
            <Button className="rounded-full px-[50px] py-6 mt-10 font-satoshi text-white text-xl bg-[#0081FE]">
              WATCH THE OFFERS!
            </Button>
          </NavLink>
        </div>

        <div className="div2 rounded-[20px]">
          <Carousel
            className="rounded-[20px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-1.png"
                alt="image 1"
                className="h-full w-full"
              />
            </div>
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-2.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-3.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-4.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-5.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-full w-full">
              <img
                className="absolute top-5 left-5"
                src="icons/logo-rounded.png"
                alt="Logo rounded"
              />
              <img
                src="imgs/carousel-6.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
          </Carousel>
        </div>
        <div className="div3 relative flex flex-col justify-end rounded-[20px] p-7">
          <p className="relative z-10 text-white font-satoshi text-base mb-1 tracking-[-0.64px]">
            Know
          </p>
          <p className="relative z-10 font-bold text-white font-satoshi text-3xl mb-1 tracking-[-1.2px]">
            Home
          </p>
          <span className="relative z-10 font-bold font-satoshi text-items-rgba text-5xl  tracking-[-1.8px]">
            Assistant
          </span>
          <NavLink to={"/shop"}>
            <Button className="rounded-full text-[#0081FE] bg-white px-7 mt-4 font-satoshi">
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-[0px]"
            src="/imgs/assistant.png"
            alt="Assistant image"
          />
        </div>

        <div className="div4 relative flex flex-col justify-end rounded-[20px] p-7">
          <p className="relative z-10 text-white font-satoshi text-base mb-1 tracking-[-0.64px]">
            Virtual
          </p>
          <p className="relative z-10 font-bold text-white font-satoshi text-3xl mb-1 tracking-[-1.2px]">
            Game
          </p>
          <span className="relative z-10 font-bold font-satoshi text-items-rgba text-5xl  tracking-[-1.8px]">
            Reality
          </span>
          <NavLink to={"/shop"}>
            <Button
              color="white"
              className="rounded-full bg-white px-7 text-green-500 mt-4 font-satoshi"
            >
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-[-30px] bottom-[70px]"
            src="/imgs/reality.png"
            alt="Assistant image"
          />
        </div>
        <div className="div5 relative flex flex-col justify-end rounded-[20px] p-7">
          <p className="relative z-10 text-white font-satoshi text-base mb-1 tracking-[-0.64px]">
            Wear
          </p>
          <p className="relative z-10 font-bold text-white font-satoshi text-3xl mb-1 tracking-[-1.2px]">
            Intelligent
          </p>
          <span className="relative z-10 font-bold font-satoshi text-items-rgba text-5xl  tracking-[-1.8px]">
            Smartwatches
          </span>
          <NavLink to={"/shop"}>
            <Button
              color="white"
              className="rounded-full bg-white px-7 text-yellow-300 mt-4 font-satoshi"
            >
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-[120px]"
            src="/imgs/smartwatches.png"
            alt="Assistant image"
          />
        </div>
        <div className="div6 relative flex flex-col justify-end rounded-[20px] p-7">
          <p className="relative z-10 text-white font-satoshi text-base mb-1 tracking-[-0.64px]">
            New
          </p>
          <p className="relative z-10 font-bold text-white font-satoshi text-3xl mb-1 tracking-[-1.2px]">
            Device
          </p>
          <span className="relative z-10 font-bold font-satoshi text-items-rgba text-5xl  tracking-[-1.8px]">
            Laptops
          </span>
          <NavLink to={"/shop"}>
            <Button
              color="blue"
              className="rounded-full text-white bg-[#0081FE] px-7 mt-4 font-satoshi"
            >
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-0"
            src="/imgs/laptops.png"
            alt="Assistant image"
          />
        </div>
        <div className="div7 relative flex flex-col justify-end rounded-[20px] p-7">
          <p className="relative z-10 text-[#19191B] font-satoshi text-base mb-1 tracking-[-0.64px]">
            Listen
          </p>
          <p className="relative z-10 font-bold text-[#19191B] font-satoshi text-3xl mb-1 tracking-[-1.2px]">
            High
          </p>
          <span className="relative z-10 font-bold font-satoshi text-items-rgba-2 text-5xl  tracking-[-1.8px]">
            Definition
          </span>
          <NavLink to={"/shop"}>
            <Button
              color="blue"
              className="rounded-full text-white bg-[#0081FE] px-7 mt-4 font-satoshi"
            >
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-[50px]"
            src="/imgs/headphones.png"
            alt="Assistant image"
          />
        </div>
      </section>
    </>
  );
}
