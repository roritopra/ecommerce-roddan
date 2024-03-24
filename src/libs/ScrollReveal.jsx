import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = () => {
useEffect(() => {
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
}