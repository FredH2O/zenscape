"use client";

import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const NavMenu: string[] = [
  "Home",
  "Services",
  "Reviews",
  "Contact",
  "About Us",
];

const Nav = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  return (
    <nav className=" bg-emerald-500 text-white mx-auto py-4">
      <ul className="md:flex gap-5 hidden justify-center text-xl">
        {NavMenu.map((title, index) => (
          <li
            className="cursor-pointer hover:text-slate-500 transition-all duration-300"
            key={index}
          >
            <a href="">{title}</a>
          </li>
        ))}
      </ul>

      <button onClick={handleToggleMenu}>
        <BurgerMenu />
      </button>
      {burgerMenu && (
        <ul className="flex gap-5 justify-center text-xl">
          {NavMenu.map((title, index) => (
            <li
              className="cursor-pointer hover:text-slate-500 transition-all duration-300"
              key={index}
            >
              <a href="">{title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
