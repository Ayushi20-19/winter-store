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
              <div className='card-wrapper'>
                <div className='element'>
                  <img
                    src='https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    alt='product img'
                  />
                </div>
                <div className='content-ecard'>
                  <span>title</span>
                  <p>description</p>
                </div>
                <div className='btns-wrapper-ecom'>
                  <span>₹90</span>
                  <span>4 stars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
