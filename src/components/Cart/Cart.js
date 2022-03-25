import React from "react";
import axios from "axios";
import { useDataContex } from "../../contex/data-contex";
import "./cart.css";
import CartCard from "./CartCard";
import { useEffect } from "react";

const Cart = () => {
  const { state, dispatch } = useDataContex();
  const localToken = localStorage.getItem("token");

  const getCartProduct = async (localToken) => {
    const response = await axios.get(
      "/api/user/cart",

      { headers: { authorization: localToken } }
    );

    dispatch({
      type: "GET_CART",
      payload: response.data.cart,
    });
  };

  const removeFromCart = async (_id) => {
    console.log("inside remove handler", _id);
    const localToken = localStorage.getItem("token");
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: localToken,
      },
    });
    if (response.status === 200) {
      console.log(response);
      dispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    } else {
      console.warn(" error ", response);
    }
  };

  useEffect(() => {
    getCartProduct(localToken);
  }, []);

  return (
    <div>
      <div className='heading-cart'>
        <h1>My Carts</h1>
      </div>
      <section className='cart-main'>
        <div className='productDisplay'>
          {state.cartItem
            ? state.cartItem.map((products, index) => {
                console.log("from cart comp props", products._id);
                return (
                  <>
                    <CartCard
                      key={index}
                      id={products._id}
                      name={products.title}
                      price={products.price}
                      image={products.productImg}
                      removeFromCart={removeFromCart}
                    />
                  </>
                );
              })
            : "..loading"}
        </div>
        <div className='totalCart'>
          <div className='price-card'>
            <div className='price-card-content'>
              <div className='price-heading'>
                <b>PRICE DETAILS</b>
              </div>
              <div className='pricing'>
                <div className='pricing-item'>
                  <span>Price</span>
                  <span>2342$</span>
                </div>
                <div className='pricing-item'>
                  <span>Discount</span>
                  <span>-40$</span>
                </div>
                <div className='pricing-item'>
                  <span>Delivery Charges</span>
                  <span>10$</span>
                </div>
              </div>
              <div className='total-amout'>
                <span>Total Amount</span>
                <span>4090$</span>
              </div>
              <div className='amount-save'>You will save 40$ in this order</div>
              <button className='btn primary border-radius-0 place-order'>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
