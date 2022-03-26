import React from "react";
import { useDataContext } from "../../context/data-context";
import "../Product/Css/filterdata.css";

const FilterData = () => {
  const { state, dispatch } = useDataContext();
  return (
    <div>
      <aside className='filter-sidebar'>
        <div className='sidebar-content'>
          <div className='filters flex width-100 '>
            <h1 className='filter-heading'>Filters</h1>
            <button
              className='link-btn'
              onClick={() =>
                dispatch({
                  type: "CLEAR_FILTER",
                })
              }>
              Clear Fliter
            </button>
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
              value={state.priceRange === "" ? 1000 : state.priceRange}
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
                  checked={state.filters.OutOfStock}
                  onChange={() =>
                    dispatch({
                      type: "OUT_OF_STOCK",
                      payload: state.filters.OutOfStock,
                    })
                  }
                />
                Exclude Out of Stock
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
                />
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
                  checked={state.sortBy === "LOW_TO_HIGH"}
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
                  checked={state.sortBy === "HIGH_TO_LOW"}
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
