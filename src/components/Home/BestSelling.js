import React from "react";
import ProductCard from "../Product/ProductCard";
import "./Css/bestselling.css";
const BestSelling = () => {
  return (
    <div>
      <section class='bestseller'>
        <div class='heading-bestseller'>
          <h1>Bestseller Products</h1>
          <hr class='short-line' />
          <hr class='shorter-line' />
        </div>
        <div class='bestseller-container'>
          <div class='home-tab-title'>
            <span>Iteme one</span>
            <span>|</span> <span>Iteme one</span>
            <span>|</span>
            <span>Iteme one</span>
          </div>
          <div class='bestseller-prods'>
            <div class='bestseller-prods-wrapper'>
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
