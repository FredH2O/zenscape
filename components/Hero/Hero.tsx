"use client";
import SplitText from "../ReactBitsUI/SplitText";

const handleAnimationComplete = () => {
  console.log("Animation done!");
};

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container max-w-md lg:max-w-screen text-center">
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
