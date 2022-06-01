import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/herosection.css";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className='body'>
        <div className='content'>
          <h1>Winter Store</h1>
          <p>
            Welcome to <b>Game of throne Merch Store</b>, get exclusive products
            at minimum price.
          </p>
          <button
            className='btn primary border-radius-0'
            onClick={() => navigate("productListing")}>
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
