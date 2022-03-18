import React from "react";
import { useDataContex } from "../../contex/data-contex";
import "../Product/Css/filterdata.css";

const FilterData = () => {
  const { state, dispatch } = useDataContex();

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
            <div className=' price-range'>
              <span>100</span>
              <span>1000</span>
            </div>
            <input
              type='range'
              className='slider'
              min='100'
              max='1000'
              onChange={(e) =>
                dispatch({
                  type: "PRICE_RANGE",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <hr className='filterhr' />
          {/* <div className='filters'>
            <h1>Category</h1>
            {state.categories.map((items) => {
              return (
                <>
                  <ul>
                    <li key={items.id}>
                      <input
                        type='checkbox'
                        // checked={items.categoryName}
                        onChange={() =>
                          dispatch({
                            type: "FILTER_BY_CATEGORY",
                            payload: items.categoryName,
                          })
                        }
                      />
                      {items.categoryName}
                    </li>
                  </ul>
                </>
              );
            })}
          </div> */}

          <div className='filters'>
            <h1>Type</h1>
            <ul>
              <li>
                <input
                  type='checkbox'
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
                <input
                  type='checkbox'
                  checked={state.filters.fastDelivery}
                  onChange={() =>
                    dispatch({
                      type: "FAST_DELIVERY",
                      payload: state.filters.fastDelivery,
                    })
                  }
                />{" "}
                Fast Delivery
              </li>
            </ul>
          </div>
          <hr className='filterhr' />
          {/* <div className='filters'>
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
          <hr className='filterhr' />*/}

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
