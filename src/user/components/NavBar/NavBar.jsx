import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { menuLinks } from "./menuLinks";

export function NavBar() {
  return (
    <header className="p-5 flex justify-between items-center">
      <nav className="flex items-center gap-16 text-[#9090A3] font-poppins text-base">
        <NavLink to={"/"}>
          <img src="/icons/logo-nav.png" alt="Logo" />
        </NavLink>
        {menuLinks.map((menu, index) => (
          <NavLink key={index} to={menu.path}>
            {menu.text}
          </NavLink>
        ))}
      </nav>
      <nav className="flex items-center gap-16 text-base font-poppins">
        <NavLink to={"/login"} className="text-[#9090A3]">
          Login
        </NavLink>
        <Button color="blue">
          <NavLink to={"/register"}>
            Register
          </NavLink>
        </Button>
      </nav>
    </header>
  );
}
