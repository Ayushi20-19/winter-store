import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import { useDataContex } from "../../contex/data-contex";
import "../Product/Css/filterdata.css";

const FilterData = () => {
  const { state, dispatch } = useDataContex();
  // console.log("of filtersssssssssss", state);
  console.log(state.filters.includeOutOfStock);
  return (
    <div>
      <aside className='filter-sidebar'>
        <div className='sidebar-content'>
          <div className='filters'>
            <h1 className='filter-heading'>Filters</h1>
          </div>
          <hr className='filterhr' />
          <div className='filters'>
            <h1>Price</h1>
            <div className='price-range'>
              <span>250</span>
              <span>500</span>
              <span>750</span>
              <span>1000</span>
            </div>
            <input type='range' className='slider' min='100' max='1000' />
          </div>
          <hr className='filterhr' />
          <div className='filters'>
            <h1>Category</h1>
            <ul>
              <li>
                <input type='checkbox' /> Mens
              </li>
              <li>
                <input type='checkbox' /> Womens
              </li>
              <li>
                <input type='checkbox' /> Children
              </li>
            </ul>
          </div>
          <div className='filters'>
            <h1>Category</h1>
            <ul>
              <li>
                <input
                  type='checkbox'
                  // defaultChecked={true}
                  checked={state.filters.includeOutOfStock}
                  onChange={() =>
                    dispatch({
                      type: "INCLUDE_OUT_OF_STOCK",
                      payload: state.filters.includeOutOfStock,
                    })
                  }
                />
                Include Out of Stock
              </li>
              <li>
                <input type='checkbox' /> Fast Delivery
              </li>
            </ul>
          </div>
          <hr className='filterhr' />
          <div className='filters'>
            <h1>Rating</h1>
            <ul>
              <li>
                <input type='radio' name='rating' /> 5 start
              </li>
              <li>
                <input type='radio' name='rating' /> 4 start
              </li>
              <li>
                <input type='radio' name='rating' /> 3 start
              </li>
              <li>
                <input type='radio' name='rating' /> 2 start
              </li>
              <li>
                <input type='radio' name='rating' /> 1 start
              </li>
            </ul>
          </div>
          <hr className='filterhr' />
          <div className='filters'>
            <h1>SortBy</h1>
            <ul>
              <li>
                <input
                  type='radio'
                  name='sortby'
                  onClick={() =>
                    dispatch({
                      type: "SORT",
                      payload: "LOW_TO_HIGH",
                    })
                  }
                />
                Low to high
              </li>
              <li>
                <input
                  type='radio'
                  name='sortby'
                  onClick={() =>
                    dispatch({
                      type: "SORT",
                      payload: "HIGH_TO_LOW",
                    })
                  }
                />
                High to low
              </li>
            </ul>
          </div>
          <hr className='filterhr' />
        </div>
      </aside>
    </div>
  );
};

export default FilterData;
