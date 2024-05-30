import React from "react";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-secondary flex justify-between">
      <div>left menu</div>
      <NavMenu />

      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
