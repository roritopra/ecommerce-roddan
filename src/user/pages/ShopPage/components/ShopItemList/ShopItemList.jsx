import "./ShopItemList.css";
import { Button } from "@material-tailwind/react";

export function ShopItemList() {
  return (
    <>
      <div className="flex justify-between items-center mt-5 mb-28 cursor-pointer">
        <div className="flex items-center gap-6">
          <figure className="card flex justify-center h-full items-center rounded-[35px] max-w-[350px]">
            <img
              className="w-[100px]"
              src="imgs/home-item-1.png"
              alt="Items home"
            />
          </figure>

          <div>
            <h2 className="text-[#19191B] font-poppins text-[25px] mb-3">
              Sony WH-1000XM4
            </h2>
            <p className="text-[#8D8D8D] font-poppins text-[22px]">
              Headphones
            </p>
          </div>
        </div>

        <h6 className="text-[#19191B] font-poppins font-semibold text-[28px] mb-3">
          $999
        </h6>

        <div className="flex items-center gap-7">
          <Button color="amber" size="sm" className="rounded-full py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7.63442 14.7092L5.22374 20.1344H10.1472H16.0103H19.919V18.1801H8.23099L9.31663 15.7371H19.1573L22.1323 6.81309L20.2781 6.19503L17.7492 13.7828H9.38552L5.96541 3.52246H2.32983V5.47681H4.5573L7.63442 14.7092Z"
                fill="black"
              />
              <path
                d="M10.1473 22.0891C10.687 22.0891 11.1245 21.6516 11.1245 21.1119C11.1245 20.5723 10.687 20.1348 10.1473 20.1348C9.60766 20.1348 9.17017 20.5723 9.17017 21.1119C9.17017 21.6516 9.60766 22.0891 10.1473 22.0891Z"
                fill="black"
              />
              <path
                d="M16.0104 22.0891C16.5501 22.0891 16.9876 21.6516 16.9876 21.1119C16.9876 20.5723 16.5501 20.1348 16.0104 20.1348C15.4707 20.1348 15.0332 20.5723 15.0332 21.1119C15.0332 21.6516 15.4707 22.0891 16.0104 22.0891Z"
                fill="black"
              />
              <path
                d="M14.5451 10.3628V7.43128H17.4766V5.47693H14.5451V2.54541H12.5907V5.47693H9.65918V7.43128H12.5907V10.3628H14.5451Z"
                fill="black"
              />
            </svg>
          </Button>
          <Button className="rounded-full font-poppins text-[14px] font-medium px-8 py-3" size="sm">
            D<span className="lowercase">etails</span>
          </Button>
        </div>
      </div>
    </>
  );
}
