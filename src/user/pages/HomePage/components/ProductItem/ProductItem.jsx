import "./ProductItem.css";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export function ProductItem({ image, name, price }) {
  return (
    <>
      <div className="relative mt-5 mb-28 cursor-pointer hover:filter hover:drop-shadow-2xl transition-all">
        <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px]">
          <img className="" src={image} alt="Items home" />
        </figure>
        <div className="mt-5">
          <p className="text-[#19191B] font-poppins text-[18px]">{name}</p>
          <div className="flex justify-between items-center">
            <span className="text-[#19191B] font-poppins text-[20px] font-semibold">
              {price}
            </span>
            <NavLink to={"/shop"}>
              <Button
                size="sm"
                className="bg-[#0081FE] text-[12px] font-poppins text-white rounded-full px-4"
              >
                Details
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}