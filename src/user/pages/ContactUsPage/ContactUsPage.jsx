import "./ContactUsPage.css";
import { Footer } from "../../components/Footer/Footer";

import { EmailLibrary } from "../../components/EmailLibrary/EmailLibrary";

export function ContactUsPage() {
  return (
    <main>
      <section className="flex font-satoshi max-w-[1440px] mx-auto px-5">
        <section className="contenedor w-1/2">
          <div className="phone-hand flex flex-col justify-end">
            <img src="/imgs/phone-hand.png" alt="Image" />
          </div>
          <div className="vr-men flex flex-col justify-end">
            <img className="" src="imgs/vr-men.png" alt="Image" />
          </div>
          <div className="head-girl flex flex-col justify-end items-center">
            <img className="" src="/imgs/contact-us girl.png" alt="Image" />
          </div>
          <div className="mac-gray flex flex-col justify-end">
            <img src="/imgs/macgray.png" alt="Image" />
          </div>
          <div className="jbl-yellow flex flex-col justify-center items-center">
            <img src="/imgs/jbl-yellow.png" alt="Image" />
          </div>
          <div className="watch-hand flex flex-col justify-center items-center w-full h-full">
            <img
              className="w-full h-full"
              src="/imgs/watch-hand.png"
              alt="Image"
            />
          </div>
        </section>
        <EmailLibrary></EmailLibrary>
      </section>
      <Footer />
    </main>
  );
}
