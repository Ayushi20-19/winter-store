import React from "react";
import ProductCard from "../Product/ProductCard";
import "./Css/bestselling.css";
const BestSelling = () => {
  return (
    <div>
      <section className='bestseller'>
        <div className='heading-bestseller'>
          <h1>Bestseller Products</h1>
          <hr className='short-line' />
          <hr className='shorter-line' />
        </div>
        <div className='bestseller-container'>
          <div className='home-tab-title'>
            <span>Iteme one</span>
            <span>|</span> <span>Iteme one</span>
            <span>|</span>
            <span>Iteme one</span>
          </div>
          <div className='bestseller-prods'>
            <div className='bestseller-prods-wrapper'>
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
