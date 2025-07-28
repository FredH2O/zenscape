import Hero from "@/components/Hero/Hero";
import PaginatedItems from "@/components/Pagination/PaginatedItem";
import SeasonalCollection from "@/components/SeasonalCollection/SeasonalCollection";
import SellingPoint from "@/components/SellingPoint/SellingPoint";
import TestimonialBlock from "@/components/Testimonial/TestimonialBlock";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-emerald-50">
        <TestimonialBlock />
        <SellingPoint />
        <section className="max-w-5xl mx-auto space-y-10 py-10">
          <PaginatedItems />
          <SeasonalCollection />
        </section>
      </div>
    </div>
  );
}
