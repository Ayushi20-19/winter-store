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

  const [postsPerPage] = useState(6);
  const sortedData = getSortedData(state, state.products);
  const selectedCategories = getCategoryFilteredData(state, sortedData);
  const filteredData = getFilteredData(
    selectedCategories,
    state.filters.OutOfStock,
    state.filters.fastDelivery
  );

  const priceRange = getPriceRangeData(filteredData, state.priceRange);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = priceRange.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [priceRange]);

  return (
    <div>
      <section className='main-prod-section'>
        <div>
          <h3 className='margin-1p5'>
            Showing {currentPosts.length} items out of {priceRange.length}
          </h3>
        </div>
        <div className=' flex-wrap justify-content-evenly'>
          {currentPosts
            ? currentPosts.map((items) => <ProductCard {...items} />)
            : "loading"}
        </div>
      </section>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={priceRange.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsList;
