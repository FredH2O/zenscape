"use client";
import Lottie from "lottie-react";
import animatedTeamsIcon from "@/assets/lottie/team.json";
import { FC } from "react";

const AnimatedTeams: FC = () => {
  return (
    <div>
      <Lottie animationData={animatedTeamsIcon} />
    </div>
  );
};

export default AnimatedTeams;
