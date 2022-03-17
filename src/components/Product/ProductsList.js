import React from "react";
import { useState, useReducer } from "react";
import "../Product/Css/productlist.css";
// import axios from "axios";
import { useDataContex } from "../../contex/data-contex";
import { getSortedData, getFilterdeData } from "./Filters";

const ProductsList = () => {
  // const fetchData = async () => {
  //   await axios.get("/api/products").then((response) => {
  //     console.log(response.data.products);
  //   });
  // };
  // fetchData();
  const { state } = useDataContex();
  //console.log(data);

  // const [state, dispatch] = useReducer(reducer, { filterData: data });
  // let filterData = [...state];

  const getSortedDataa = getSortedData(state, state.products);
  const getFilterdeDataa = getFilterdeData(state, getSortedDataa);
  console.log("sorted data", getSortedDataa);
  console.log("filterd data --", getFilterdeDataa);

  return (
    <div>
      <section className='main-prod-section'>
        <div>
          <h1>{getFilterdeDataa.length} items</h1>
        </div>
        <div className=' flex-wrap justify-content-evenly'>
          {getFilterdeDataa
            ? getFilterdeDataa.map((items) => {
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
            : "loading......"}{" "}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
