import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SubscriptionSection from "../components/SubscriptionsSection";
import FreePDFsSection from "../components/FreePDFs";
import Testimonials from "../components/Testimonials";
import LandingPageImg from "../assets/landing_page.jpg";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="">
        <img src={LandingPageImg} className="w-full h-full" />
      </div>
      <WhyChooseUs />
      <SubscriptionSection />
      <FreePDFsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
