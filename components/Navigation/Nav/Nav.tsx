"use client";

import { GiHamburgerMenu as BurgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import NavMenu, { NavItem } from "./NavMenu";

const navItems: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Nav = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setBurgerMenu(true);
  };

  const handleCloseMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <nav className="relative bg-emerald-500 text-white mx-auto py-4">
      {/* large screen and tablet */}
      <div className="flex justify-center">
        <ul className="md:flex gap-5 hidden justify-center text-xl">
          <NavMenu NavMenuArray={navItems} />
        </ul>
      </div>

      {/* mobile screen */}
      <div className="flex justify-center items-center">
        <div className="md:hidden justify-center items-center flex">
          <Image
            src="/logo/zenscape-logo.png"
            alt="Zenscape Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl italic font-bold text-white">Zenscape</h1>
        </div>
        <button className="md:hidden ml-auto pr-5" onClick={handleOpenMenu}>
          <BurgerMenu className="text-xl" />
        </button>
        {burgerMenu && (
          <div className="fixed top-0 w-full h-screen z-50">
            <div
              className="w-full h-full bg-black/50"
              onClick={handleOpenMenu}
            ></div>
            <div className="fixed flex justify-start p-10 items-start top-0 h-screen bg-emerald-500 w-[70%]">
              <button
                onClick={handleCloseMenu}
                className="absolute top-10 right-10"
              >
                <IoMdClose />
              </button>
              <motion.ul
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col md:hidden gap-5 justify-center text-xl"
              >
                <NavMenu close={handleCloseMenu} NavMenuArray={navItems} />
              </motion.ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
