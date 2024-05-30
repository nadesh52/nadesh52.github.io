import React from "react";

const NavMenu = () => {
  return (
    <ul className="hidden sm:flex gap-5">
      <li>
        <a
          href="#"
          className="text-white text-lg font-medium hover:text-accent"
        >
          menu 1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-white text-lg font-medium hover:text-accent"
        >
          menu 2
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
