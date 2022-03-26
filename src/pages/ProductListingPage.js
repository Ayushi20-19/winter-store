import React from "react";
import FilterData from "../components/Product/FilterData";
import ProductsList from "../components/Product/ProductsList";
import Footer from "../components/Footer/Footer";
import "../components/Product/Css/productlistingpage.css";
const ProductListingPage = () => {
  return (
    <div>
      <div className='main-section'>
        <div className='filter'>
          <FilterData />
        </div>
        <div className='products'>
          <ProductsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
