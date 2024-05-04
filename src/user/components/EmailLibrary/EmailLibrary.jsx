import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/react";
import "./EmailLibrary.css";

export const EmailLibrary = () => {
  const form = useRef();
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    const { user_email, user_phone, message } = e.target.elements;
    if (!user_email.value || !user_phone.value || !message.value) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_unmum3o", "template_sg8z66i", form.current, {
        publicKey: "p06mv0tur1XOlwEeX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Mostrar la notificación de éxito
          setShowSuccessNotification(true);
          // Limpiar el formulario
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="form-area flex flex-col justify-center items-center w-1/2 bg-gray-100 gap-[21px] px-28 ml-[18px]"
      >
        <p className="text-[16px] font-[500] font-satoshi text-customColor">
          Contact us
        </p>
        <h2 className="getintouch text-[45px] font-[600] font-satoshi ">
          Get in touch
        </h2>
        <p className="text-[16px] font-[500] font-satoshi w-[414px] text-[#19191B] text-center ">
          When, while lovely valley teems with vapour around me and meridian the
          upper impenetrable.
        </p>
        <label className=" flex flex-col font-satoshi text-[14px] text-[#262E36] font-[500] w-full">
          {" "}
          Email
          <input
            type="email"
            placeholder="example@email.com"
            name="user_email"
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
            type="text"
            placeholder="+57 1234567890"
            name="user_phone"
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
            name="message"
            className="inputs border-none rounded-[6px] text-[13px] mt-1 text-[#4C5C6B] font-[400] "
            rows={7}
          ></textarea>
        </label>
        <Button
          className="font-satoshi font-[400] text-[14px] px-16"
          color="primary"
          type="submit"
          value="Send"
        >
          Submit
        </Button>
        {showSuccessNotification && (
          <p className="success-notification font-satoshi font-[600] text-[18px] mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
    </>
  );
};
