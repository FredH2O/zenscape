import { ReactNode } from "react";

type MarketingRibbonProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

type MarketingRibbonArray = {
  marketingArray: MarketingRibbonProps[];
};

const MarketingRibbon = ({ marketingArray }: MarketingRibbonArray) => {
  return (
    <div className="bg-emerald-500/30 text-slate-600">
      <div className="max-w-7xl mx-auto bg-transparent py-10 lg:px-15 px-10 flex flex-col lg:flex-row justify-between items-start gap-3">
        {marketingArray.map((point, index) => (
          <div key={index} className="flex justify-center items-center gap-5">
            <div className="w-20">{point.icon}</div>
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

export default MarketingRibbon;
