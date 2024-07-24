import React from "react";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full justify-between bg-secondary p-4">
        <div>left menu</div>
        <NavMenu />

        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navbar;
