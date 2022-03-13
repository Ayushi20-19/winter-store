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

{
  /*<div class='card-wrapper'>
                <div class='element'>
                  <img
                    src='https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    alt='product img'
                  />
                </div>
                <div class='content-ecard'>
                  <span>title of product</span>
                  <p>Description of product</p>
                </div>
                <div class='btns-wrapper-ecom'>
                  <span>$50</span>
                  <span>4 stars</span>
                </div>
                <button class='btn primary btn-ecom'>Add to Cart</button>
              </div>

              <div class='card-wrapper'>
                <div class='element'>
                  <img
                    src='https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    alt='product img'
                  />
                </div>
                <div class='content-ecard'>
                  <span>title of product</span>
                  <p>Description of product</p>
                </div>
                <div class='btns-wrapper-ecom'>
                  <span>$50</span>
                  <span>4 stars</span>
                </div>
                <button class='btn primary btn-ecom'>Add to Cart</button>
              </div>

              <div class='card-wrapper'>
                <div class='element'>
                  <img
                    src='https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    alt='product img'
                  />
                </div>
                <div class='content-ecard'>
                  <span>title of product</span>
                  <p>Description of product</p>
                </div>
                <div class='btns-wrapper-ecom'>
                  <span>$50</span>
                  <span>4 stars</span>
                </div>
                <button class='btn primary btn-ecom'>Add to Cart</button>
              </div>

              <div class='card-wrapper'>
                <div class='element'>
                  <img
                    src='https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    alt='product img'
                  />
                </div>
                <div class='content-ecard'>
                  <span>title of product</span>
                  <p>Description of product</p>
                </div>
                <div class='btns-wrapper-ecom'>
                  <span>$50</span>
                  <span>4 stars</span>
                </div>
                <button class='btn primary btn-ecom'>Add to Cart</button>
</div>
*/
}
