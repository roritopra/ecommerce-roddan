import { Button } from "@material-tailwind/react";
import "./ShopPage.css";
import { NavLink } from "react-router-dom";
import { Checkbox, Label, Accordion, RangeSlider } from "flowbite-react";
import { ShopItemGrid } from "./components/ShopItemGrid/ShopItemGrid";
import ShopItemList from "./components/ShopItemList/ShopItemList";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

export function ShopPage() {
  const [color1, setColor1] = useState('#323232');
  const [color2, setColor2] = useState('#0081FE');

  useEffect(() => {
    ScrollReveal().reveal('.january', { delay: 500, duration: '1300', distance: '50px', origin: 'bottom' })
  }, []);
  return (
    <main className="content-shop px-5 max-w-[1440px] mx-auto mb-28 text-sm mt-5">
      <section className="filter">
        <NavLink to={"/"}>
          <Button
            variant="outlined"
            className="font-poppins font-normal rounded-full border-[#D9D9D9] mb-6"
          >
            B<span className="lowercase">ack to home</span>
          </Button>
        </NavLink>

        <aside className="border border-[#D9D9D9] rounded-2xl px-5 py-5">
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-5 text-sm text-gray-900 border border-[#E0E0E0] rounded-full placeholder:font-poppins placeholder:text-[#757575] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button className="text-white absolute end-2.5 bottom-2.5 bg-[#0081FE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="border border-[#D9D9D9] rounded-2xl px-5 py-5 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Laptops
              </Label>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Speakers
              </Label>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Consoles
              </Label>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Smartwatches
              </Label>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Tablets
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="promotion" color={"blue"} />
              <Label htmlFor="promotion" className="font-poppins">
                Smartphones
              </Label>
            </div>
          </div>

          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="font-poppins">
                Choose Price
              </Accordion.Title>
              <Accordion.Content>
                <div>
                  <RangeSlider id="default-range" />
                </div>
                <div className="flex justify-between">
                  <div className="mt-1 block">
                    <Label htmlFor="default-range" value="$50" />
                  </div>
                  <div className="mt-1 block">
                    <Label htmlFor="default-range" value="$2000" />
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </aside>
      </section>

      <section className="items">
        <div className="flex justify-between">
          <h1 className="font-poppins text-[#167DFF] text-[35px] font-light">
            The best of{" "}
            <span className="border rounded-xl border-[#D9D9D9] px-1">
              techno
            </span>
          </h1>
          <div>
            <div className="flex items-center gap-9">
              <button onClick={() => {setColor1('#0081FE'); setColor2('#323232');}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                >
                  <g clipPath="url(#clip0_191_136)">
                    <path
                      d="M-8.375 3.875H17.875V0.125H-8.375V3.875ZM-8.375 11.375H17.875V7.625H-8.375V11.375ZM-8.375 18.875H17.875V15.125H-8.375V18.875ZM21.625 18.875H25.375V15.125H21.625V18.875ZM21.625 0.125V3.875H25.375V0.125H21.625ZM21.625 11.375H25.375V7.625H21.625V11.375Z"
                      fill={color1}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_191_136">
                      <rect width="26" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button onClick={() => {setColor2('#0081FE'); setColor1('#323232');}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                >
                  <path
                    d="M0 8.76923H7.35294V0H0V8.76923ZM0 19H7.35294V10.2308H0V19ZM8.82353 19H16.1765V10.2308H8.82353V19ZM17.6471 19H25V10.2308H17.6471V19ZM8.82353 8.76923H16.1765V0H8.82353V8.76923ZM17.6471 0V8.76923H25V0H17.6471Z"
                    fill={color2}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <section>
          <ShopItemList />
        </section>

        <section className="hidden sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-[16px] mt-6">
          <ShopItemGrid
            image="imgs/home-item-1.png"
            name="Sony WH-1000XM4"
            price="$299"
          />
          <ShopItemGrid
            image="imgs/home-item-2.png"
            name="JBL Charge 5"
            price="$99"
          />
          <ShopItemGrid
            image="imgs/home-item-3.png"
            name="Oculus Quest"
            price="$599"
          />
          <ShopItemGrid
            image="imgs/home-item-4.png"
            name="Huawei MatePad 2022"
            price="$499"
          />
          <ShopItemGrid
            image="imgs/home-item-5.png"
            name="OPPO Watch"
            price="$199"
          />
          <ShopItemGrid
            image="imgs/home-item-6.png"
            name="Samsung Galaxy Tab s8"
            price="$1199"
          />
          <ShopItemGrid
            image="imgs/home-item-7.png"
            name="Lenovo Thinkpad X1"
            price="$1499"
          />
          <ShopItemGrid
            image="imgs/home-item-8.png"
            name="POCO X5 Pro 5G"
            price="$499"
          />
          <ShopItemGrid
            image="imgs/home-item-1.png"
            name="Sony WH-1000XM4"
            price="$299"
          />
          <ShopItemGrid
            image="imgs/home-item-2.png"
            name="JBL Charge 5"
            price="$99"
          />
          <ShopItemGrid
            image="imgs/home-item-3.png"
            name="Oculus Quest"
            price="$599"
          />
          <ShopItemGrid
            image="imgs/home-item-4.png"
            name="Huawei MatePad 2022"
            price="$499"
          />
        </section>
      </section>
    </main>
  );
}
