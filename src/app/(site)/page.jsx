'use client';
import AboutSection from "@/components/page-sections/AboutSection";
import ChooseUsSection from "@/components/page-sections/ChooseUsSection";
import ConsultantSection from "@/components/page-sections/ConsultantSection";
import ContactSection from "@/components/page-sections/ContactSection";
import HeroSection from "@/components/page-sections/HeroSection";
import ProductSection from "@/components/page-sections/ProductSection";
import ServicesSection from "@/components/page-sections/ServicesSection";
import TestimonySection from "@/components/page-sections/TestimonySection";


const Home = () => {


  return (
    <section className="min-h-screen bg-lightBackground text-lightText">
      <div id="home" className="pb-16 sm:pb-12 md:pb-20 lg:pb-24">
        <HeroSection></HeroSection>
      </div>
      <div id="about" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <AboutSection />
      </div>
      <div id="services" className="w-full h-full bg-[url('/service/service-bg.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
          <ServicesSection></ServicesSection>
        </div>
      </div>
      <div className="py-16 sm:py-12 md:py-20 lg:py-24">
          <div className="w-full h-full bg-[url('/products/product-bg.png')] bg-cover bg-no-repeat bg-center">
        <div id="products" className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8">
          <ProductSection />
        </div>
      </div>
      </div>
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl sm:py-12 md:py-20 lg:py-24">
        <ChooseUsSection />
      </div>
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl sm:py-12 md:py-20 lg:py-24">
        <TestimonySection />
      </div>
      <div id="contact" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <ContactSection />
      </div>
    </section>
  );
}

export default Home;