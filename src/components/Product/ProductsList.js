import React from "react";
import "../Product/Css/productlist.css";
import { useDataContext } from "../../context/data-context";
import { getSortedData, getFilteredData, getPriceRangeData } from "./Filters";
import { useNavigate } from "react-router-dom";
import { setCartProducts } from "../Cart/SetCartProducts";

const ProductsList = () => {
  const { state, dispatch } = useDataContext();
  const navitageToCart = useNavigate();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(
    sortedData,
    state.filters.OutOfStock,
    state.filters.fastDelivery
  );
  const priceRange = getPriceRangeData(filteredData, state.priceRange);

  const checkItemInCart = (id) =>
    state.cartItem.some((dataCart) => dataCart._id === id);

  const cartBtnHandler = async (product) => {
    let localToken = localStorage.getItem("token");
    if (localToken) {
      const response = await setCartProducts(product, localToken);
      if (response.status === 201) {
        dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
      }
    }
  };

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
                      <span>₹{items.price}</span>
                      <span>{items.stars} stars</span>
                    </div>
                    {items.inStock ? null : (
                      <div className='outOfStock'>Out Of Stock</div>
                    )}
                    <div className='overlay'>
                      <button className='productQuickView '>
                        <i className='fad fa-search iconCard'></i>
                      </button>

                      <button className='productQuickView'>
                        <i className='far fa-heart iconCard'></i>
                      </button>
                      {checkItemInCart(items._id) ? (
                        <>
                          <button
                            className='productQuickView'
                            onClick={() => navitageToCart("/cart")}>
                            <i class='fas fa-shopping-bag iconCard'></i>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className='productQuickView'
                            onClick={() => cartBtnHandler(items)}
                            disabled={items.inStock ? "" : true}>
                            <i
                              className='far fa-shopping-bag iconCard'
                              style={
                                items.inStock ? null : { cursor: "not-allowed" }
                              }></i>
                          </button>
                        </>
                      )}

                      <button className='productQuickView'>
                        <i className='far fa-expand-arrows iconCard'></i>
                      </button>
                    </div>
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
