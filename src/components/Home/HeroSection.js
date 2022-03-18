import React from "react";
import "./Css/herosection.css";
const HeroSection = () => {
  return (
    <div>
      {" "}
      <section className='body'>
        <div className='content'>
          <h1>Winter Store</h1>
          <p>
            Welcome to ecom website get the exclusive products in less prices
          </p>
          <button className='btn primary border-radius-0'>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
