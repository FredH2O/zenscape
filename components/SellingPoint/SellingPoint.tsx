import AnimatedOakTree from "@/components/AnimatedIcon/AnimatedOakTree";
import AnimatedDelivery from "@/components/AnimatedIcon/AnimatedDelivery";
import AnimatedTeams from "@/components/AnimatedIcon/AnimatedTeams";

const SellingPointArray = [
  {
    title: "Roots",
    description: "Rooted since 1984 in Co.Offaly",
    icons: <AnimatedOakTree />,
  },
  {
    title: "Variety",
    description: "Selections like you've never seen before",
    icons: <AnimatedTeams />,
  },
  {
    title: "Delivery",
    description: "Fast shipping, straight to your home",
    icons: <AnimatedDelivery />,
  },
];

const SellingPoint = () => {
  return (
    <div className="bg-emerald-500">
      <div className="max-w-7xl mx-auto bg-emerald-500 flex justify-between items-center gap-3">
        {SellingPointArray.map((point, index) => (
          <div key={index} className="border px-3">
            <div className="w-15">{point.icons}</div>
            <h3 className="text-2xl">{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingPoint;
