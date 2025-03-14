import React, { useEffect } from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import FreePDFsSection from "../components/FreePDFs";
import Testimonials from "../components/Testimonials";
import LandingPageImg from "../assets/landing_page.jpg";
import HomeSubject from "../components/HomeSubject";
import Price2999 from "../assets/2999.jpeg";

import PricesImage from "../assets/Prices.png";
import { Link } from "react-router-dom";
import SearchSection from "../components/SearchSection";

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}

      <div className="">
        <img src={LandingPageImg} className="w-full h-full" />
      </div>

      <div className=" lg:mt-[-200px] md:mt-[-150px] mt-[-40px]">
        <img src={PricesImage} className="w-full h-full" />
      </div>

      <SearchSection />

      <div className="">
        <img src={Price2999} className="w-full h-full" />
      </div>

      <div className="bg-black text-white flex items-center justify-center">
        <Link
          className="mt-3 mb-3 bg-yellow-600 px-4 py-2 rounded-md"
          to={`/buy-all-notes`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Pay Now
        </Link>{" "}
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
