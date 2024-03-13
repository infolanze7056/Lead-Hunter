import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import FAQ from "../Components/Home/FAQ";
import ServiceSection from "../Components/Home/ServiceSection";
import WorkSection from "../Components/Home/WorkSection";
import ContactSection from "../Components/Home/ContactSection";

const Home = () => {
   return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <FAQ />
      <WorkSection />
      <ContactSection />
    </>
   );
};

export default Home;