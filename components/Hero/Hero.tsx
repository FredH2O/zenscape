"use client";
import Image from "next/image";
import SplitText from "../ReactBitsUI/SplitText";

const handleAnimationComplete = () => {
  console.log("Animation done!");
};

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="absolute bg-black opacity-70 inset-0 -z-40"></div>
      <div className="absolute -z-50 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          src="/images/zenscape-hero.jpg"
          alt="Welcome to Zenscape"
        />
      </div>
      <div className="container z-10 max-w-md lg:max-w-screen text-center">
        <SplitText
          text="Welcome to Zenscape."
          className="text-7xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};

export default Hero;
