import { Button } from "@material-tailwind/react";
import "./ShopPage.css";
import { NavLink } from "react-router-dom";
import { Checkbox, Label, Accordion, RangeSlider } from "flowbite-react";
import { ShopItem } from "./components/ShopItem/ShopItem";

export function ShopPage() {
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

          </div>
        </div>
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-[16px] mt-6">
        <ShopItem
          image="imgs/home-item-1.png"
          name="Sony WH-1000XM4"
          price="$299"
        />
        <ShopItem
          image="imgs/home-item-2.png"
          name="JBL Charge 5"
          price="$99"
        />
        <ShopItem
          image="imgs/home-item-3.png"
          name="Oculus Quest"
          price="$599"
        />
        <ShopItem
          image="imgs/home-item-4.png"
          name="Huawei MatePad 2022"
          price="$499"
        />
        <ShopItem
          image="imgs/home-item-5.png"
          name="OPPO Watch"
          price="$199"
        />
        <ShopItem
          image="imgs/home-item-6.png"
          name="Samsung Galaxy Tab s8"
          price="$1199"
        />
        <ShopItem
          image="imgs/home-item-7.png"
          name="Lenovo Thinkpad X1"
          price="$1499"
        />
        <ShopItem
          image="imgs/home-item-8.png"
          name="POCO X5 Pro 5G"
          price="$499"
        />
        <ShopItem
          image="imgs/home-item-1.png"
          name="Sony WH-1000XM4"
          price="$299"
        />
        <ShopItem
          image="imgs/home-item-2.png"
          name="JBL Charge 5"
          price="$99"
        />
        <ShopItem
          image="imgs/home-item-3.png"
          name="Oculus Quest"
          price="$599"
        />
        <ShopItem
          image="imgs/home-item-4.png"
          name="Huawei MatePad 2022"
          price="$499"
        />
        </section>
      </section>
    </main>
  );
}