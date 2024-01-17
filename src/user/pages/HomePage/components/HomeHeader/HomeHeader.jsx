import "./HomeHeader.css";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

export function HomeHeader() {
  return (
    <>
      <section className="container-grid max-w-[1440px] mx-auto px-5">
        <div className="div1 rounded-[35px] p-12 bg-linear-black">
          <div className="flex items-center gap-5">
            <img src="/icons/logo-icon.svg" alt="Logo icon" />
            <p className="text-white text-sm font-poppins">
              Time for offers-24
            </p>
          </div>
          <h1 className="mt-7 text-white text-9xl font-poppins font-semibold">
            JANUARY OFFERS, WE START THE YEAR
          </h1>
          <NavLink to={"/shop"}>
            <Button color="blue" size="lg" className="rounded-full px-16 mt-10">
              WATCH THE OFFERS!
            </Button>
          </NavLink>
        </div>

        <div className="div2 rounded-[35px]">
          <Carousel
            className="rounded-[35px]"
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
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="div3 relative flex flex-col justify-end rounded-[35px] p-7">
          <p className="relative z-10 text-white font-poppins text-base mb-1 tracking-[-0.64px]">
            Know
          </p>
          <p className="relative z-10 text-white font-poppins text-3xl mb-1 tracking-[-1.2px]">
            Home
          </p>
          <span className="relative z-10 font-poppins text-items-rgba text-5xl  tracking-[-1.8px] font-semibold">
            Assistant
          </span>
          <NavLink to={"/shop"}>
            <Button color="white" className="rounded-full text-blue-500 mt-4">
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-[0px]"
            src="/imgs/assistant.png"
            alt="Assistant image"
          />
        </div>

        <div className="div4 relative flex flex-col justify-end rounded-[35px] p-7">
          <p className="relative z-10 text-white font-poppins text-base mb-1 tracking-[-0.64px]">
            Virtual
          </p>
          <p className="relative z-10 text-white font-poppins text-3xl mb-1 tracking-[-1.2px]">
            Game
          </p>
          <span className="relative z-10 font-poppins text-items-rgba text-5xl  tracking-[-1.8px] font-semibold">
            Reality
          </span>
          <NavLink to={"/shop"}>
            <Button color="white" className="rounded-full text-green-500 mt-4">
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-[-30px] bottom-[70px]"
            src="/imgs/reality.png"
            alt="Assistant image"
          />
        </div>
        <div className="div5 relative flex flex-col justify-end rounded-[35px] p-7">
          <p className="relative z-10 text-white font-poppins text-base mb-1 tracking-[-0.64px]">
            Wear
          </p>
          <p className="relative z-10 text-white font-poppins text-3xl mb-1 tracking-[-1.2px]">
            Intelligent
          </p>
          <span className="relative z-10 font-poppins text-items-rgba text-5xl  tracking-[-1.8px] font-semibold">
            Smartwatches
          </span>
          <NavLink to={"/shop"}>
            <Button color="white" className="rounded-full text-green-500 mt-4">
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-[120px]"
            src="/imgs/smartwatches.png"
            alt="Assistant image"
          />
        </div>
        <div className="div6 relative flex flex-col justify-end rounded-[35px] p-7">
          <p className="relative z-10 text-white font-poppins text-base mb-1 tracking-[-0.64px]">
            New
          </p>
          <p className="relative z-10 text-white font-poppins text-3xl mb-1 tracking-[-1.2px]">
            Device
          </p>
          <span className="relative z-10 font-poppins text-items-rgba text-5xl  tracking-[-1.8px] font-semibold">
            Laptops
          </span>
          <NavLink to={"/shop"}>
            <Button color="white" className="rounded-full text-green-500 mt-4">
              Browse
            </Button>
          </NavLink>
          <img
            className="absolute z-20 right-0 bottom-0"
            src="/imgs/laptops.png"
            alt="Assistant image"
          />
        </div>
        <div className="div7 relative flex flex-col justify-end rounded-[35px] p-7">
          <p className="relative z-10 text-[#19191B] font-poppins text-base mb-1 tracking-[-0.64px]">
            Listen
          </p>
          <p className="relative z-10 text-[#19191B] font-poppins text-3xl mb-1 tracking-[-1.2px]">
            High
          </p>
          <span className="relative z-10 font-poppins text-items-rgba-2 text-5xl  tracking-[-1.8px] font-semibold">
            Definition
          </span>
          <NavLink to={"/shop"}>
            <Button color="white" className="rounded-full text-green-500 mt-4">
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
