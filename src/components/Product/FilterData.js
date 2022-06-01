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
              <span>50</span>
              <span>1000</span>
            </div>
            <input
              type='range'
              className='slider'
              min='70'
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
          <div className='filters'>
            <h1>Categories</h1>
            {state.categories.map((items) => {
              return (
                <>
                  <ul>
                    <li key={items.id}>
                      <input
                        id={items.categoryName}
                        type='checkbox'
                        checked={state.filters.filterByCategories.includes(
                          items.categoryName
                        )}
                        onChange={() => {
                          dispatch({
                            type: "FILTER_BY_CATEGORIES",
                            payload: items.categoryName,
                          });
                        }}
                      />
                      <label htmlFor={items.categoryName}>
                        {items.categoryName}
                      </label>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
          <hr className='filterhr' />
          <div className='filters'>
            <h1>Type</h1>
            <ul>
              <li>
                <input
                  type='checkbox'
                  checked={state.filters.OutOfStock}
                  id='out-of-stock'
                  onChange={() =>
                    dispatch({
                      type: "OUT_OF_STOCK",
                      payload: state.filters.OutOfStock,
                    })
                  }
                />
                <label htmlFor='out-of-stock'>Remove out of Stock</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='fast-delivery'
                  checked={state.filters.fastDelivery}
                  onChange={() =>
                    dispatch({
                      type: "FAST_DELIVERY",
                      payload: state.filters.fastDelivery,
                    })
                  }
                />
                <label htmlFor='fast-delivery'>Fast Delivery</label>
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
                  id='low-to-high'
                  checked={state.sortBy === "LOW_TO_HIGH"}
                  onClick={() =>
                    dispatch({
                      type: "SORT",
                      payload: "LOW_TO_HIGH",
                    })
                  }
                />
                <label htmlFor='low-to-high'>Low to high</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='sortby'
                  id='high-to-low'
                  checked={state.sortBy === "HIGH_TO_LOW"}
                  onClick={() =>
                    dispatch({
                      type: "SORT",
                      payload: "HIGH_TO_LOW",
                    })
                  }
                />
                <label htmlFor='high-to-low'>High to low</label>
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
