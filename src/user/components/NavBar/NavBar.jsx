import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { menuLinks } from "./menuLinks";
import CartIcon from "/icons/cart-icon.svg";

export function NavBar() {
  return (
    <>
      <header className="p-5 flex justify-between items-center max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-16 font-medium text-[#9090A3] font-satoshi text-base">
          <NavLink to={"/"}>
            <img src="/icons/logo-nav.svg" alt="Roddan Logo" />
          </NavLink>
        </nav>
        <nav className="flex items-center font-medium gap-8">
          <div className="flex items-center font-medium gap-16 text-base font-satoshi">
            {menuLinks.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.path}
                className={({ isActive }) => {
                  return `font-satoshi text-base ${
                    isActive ? "text-[#0081FE]" : "text-[#9090A3]"
                  }`;
                }}
              >
                {menu.text}
              </NavLink>
            ))}
          </div>
          <div className="h-5 w-[1px] bg-[#9090A3]"></div>
          <div className="relative cursor-pointer">
            <img src={CartIcon} alt="Cart Icon" />
            <div className="w-[14px] h-[14px] bg-[#0081FE] font-satoshi text-white font-medium text-xs absolute rounded-full flex justify-center items-center top-[-2px] left-[9px]">
              3
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
