import React, { useState, useEffect } from "react";
import "../Product/Css/productlist.css";
import ProductCard from "./ProductCard";
import { getSortedData } from "./Filters";
import {
  getPriceRangeData,
  getFilteredData,
  getCategoryFilteredData,
} from "./Filters";
import { useDataContext } from "../../context/data-context";
import Pagination from "./Pagination";

const ProductsList = () => {
  const { state } = useDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [prodPerPage] = useState(6);
  const sortedData = getSortedData(state, state.products);
  const selectedCategories = getCategoryFilteredData(state, sortedData);
  const filteredData = getFilteredData(
    selectedCategories,
    state.filters.OutOfStock,
    state.filters.fastDelivery
  );
  const priceRange = getPriceRangeData(filteredData, state.priceRange);

  // Get current prod
  const indexOfLastProd = currentPage * prodPerPage;
  const indexOfFirstPost = indexOfLastProd - prodPerPage;
  const currentProd = priceRange.slice(indexOfFirstPost, indexOfLastProd);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  useEffect(() => {
    currentProd.length === 0 && setCurrentPage(1);
  }, [priceRange]);

  return (
    <div>
      <section className='main-prod-section'>
        <div>
          <h3 className='margin-1p5'>
            Showing {currentProd.length} items out of {priceRange.length}
          </h3>
        </div>
        <div className=' flex-wrap justify-content-evenly'>
          {currentProd
            ? currentProd.map((items) => <ProductCard {...items} />)
            : "loading"}
        </div>
      </section>
      <Pagination
        prodPerPage={prodPerPage}
        totalProd={priceRange.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsList;
