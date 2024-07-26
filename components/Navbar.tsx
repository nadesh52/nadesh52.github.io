import React from "react";
import NavMenu from "./NavMenu";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full justify-between bg-secondary p-4">
        <div>
          <Link href="/">
            <p className="text-lg font-medium text-white select-none cursor-pointer">nadesh52</p>
          </Link>
        </div>
        <NavMenu />

        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navbar;
