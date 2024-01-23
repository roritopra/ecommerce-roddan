import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import { menuLinks } from "./menuLinks";

export function NavBar() {
  return (
    <>
      <header className="p-5 flex justify-between items-center max-w-[1440px] mx-auto">
        <nav className="flex items-center gap-16 text-[#9090A3] font-poppins text-base">
          <NavLink to={"/"}>
            <img src="/icons/logo-nav.svg" alt="Roddan Logo" />
          </NavLink>
          {menuLinks.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.path}
              className={({ isActive }) => {
                return `font-poppins text-base ${
                  isActive ? "text-[#0081FE]" : "text-[#9090A3]"
                }`;
              }}
            >
              {menu.text}
            </NavLink>
          ))}
        </nav>
        <nav className="flex items-center gap-16 text-base font-poppins">
          <NavLink to={"/login"} className="text-[#9090A3]">
            Login
          </NavLink>
          <NavLink to={"/register"}>
            <Button color="blue">Register</Button>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
