import React from "react";
import "../Product/Css/productlist.css";
import ProductCard from "./ProductCard";
import { getSortedData } from "./Filters";
import {
  getPriceRangeData,
  getFilteredData,
  getCategoryFilteredData,
} from "./Filters";
import { useDataContext } from "../../context/data-context";
const ProductsList = () => {
  const { state } = useDataContext();
  const sortedData = getSortedData(state, state.products);
  const selectedCategories = getCategoryFilteredData(state, sortedData);
  const filteredData = getFilteredData(
    selectedCategories,
    state.filters.OutOfStock,
    state.filters.fastDelivery
  );

  const priceRange = getPriceRangeData(filteredData, state.priceRange);
  console.log(selectedCategories);
  return (
    <div>
      <section className='main-prod-section'>
        <div>
          <h1>{priceRange.length} items</h1>
        </div>
        <div className=' flex-wrap justify-content-evenly'>
          {priceRange
            ? priceRange.map((items) => <ProductCard {...items} />)
            : "loading"}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
