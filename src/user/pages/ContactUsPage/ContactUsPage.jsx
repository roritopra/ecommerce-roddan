import "./ContactUsPage.css";
import { Footer } from "../../components/Footer/Footer";
import ScrollReveal from "scrollreveal";
import { Button, Input, Textarea } from "@nextui-org/react";


export function ContactUsPage() {
  return (
    <>
      <section className=""></section>
      <section></section>
      <form action="">
        <p className="text-[16px] font-[500] font-satoshi text-customColor text-center">Contact us</p>
        <h2 className="getintouch text-[45px] font-[600] font-satoshi text-center">Get in touch</h2>
        <p className="text-[16px] font-[500] font-satoshi w-[414px] text-[#19191B] text-center ">
          When, while lovely valley teems with vapour around me and meridian the
          upper impenetrable.
        </p>
        <Input  className="border-none" type="email" labelPlacement="outside" label="email" />
        <p>Enter full name</p>
        <Input type="email" labelPlacement="outside" label="phone number" />
        <p>Enter full phone number</p>
        <Textarea
          isRequired
          label="Message"
          labelPlacement="outside"
          placeholder="Your Message Here"
          className="max-w-xs"
        />
      </form>
    </>
  );
}
