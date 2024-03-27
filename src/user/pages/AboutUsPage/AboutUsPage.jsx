import "./AboutUsPage.css";
import { NavLink } from "react-router-dom";

export function AboutUsPage() {
  return (
    <>
      <section className="flex font-satoshi max-w-[1440px] mx-auto px-5">
        <section className="big-div w-full">
          <div className="welcome-roddan relative">
            <div className="ml-[29px] mt-[39px]">
              <p className="font-satoshi text-[#BEBEBE] text-[16px]">RODDAN</p>
              <p className="font-satoshi font-[300] text-[105px] text-[#FFF] leading-[118px] tracking-[-5.5px]">
                WELCOME
              </p>
              <p className="font-satoshi font-[300] text-[105px] text-[#FFF] leading-[118px] tracking-[-5.5px]">
                TO
              </p>
              <p className="font-satoshi font-[600] text-[105px] text-[#FFF] leading-[118px] tracking-[-5.5px]">
                RODDAN
              </p>
            </div>
            <div>
              <img src="imgs/roddan_paper.webp" alt="" />
            </div>
            <NavLink
              className="absolute bottom-0 bg-white rounded-[15px] flex gap-16 items-center py-2 px-4 ml-[29px] mb-[39px]"
              to={"/shop"}
            >
              <div>
                <p className="text-[15px] font-light font-satoshi">Shop</p>
                <p className="text-lg font-medium font-satoshi">All products</p>
              </div>
              <img src="icons/Cart.svg" alt="" />
            </NavLink>
          </div>
          <div className="info-div">2</div>
          <div className="contact-us">3</div>
          <div className="our-blog">4</div>
        </section>
      </section>
    </>
  );
}
