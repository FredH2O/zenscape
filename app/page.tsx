import Hero from "@/components/Hero/Hero";
import PaginatedItems from "@/components/Pagination/PaginatedItem";
import SellingPoint from "@/components/SellingPoint/SellingPoint";
import TestimonialBlock from "@/components/Testimonial/TestimonialBlock";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-emerald-50">
        <TestimonialBlock />
        <SellingPoint />
        <PaginatedItems />
      </div>
    </div>
  );
}
