import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import SubscriptionSection from "../components/SubscriptionsSection";
import FreePDFsSection from "../components/FreePDFs";
import Testimonials from "../components/Testimonials";
import LandingPageImg from "../assets/landing_page.jpg";
import HomeSubject from "../components/HomeSubject";

import PricesImage from "../assets/Prices.png";

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}

      <div className="">
        <img src={LandingPageImg} className="w-full h-full" />
      </div>

      <div className="mt-[-200px]">
        <img src={PricesImage} className="w-full h-full" />
      </div>
      <WhyChooseUs />
      {/* <SubscriptionSection /> */}
      <HomeSubject />
      <FreePDFsSection />
      <Testimonials />
    </div>
  );
};

export default Home;
