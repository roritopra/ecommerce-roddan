import "./HomePage.css";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <HomeHeader />
      
      <section className="grid place-content-center max-w-[1440px] mx-auto px-5 my-28">
      <div className="flex justify-center items-center h-full w-full overflow-hidden rounded-[35px] border border-[#d9d9d9]">
        <div className="slider-items">
          <img
            src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
            alt=""
          />
          <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt="" />
          <img
            src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
            alt=""
          />
          <img
            src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
            alt=""
          />
          <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt="" />
          <img
            src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
            alt=""
          />
        </div>
      </div>
      </section>
    </>
  );
}
