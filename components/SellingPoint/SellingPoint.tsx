import AnimatedOakTree from "@/components/AnimatedIcon/AnimatedOakTree";
import AnimatedDelivery from "@/components/AnimatedIcon/AnimatedDelivery";
import AnimatedTeams from "@/components/AnimatedIcon/AnimatedTeams";

const SellingPointArray = [
  {
    title: "Roots",
    description: "Proudly established in County Offaly since 1984.",
    icons: <AnimatedOakTree />,
  },
  {
    title: "Variety",
    description: "An unparalleled selection to suit every taste and need.",
    icons: <AnimatedTeams />,
  },
  {
    title: "Delivery",
    description: "Reliable, fast shipping—directly to your doorstep.",
    icons: <AnimatedDelivery />,
  },
];

const SellingPoint = () => {
  return (
    <div className="bg-emerald-500/30 text-slate-600">
      <div className="max-w-7xl mx-auto bg-transparent py-10 lg:px-15 px-10 flex flex-col lg:flex-row justify-between items-start gap-3">
        {SellingPointArray.map((point, index) => (
          <div key={index} className="flex justify-center items-center gap-5">
            <div className="w-20">{point.icons}</div>
            <div className="space-y-1">
              <h3 className="text-xl xl:text-2xl">{point.title}</h3>
              <p className="text-sm lg:text-[15px]">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingPoint;
