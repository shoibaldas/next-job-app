'use client';
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";



const Home = () => {


  return (
    <section className="min-h-screen bg-lightBackground text-lightText">
      <div>
        <HeroSection></HeroSection>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 lg:py-20">
        <AboutSection />
      </div>
      <div className="bg-black">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 lg:py-20">
          <ServicesSection></ServicesSection>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 lg:py-20">
        <ProductSection/>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 lg:py-20">
        <ContactSection />
      </div>
      {/* <div className="container mx-auto h-full">Home Page1</div> */}
    </section>
  );
}

export default Home;