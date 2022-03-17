import React from "react";

import BestSelling from "../components/Home/BestSelling";
import Category from "../components/Home/Category";
import HeroSection from "../components/Home/HeroSection";
import OurStory from "../components/Home/OurStory";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurStory />
      <Category />
      <BestSelling />
    </div>
  );
};

export default HomePage;
