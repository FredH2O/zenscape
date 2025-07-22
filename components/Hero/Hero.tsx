"use client";
import Image from "next/image";
import SplitText from "../ReactBitsUI/SplitText";

const handleAnimationComplete = () => {
  console.log("Animation done!");
};

const Hero = () => {
  return (
    <div className="relative md:h-screen h-[500px] md:m-0 m-3 flex justify-center items-center">
      <div className="absolute bg-black opacity-70 inset-0 -z-40"></div>
      <div className="absolute -z-50 rounded w-full h-full">
        <Image
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          src="/images/zenscape-hero.jpg"
          alt="Welcome to Zenscape"
        />
      </div>
      <div className="container z-10 max-w-screen md:h-screen h-full p-3 flex justify-center items-center backdrop-blur-xs">
        {/* title here */}
        <div className="flex flex-col md:items-start gap-3 container md:px-20 px-5">
          <SplitText
            text="Zenscape"
            className="text-7xl font-semibold text-center text-zinc-200 text-shadow-zinc-700 text-shadow-sm"
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

          {/* motto here */}
          <SplitText
            text="Here, your thoughts can settle like leaves on water."
            className="text-xl font-light text-center text-zinc-300 italic text-shadow-zinc-700 text-shadow-sm"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
