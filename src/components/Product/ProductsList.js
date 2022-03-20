import React from "react";
import "../Product/Css/productlist.css";
import { useDataContex } from "../../contex/data-contex";
import { getSortedData, getFilteredData, getPriceRangeData } from "./Filters";

const ProductsList = () => {
  const { state } = useDataContex();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(
    sortedData,
    state.filters.includeOutOfStock,
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
            ? priceRange.map((items) => {
                return (
                  <div className='card-wrapper' key={items.id}>
                    <div className='element'>
                      <img src={items.productImg} alt='product img' />
                    </div>
                    <div className='content-ecard'>
                      <span>{items.title}</span>
                      <p>{items.description}</p>
                    </div>
                    <div className='btns-wrapper-ecom'>
                      <span>${items.price}</span>
                      <span>{items.stars} stars</span>
                    </div>
                    <button className='btn primary btn-ecom'>
                      Add to Cart
                    </button>
                  </div>
                );
              })
            : "loading......"}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
