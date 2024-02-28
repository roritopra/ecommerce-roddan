import './LogoCarousel.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export function LogoCarousel() {

  useEffect(() => {
    ScrollReveal().reveal('.carousel', { delay: 500, duration: '1300', distance: '80px', origin: 'left' })
  }
  , [])

  return (
    <>
      <section className="carousel grid place-content-center max-w-[1440px] mx-auto px-5 my-28">
        <div className="flex justify-center items-center h-full w-full overflow-hidden rounded-[35px] border border-[#d9d9d9]">
          <div className="slider-items">
            <img src="icons/sony-logo.png" alt="Sony logo" />
            <img src="icons/jbl-logo.png" alt="JBL logo" />
            <img src="icons/huawei-logo.png" alt="Huawei logo" />
            <img src="icons/lenovo-logo.png" alt="Lenovo logo" />
            <img src="icons/xiaomi-logo.png" alt="Xiaomi logo" />
            <img src="icons/samsung-logo.png" alt="Samsung logo" />
            <img src="icons/oculus-logo.png" alt="Oculus logo" />
            <img src="icons/apple-logo.png" alt="Apple logo" />
            <img src="icons/oppo-logo.png" alt="" />
            <img src="icons/asus-logo.png" alt="Asus logo" />
          </div>
        </div>
      </section>
    </>
  );
}
