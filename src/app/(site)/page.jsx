'use client';
import AboutSection from "@/components/AboutSection";
import ConsultantSection from "@/components/ConsultantSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ServicesSection from "@/components/ServicesSection";


const Home = () => {


  return (
    <section className="min-h-screen bg-lightBackground text-lightText">
      <div id="home" className="pb-16 sm:pb-12 md:pb-20 lg:pb-24">
        <HeroSection></HeroSection>
      </div>
      <div id="about" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <AboutSection />
      </div>
      <div id="services" className="w-full h-full bg-[url('/service.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
          <ServicesSection></ServicesSection>
        </div>
      </div>
      <div id="products" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <ProductSection />
      </div>
      {/* <div id="consultants" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <ConsultantSection />
      </div> */}
      <div id="contact" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-10 lg:px-8 sm:py-12 md:py-20 lg:py-24">
        <ContactSection />
      </div>
    </section>
  );
}

export default Home;