import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import BestSelling from "../components/Home/BestSelling";
import Category from "../components/Home/Category";
import HeroSection from "../components/Home/HeroSection";
import OurStory from "../components/Home/OurStory";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <OurStory />
      <Category />
      <BestSelling />
      <Footer />
    </div>
  );
};

export default HomePage;
