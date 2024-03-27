import "./ContactUsPage.css";
import { Footer } from "../../components/Footer/Footer";
import ScrollReveal from "scrollreveal";
import { Button } from "@nextui-org/react";

export function ContactUsPage() {
  return (
    <>
      <section className="flex font-satoshi max-w-[1440px] mx-auto px-5">
        <section className="contenedor w-1/2">
          <div className="phone-hand">
            <img src="" alt="" />
          </div>
          <div className="vr-men">
            <img src="imgs/vr-men.png" alt="" />
          </div>
          <div className="head-girl flex justify-center">
            <img className="" src="imgs/contact-us girl.png" alt=""/>
          </div>
          <div className="mac-gray flex justify-center">
            <img src="imgs/macgray.png" alt="" />
          </div>
          <div className="jbl-yellow">
            <img src="" alt="" />
          </div>
          <div className="watch-hand">
            <img src="" alt="" />
          </div>
        </section>
        <form
          action=""
          className="form-area flex flex-col justify-center items-center w-1/2 bg-gray-100 gap-[21px] px-28 py-12 ml-[18px]"
        >
          <p className="text-[16px] font-[500] font-satoshi text-customColor">
            Contact us
          </p>
          <h2 className="getintouch text-[45px] font-[600] font-satoshi ">
            Get in touch
          </h2>
          <p className="text-[16px] font-[500] font-satoshi w-[414px] text-[#19191B] text-center ">
            When, while lovely valley teems with vapour around me and meridian
            the upper impenetrable.
          </p>
          <label className=" flex flex-col font-satoshi text-[14px] text-[#262E36] font-[500] w-full">
            {" "}
            Email
            <input
              type="email"
              placeholder="example@email.com"
              className="inputs border-none rounded-[6px] text-[14px] mt-1 text-[#4C5C6B] font-[400]"
            />
            <label className="text-[14px] text-[#656565] font-[400]">
              {" "}
              Enter full email
            </label>
          </label>
          <label className=" flex flex-col font-satoshi text-[14px] text-[#262E36] font-[500] w-full">
            {" "}
            Phone number
            <input
              type="email"
              placeholder="+57 1234567890"
              className="inputs border-none rounded-[6px] text-[13px] mt-1 text-[#4C5C6B] font-[400]"
            />
            <label className="text-[14px] text-[#656565] font-[400]">
              {" "}
              Enter full phone number
            </label>
          </label>
          <label className=" flex flex-col font-satoshi text-[14px] text-[#262E36] font-[500] w-full">
            {" "}
            Message
            <textarea
              placeholder="Your Message Here"
              className="inputs border-none rounded-[6px] text-[13px] mt-1 text-[#4C5C6B] font-[400] "
              rows={7}
            ></textarea>
            
          </label>
          <Button className="font-satoshi font-[400] text-[14px] px-16" color="primary">Submit</Button>
        </form>
      </section>
      <Footer />

    </>
  );
}
