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
          <div className="info-div relative pl-[24px] pt-[32px] pr-[32px]">
            <img src="icons/roddan_about.svg" alt="" />
            <p className="font-normal text-[18px] text-[#19191B] mt-[28px]">
              Sed ut perspiciatis unde omnis iste laudantium, totam rem aperiam,
              eaque ipsa quae ab pariatur?Sed ut perspiciatis unde omnis iste
              laudantium, totam rem aperiam, eaque ipsa quae ab pariatur?
            </p>
            <div className="flex absolute bottom-0 mb-[25px] items-center justify-between gap-[370px]">
              <div className="flex gap-[39px]">
                <img src="icons/left_arrow.svg" alt="" />
                <img src="icons/right_arrow.svg" alt="" />
              </div>
              <div className="flex gap-[15px]">
                <img src="icons/in_circle.svg" alt="" />
                <img src="icons/git_circle.svg" alt="" />
                <img src="icons/behance_circle.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="contact-us relative">
            <div className="flex ml-[16px] mt-[16px]">
              <p className="text-[#FFFFFF] font-satoshi font-regular text-base">
                Have some questions?
              </p>
              <img src="icons/Vector_arrow.svg" alt="" />
            </div>
            <p className="text-[#FFFFFF] font-satoshi font-bold text-[44px] absolute bottom-0 ml-[16px]">
              Contact us
            </p>
          </div>
          <div className="our-blog relative">
            <div className="flex ml-[16px] mt-[16px]">
              <p className="text-[#FFFFFF] font-satoshi font-regular text-base">
                Whats new?
              </p>
              <img src="icons/Sendit.svg" alt="" />
            </div>
            <p className="text-[#FFFFFF] font-satoshi font-bold text-[44px] absolute bottom-0 ml-[16px]">
              Our blog
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
