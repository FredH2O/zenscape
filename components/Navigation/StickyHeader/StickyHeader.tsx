"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/Navigation/TopBar/TopBar";
import Nav from "@/components/Navigation/Nav/Nav";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          isSticky ? "top-0 fixed shadow-md" : "relative"
        }`}
      >
        <TopBar />
        <Nav />
      </header>
      {isSticky && <div className="h-[130px]"></div>}{" "}
      {/* Height = TopBar + Nav */}
    </>
  );
};

export default StickyHeader;
