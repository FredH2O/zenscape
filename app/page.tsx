import BrowseOurRange from "@/components/BrowseOurRange/BrowseOurRange";
import Hero from "@/components/Hero/Hero";
import Motto from "@/components/Motto/Motto";
import PaginatedItems from "@/components/Pagination/PaginatedItem";
import SeasonalCollection from "@/components/SeasonalCollection/SeasonalCollection";
import SellingPoint from "@/components/SellingPoint/SellingPoint";
import TestimonialBlock from "@/components/Testimonial/TestimonialBlock";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-emerald-50 border pb-10">
        <TestimonialBlock />
        <SellingPoint />
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <div className="max-w-5xl grid grid-col-1 gap-10 py-10">
            <PaginatedItems />
            <SeasonalCollection />
          </div>
          <BrowseOurRange />
          <Motto />
        </div>
      </div>
    </div>
  );
}
