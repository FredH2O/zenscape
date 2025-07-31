import AnimatedOakTree from "@/components/AnimatedIcon/AnimatedOakTree";
import AnimatedDelivery from "@/components/AnimatedIcon/AnimatedDelivery";
import AnimatedTeams from "@/components/AnimatedIcon/AnimatedTeams";
import MarketingRibbon from "./MarketingRibbon";

const SellingPointArray = [
  {
    title: "Roots",
    description: "Proudly established in County Offaly since 1984.",
    icon: <AnimatedOakTree />,
  },
  {
    title: "Variety",
    description: "An unparalleled selection to suit every taste and need.",
    icon: <AnimatedTeams />,
  },
  {
    title: "Delivery",
    description: "Reliable, fast shipping—directly to your doorstep.",
    icon: <AnimatedDelivery />,
  },
];

const SellingPoint = () => {
  return (
    <>
      <MarketingRibbon marketingArray={SellingPointArray} />
    </>
  );
};

export default SellingPoint;
