import { useState } from "react";
import "./ProductItem.css";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export function ProductItem({ image, name, price }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className={`item-container mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all ${
          hovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <NavLink to={"/shop"}>
          <figure className="card flex justify-center h-full items-center rounded-[20px] max-w-[350px] relative">
            <img className="" src={image} alt="Items home" />
          </figure>
          <div className="pt-5">
            <p className="text-[#19191B] font-satoshi text-[18px]">{name}</p>
            <div className="relative flex justify-between items-center">
              <span className="text-[#19191B] font-satoshi text-[20px] font-semibold">
                {price}
              </span>
              <div
                className={`button-container absolute bottom-0 right-0 text-center ${
                  hovered ? "visible" : ""
                }`}
              >
                <NavLink to={"/shop"}>
                  <Button
                    size="sm"
                    className="bg-[#0081FE] text-[14px] font-satoshi text-white rounded-full px-4 transition-all"
                  >
                    View more
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
