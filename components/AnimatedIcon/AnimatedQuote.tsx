"use client";
import Lottie from "lottie-react";
import quoteAnimation from "@/assets/lottie/quote.json";
import { FC } from "react";

const AnimatedQuote: FC = () => {
  return (
    <div>
      <Lottie animationData={quoteAnimation} loop={true} />
    </div>
  );
};

export default AnimatedQuote;
