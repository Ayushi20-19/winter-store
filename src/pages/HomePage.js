import React from "react";
import Footer from "../components/Footer/Footer";
import BestSelling from "../components/Home/BestSelling";
import Category from "../components/Home/Category";
import HeroSection from "../components/Home/HeroSection";
import OurStory from "../components/Home/OurStory";
import Navbar from "../components/NavBar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurStory />
      <Category />
      <BestSelling />
      <Footer />
    </div>
  );
};

export default HomePage;
