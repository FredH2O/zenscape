import Hero from "@/components/Hero/Hero";
import TestimonialBlock from "@/components/Testimonial/TestimonialBlock";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <TestimonialBlock />
        </div>
      </div>
    </div>
  );
}
