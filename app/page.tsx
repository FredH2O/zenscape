import BrowseOurRange from "@/components/BrowseOurRange/BrowseOurRange";
import Hero from "@/components/Hero/Hero";
import Motto from "@/components/Motto/Motto";
import PaginatedItems from "@/components/Pagination/PaginatedItem";
import SeasonalCollection from "@/components/SeasonalCollection/SeasonalCollection";
import SellingPoint from "@/components/SellingPoint/SellingPoint";
import CustomerTestimonials from "@/components/SellingPoint/CustomerTestimonials";
import TestimonialBlock from "@/components/Testimonial/TestimonialBlock";
import VisitUs from "@/components/VisitUs/VisitUs";
import AboutUs from "@/components/AboutUs/AboutUs";
import Advice from "@/components/Advice/Advice";
import PlantWithUs from "@/components/PlantWithUs/PlantWithUs";
import Footer from "@/components/Footer/Footer";
import WishlistSidebar from "@/components/WishlistSidebar/WishlistSidebar";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <WishlistSidebar />
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
        <CustomerTestimonials />
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <VisitUs />
          <AboutUs />
          <Advice />
          <PlantWithUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
