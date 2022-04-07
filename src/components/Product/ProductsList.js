import React from "react";
import "../Product/Css/productlist.css";
import ProductCard from "./ProductCard";
import { getSortedData } from "./Filters";
import { getPriceRangeData, getFilteredData } from "./Filters";
import { useDataContext } from "../../context/data-context";
const ProductsList = () => {
  const { state } = useDataContext();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(
    sortedData,
    state.filters.OutOfStock,
    state.filters.fastDelivery
  );

  const priceRange = getPriceRangeData(filteredData, state.priceRange);
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
