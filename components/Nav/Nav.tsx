"use client";

import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

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
    <nav className="relative bg-emerald-500 text-white mx-auto py-4">
      {/* large screen and tablet */}
      <div className="flex justify-center">
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
      </div>

      {/* mobile screen */}
      <div className="flex">
        <button className="md:hidden ml-auto pr-5" onClick={handleToggleMenu}>
          <BurgerMenu />
        </button>
        {burgerMenu && (
          <div className="fixed top-0 w-full h-screen z-50">
            <div
              className="h-screen bg-black/50"
              onClick={handleToggleMenu}
            ></div>
            <div className="fixed flex justify-start p-10 items-start top-0 h-screen bg-emerald-500 w-[70%]">
              <button
                onClick={handleToggleMenu}
                className="absolute top-10 right-10"
              >
                <IoMdClose />
              </button>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col md:hidden gap-5 justify-center text-xl"
              >
                {NavMenu.map((title, index) => (
                  <li
                    className="cursor-pointer hover:text-slate-500 transition-all duration-300"
                    key={index}
                  >
                    <a href="">{title}</a>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
