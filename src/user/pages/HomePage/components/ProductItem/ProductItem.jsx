import  { useState } from "react";
import "./ProductItem.css";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export function ProductItem({ image, name, price }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <div
        className="relative mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px]">
          <img className="" src={image} alt="Items home" />
        </figure>
        <div className="pt-5">
          <p className="text-[#19191B] font-poppins text-[18px]">{name}</p>
          <div className="relative flex justify-between items-center">
            <span className="text-[#19191B] font-poppins text-[20px] font-semibold">
              {price}
            </span>
            {showButton && (
              <div className="absolute bottom-0 right-0">
              <NavLink to={"/shop"}>
                <Button
                  size="sm"
                  className="bg-[#0081FE] text-[14px] font-poppins text-white rounded-full px-4 transition-all"
                >
                  View more
                </Button>
              </NavLink>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
