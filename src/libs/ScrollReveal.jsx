import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = () => {
  useEffect(() => {
    /* ** LogoCarousel ** */
    ScrollReveal().reveal(".carousel", {
      delay: 500,
      duration: "1300",
      distance: "80px",
      origin: "left",
    });
    /* ** HomeHeader ** */
    ScrollReveal().reveal(".div1", {
      delay: 500,
      duration: "1300",
      distance: "80px",
      origin: "right",
    });
    ScrollReveal().reveal(".div2", {
      delay: 600,
      duration: "1300",
      distance: "80px",
      origin: "right",
    });
    ScrollReveal().reveal(".div3", {
      delay: 800,
      duration: "1300",
      distance: "80px",
      origin: "left",
    });
    ScrollReveal().reveal(".div4", {
      delay: 900,
      duration: "1300",
      distance: "80px",
      origin: "left",
    });
    ScrollReveal().reveal(".div5", {
      delay: 1000,
      duration: "1300",
      distance: "80px",
      origin: "left",
    });
    ScrollReveal().reveal(".div6", {
      delay: 300,
      duration: "1300",
      distance: "80px",
      origin: "right",
    });
    ScrollReveal().reveal(".div7", {
      delay: 400,
      duration: "1300",
      distance: "80px",
      origin: "right",
    });
    ScrollReveal().reveal(".time", {
      delay: 1000,
      duration: "1300",
      distance: "30px",
      origin: "top",
    });
    ScrollReveal().reveal(".title", {
      delay: 1200,
      duration: "1300",
      distance: "30px",
      origin: "top",
    });
    ScrollReveal().reveal(".button", {
      delay: 1500,
      duration: "1300",
      distance: "30px",
      origin: "top",
    });
    /* ** Footer ** */
    ScrollReveal().reveal(".news", {
      delay: 500,
      duration: "1300",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".news", {
      delay: 500,
      duration: "1300",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".left", {
      delay: 500,
      duration: "1300",
      distance: "30px",
      origin: "left",
    });
    ScrollReveal().reveal(".right", {
      delay: 700,
      duration: "1300",
      distance: "30px",
      origin: "left",
    });
    /* ** Shop ** */
    ScrollReveal().reveal(".filter-section", {
      delay: 500,
      duration: "1300",
      distance: "50px",
      origin: "left",
    });
    ScrollReveal().reveal(".items", {
      delay: 500,
      duration: "1300",
      distance: "50px",
      origin: "right",
    });
    /* ** Home ** */
    ScrollReveal().reveal(".january", {
      delay: 500,
      duration: "1300",
      distance: "50px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".play", {
      delay: 700,
      duration: "1300",
      distance: "30px",
      origin: "top",
    });
    ScrollReveal().reveal(".january-title", {
      delay: 700,
      duration: "1300",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".january-text", {
      delay: 900,
      duration: "1300",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".january-button", {
      delay: 1500,
      duration: "1300",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".box1", {
      delay: 500,
      duration: "1300",
      distance: "30px",
      origin: "right",
    });
    ScrollReveal().reveal(".box2", {
      delay: 700,
      duration: "1300",
      distance: "30px",
      origin: "right",
    });
    ScrollReveal().reveal(".box3", {
      delay: 900,
      duration: "1300",
      distance: "30px",
      origin: "right",
    });
    ScrollReveal().reveal(".box4", {
      delay: 1100,
      duration: "1300",
      distance: "30px",
      origin: "right",
    });
    ScrollReveal().reveal(".product-title", {
      delay: 500,
      duration: "1300",
      distance: "0px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".products", {
      delay: 500,
      duration: "1600",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".blog-title", {
      delay: 500,
      duration: "1600",
      distance: "30px",
      origin: "bottom",
    });
    ScrollReveal().reveal(".blog", {
      delay: 700,
      duration: "1600",
      distance: "30px",
      origin: "bottom",
    });
  }, []);
};
