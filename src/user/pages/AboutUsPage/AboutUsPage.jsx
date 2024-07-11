import "./AboutUsPage.css";
import { NavLink } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { LogoCarousel } from "../../components/LogoCarousel/LogoCarousel";
import { Layout } from "../../../layout/Layout";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";

export function AboutUsPage() {
  const [changeImage, setChangeImage] = useState("/imgs/dandi-image.webp");
  const [changeImageProduct, setchangeImageProduct] = useState(
    "/imgs/product-dandi.webp"
  );
  const [imageAnimation, setImageAnimation] = useState("");

  const doChangeImage = () => {
    const nextImageSrc = "/imgs/rodro-image.webp";
    setChangeImage(nextImageSrc);
    const nextImageProduct = "/imgs/product-rodro.webp";
    setchangeImageProduct(nextImageProduct);
    setImageAnimation("fade-in");
    triggerAnimation();
  };

  const revertChangeImage = () => {
    const prevImageSrc = "/imgs/dandi-image.webp";
    setChangeImage(prevImageSrc);
    const prevImageProduct = "/imgs/product-dandi.webp";
    setchangeImageProduct(prevImageProduct);
    setImageAnimation("fade-in");
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setImageAnimation("fade-in");
    setTimeout(() => {
      setImageAnimation("");
    }, 1000);
  };

  const theme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={() => {
                handlePrev();
                revertChangeImage();
              }}
              disabled={!loop && firstIndex}
              className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={() => {
              handleNext();
              doChangeImage(); // Call the function to change the image
            }}
            disabled={!loop && lastIndex}
            className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
          </button>
        ),
      },
    },
  };

  return (
    <Layout>
      <div className="big-div w-full">
        <div className="welcome-roddan flex justify-between flex-col">
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
          <section className="relative">
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
          </section>
        </div>
        <div className="logo-animate"></div>

        <div className="image-member relative overflow-hidden">
          <div>
            <div className="w-[250px] h-[250px] absolute top-[5px] left-[5px] rounded-full border border-[#4B4B4B]"></div>
            <img
              className={`absolute bottom-[-21px] right-[-29px] saturate-0 ${imageAnimation}`}
              src={changeImage}
              alt="Dandi image"
            />
            <img
              className={`absolute top-[24px] left-[28px] saturate-0 ${imageAnimation}`}
              src={changeImageProduct}
              alt="Dandi product"
            />
          </div>
        </div>

        <div className="name-member max-h-[293.3px]">
          <Carousel
            className="rounded-xl overflow-y-hidden"
            autoplay={theme.carousel.defaultProps.autoplay}
            autoplayDelay={theme.carousel.defaultProps.autoplayDelay}
            transition={theme.carousel.defaultProps.transition}
            loop={theme.carousel.defaultProps.loop}
            prevArrow={theme.carousel.defaultProps.prevArrow}
            nextArrow={theme.carousel.defaultProps.nextArrow}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-8 bg-[#2d2d2dd5]"
                        : "w-4 bg-[#6969697c]"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div>
              <div className="infinite-scroll-container">
                <div className="infinite-scroll-content">
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  {/* Duplicate the content for seamless looping */}
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Daniel
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <div className="infinite-scroll-container">
                <div className="infinite-scroll-content">
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  {/* Duplicate the content for seamless looping */}
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                  <h6 className="text-[207px] font-poppins tracking-[-12px] leading-[177px] font-semibold text-customColor">
                    Rodro
                  </h6>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="contact-us flex flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <p className="text-[#FFFFFF] font-satoshi font-regular text-base">
              Have some questions?
            </p>
            <img src="icons/Vector_arrow.svg" alt="" />
          </div>
          <p className="text-[#FFFFFF] font-satoshi font-bold text-[44px]">
            Contact us
          </p>
        </div>

        <Link
          to={"/contact-us"}
          className="our-blog flex flex-col justify-between p-4 hover:shadow-green hover:transition hover:duration-1000 duration-1000 transition"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#FFFFFF] font-satoshi font-regular text-base">
              Whats new?
            </p>
            <img src="icons/Sendit.svg" alt="" />
          </div>
          <p className="text-[#FFFFFF] font-satoshi font-bold text-[44px]">
            Our blog
          </p>
        </Link>
      </div>
      <LogoCarousel />
      <Footer />
    </Layout>
  );
}
