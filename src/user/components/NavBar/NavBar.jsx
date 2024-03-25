import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import { menuLinks } from "./menuLinks";

export function NavBar() {
  return (
    <>
      <header className="p-5 flex justify-between items-center max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-16 font-medium text-[#9090A3] font-satoshi text-base">
          <NavLink to={"/"}>
            <img src="/icons/logo-nav.svg" alt="Roddan Logo" />
          </NavLink>
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
        </nav>
        <nav className="flex items-center font-medium gap-16 text-base font-satoshi">
          <NavLink to={"/login"} className="text-[#9090A3]">
            Login
          </NavLink>
          <NavLink to={"/register"}>
            <Button size="md" radius="sm" className="bg-[#0081FE] px-7 font-medium text-white font-satoshi text-base">Register</Button>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
