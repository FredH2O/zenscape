"use client";
import Lottie from "lottie-react";
import oakTreeAnimation from "@/assets/lottie/oak-tree.json";
import { FC } from "react";

const AnimatedOakTree: FC = () => {
  return (
    <div>
      <Lottie animationData={oakTreeAnimation} loop={true} />
    </div>
  );
};

export default AnimatedOakTree;
