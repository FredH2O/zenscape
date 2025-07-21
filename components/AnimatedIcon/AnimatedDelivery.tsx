"use client";
import Lottie from "lottie-react";
import animatedDeliveryIcon from "@/assets/lottie/fast-delivery.json";
import { FC } from "react";

const AnimatedDelivery: FC = () => {
  return (
    <div>
      <Lottie animationData={animatedDeliveryIcon} />
    </div>
  );
};

export default AnimatedDelivery;
