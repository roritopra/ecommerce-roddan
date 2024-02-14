import "./ItemDetailsPage.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { CarouselProducts } from "./components/CarouselProducts";

export function ItemDetailsPage() {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
  ];

  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  return (
    <main className="px-5 max-w-[1440px] mx-auto mt-5 mb-24">
      <section className="flex gap-[40px]">
        <div className="w-1/2 h-full">
          <div className="flex justify-between">
            <NavLink to={"/"}>
              <Button
                variant="bordered"
                className="font-poppins font-normal rounded-full border-[#D9D9D9] mb-6"
              >
                Back to home
              </Button>
            </NavLink>
            <div>
              <img src="icons/category-sony.png" alt="Category icon" />
            </div>
          </div>

          <h2 className="font-poppins text-[#19191B] font-semibold text-[45px] mt-3 mb-5 w-[80%]">
            Sony WH-1000XM4
          </h2>
          <h6 className="font-poppins text-[#19191B] font-medium text-[18px] mb-5">
            Category:{" "}
            <span className="font-poppins text-[#0081FE] text-[18px]">
              Headphone
            </span>
          </h6>
          <p className="font-poppins text-[#3F3F40] text-[16px] w-[80%] mb-8">
            Sed ut perspiciatis unde omnis iste laudantium, totam rem aperiam,
            eaque ipsa quae ab pariatur?Sed ut perspiciatis unde omnis iste
            laudantium, totam rem aperiam, eaque ipsa quae ab pariatur?
          </p>

          <div className="flex gap-4 items-center">
            <p className="font-poppins text-[#19191B] text-[18px]">Quantity</p>
            <button className="rounded-full bg-white border border-[#D9D9D9] px-3 font-poppins text-[25px] text-[#19191B] focus:border focus:border-[#0081FE] focus:bg-[#0081FE] focus:text-white">
              -
            </button>
            <p>1</p>
            <button className="rounded-full bg-white border border-[#D9D9D9] px-3 font-poppins text-[25px] text-[#19191B] focus:border focus:border-[#0081FE] focus:bg-[#0081FE] focus:text-white">
              +
            </button>
          </div>

          <div className="flex items-center mt-10 gap-6">
            <p className="font-poppins text-[#19191B] text-[25px] font-medium">
              $299
            </p>
            <Button
              endContent={
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="35" height="35" rx="17.5" fill="white" />
                  <path
                    d="M13.4999 19.642L11.3413 24.5H15.75H21H24.5V22.75H14.0341L15.0062 20.5625H23.8179L26.4819 12.5716L24.8216 12.0181L22.5571 18.8125H15.0679L12.0054 9.625H8.75V11.375H10.7446L13.4999 19.642Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M15.75 26.25C16.2332 26.25 16.625 25.8582 16.625 25.375C16.625 24.8918 16.2332 24.5 15.75 24.5C15.2668 24.5 14.875 24.8918 14.875 25.375C14.875 25.8582 15.2668 26.25 15.75 26.25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M21 26.25C21.4832 26.25 21.875 25.8582 21.875 25.375C21.875 24.8918 21.4832 24.5 21 24.5C20.5168 24.5 20.125 24.8918 20.125 25.375C20.125 25.8582 20.5168 26.25 21 26.25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M19.6875 15.75V13.125H22.3125V11.375H19.6875V8.75H17.9375V11.375H15.3125V13.125H17.9375V15.75H19.6875Z"
                    fill="#3A3A3A"
                  />
                </svg>
              }
              className="flex items-center gap-5 rounded-full font-poppins font-medium py-7 bg-[#0081FE] text-white"
            >
              Add to Cart
            </Button>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-20">
            <Select
              label="Select an animal"
              className="max-w-xs font-poppins font-light text-[18px] text-[#19191B] border border-[#D9D9D9] rounded-xl"
            >
              <SelectItem
                value="hotel"
                className="font-poppins text-[18px] text-[#19191B]"
              >
                Hotel
              </SelectItem>
            </Select>
            <Select
              label="Favorite Animal"
              className="max-w-xs font-poppins font-light text-[18px] text-[#19191B] border border-[#D9D9D9] rounded-xl"
            >
              <SelectItem value="Hotel">Hotel</SelectItem>
            </Select>
          </div>
        </div>

        <div className="w-1/2">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-[20px] object-cover object-center md:h-[480px]"
                src={active}
                alt=""
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {data.map(({ imgelink }, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className="h-28 max-w-full cursor-pointer rounded-xl object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between mt-20 px-36">
        <div className="flex flex-col justify-center">
          <p className="font-poppins font-light text-[30px] text-center text-[#696969]">
            Stop by new <br />
            arrivals
          </p>
          <hr className="border-[#696969]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-poppins font-medium text-[30px] text-center text-[#19191B]">
            Shop by top <br />
            collections
          </p>
          <hr className="border-[#696969]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-poppins font-light text-[30px] text-center text-[#696969]">
            Shop by pro starp <br />
            extra
          </p>
          <hr className="border-[#696969]" />
        </div>
      </section>
      <div className="mt-28">
        <CarouselProducts />
      </div>
    </main>
  );
}
