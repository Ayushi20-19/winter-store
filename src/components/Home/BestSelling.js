import React from "react";
import { useDataContext } from "../../context/data-context";
import ProductCard from "../Product/ProductCard";
import "./Css/bestselling.css";
const BestSelling = () => {
  const { state } = useDataContext();
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
            <span>Best Qualities</span>
            <span>|</span> <span>Different Varities</span>
            <span>|</span>
            <span>Fast Delivery</span>
          </div>
          <div className='bestseller-prods'>
            <div className='bestseller-prods-wrapper'>
              {state.products
                ? state.products
                    .slice(1, 4)
                    .map((items) => <ProductCard {...items} />)
                : "loading"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
