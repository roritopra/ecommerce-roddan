import "./HomeHeader.css";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import ScrollReveal from "scrollreveal";

export function HomeHeader() {
  useEffect(() => {
    ScrollReveal().reveal('.div1', { delay: 500, duration: '1300', distance: '80px', origin: 'right' })
    ScrollReveal().reveal('.div2', { delay: 600, duration: '1300', distance: '80px', origin: 'right' })
    ScrollReveal().reveal('.div3', { delay: 800, duration: '1300', distance: '80px', origin: 'left' })
    ScrollReveal().reveal('.div4', { delay: 900, duration: '1300', distance: '80px', origin: 'left' })
    ScrollReveal().reveal('.div5', { delay: 1000, duration: '1300', distance: '80px', origin: 'left' })
    ScrollReveal().reveal('.div6', { delay: 300, duration: '1300', distance: '80px', origin: 'right' })
    ScrollReveal().reveal('.div7', { delay: 400, duration: '1300', distance: '80px', origin: 'right' })
    ScrollReveal().reveal('.time', { delay: 1000, duration: '1300', distance: '30px', origin: 'top' })
    ScrollReveal().reveal('.title', { delay: 1200, duration: '1300', distance: '30px', origin: 'top' })
    ScrollReveal().reveal('.button', { delay: 1500, duration: '1300', distance: '30px', origin: 'top' })
  }, [])
  
  return (
    <>
      <section id="header" className="container-grid max-w-[1440px] mx-auto px-5">
        <div className="div1 rounded-[35px] p-12 bg-linear-black">
          <div className="time flex items-center gap-5">
            <img src="/icons/logo-icon.svg" alt="Logo icon" />
            <p className="text-white text-sm font-poppins">
              Time for offers-24
            </p>
          </div>
          <h1 className="title mt-7 text-white text-9xl font-coolvetica">
            JANUARY OFFERS, WE START THE YEAR
          </h1>
          <NavLink to={"/shop"} className="button">
            <Button color="blue" size="lg" className="rounded-full px-16 mt-10 font-poppins">
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
            <Button color="white" className="rounded-full text-blue-500 mt-4 font-poppins">
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
            <Button color="white" className="rounded-full text-green-500 mt-4 font-poppins">
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
            <Button color="white" className="rounded-full text-yellow-300 mt-4 font-poppins">
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
            <Button color="blue" className="rounded-full mt-4 font-poppins">
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
            <Button color="blue" className="rounded-full mt-4 font-poppins">
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
