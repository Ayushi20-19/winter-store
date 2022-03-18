import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='element'>
          <img
            src='https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            alt='product img'
          />
        </div>
        <div className='content-ecard'>
          <span>title of product</span>
          <p>Description of product</p>
        </div>
        <div className='btns-wrapper-ecom'>
          <span>$50</span>
          <span>4 stars</span>
        </div>
        <button className='btn primary btn-ecom'>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
