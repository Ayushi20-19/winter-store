import React from "react";
import axios from "axios";
import { useDataContex } from "../../contex/data-contex";
import "./cart.css";
import CartCard from "./CartCard";
import { useEffect } from "react";
import PriceCard from "./PriceCard";

const Cart = () => {
  const { state, dispatch } = useDataContex();
  const localToken = localStorage.getItem("token");

  const getCartProduct = async (localToken) => {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: localToken },
    });

    dispatch({
      type: "GET_CART",
      payload: response.data.cart,
    });
  };

  const removeFromCart = async (_id) => {
    const localToken = localStorage.getItem("token");
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: localToken,
      },
    });
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    } else {
      console.warn(" error ", response);
    }
  };

  const updateCartQuantity = async (id, type) => {
    const product = state.cartItem.find((product) => product._id === id);
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type,
        },
        data: {
          cart: product,
        },
      },
      {
        headers: {
          authorization: localToken,
        },
      }
    );
    if (response.status === 200) {
      dispatch({
        type:
          type === "increment"
            ? "INCREASE_ITEM_QUANTITY"
            : "DECREASE_ITEM_QUANTITY",
        payload: response.data.cart,
      });
    } else {
      console.warn(" error from set product", response);
    }
  };

  const getCartTotalPrice = (cartItem) => {
    const totaldiscount = 299;
    const deliveryCharges = 40;
    const intialValue = 0;
    const cartQuantity = cartItem.reduce(
      (acc, curr) => acc + Number(curr.qty),
      intialValue
    );
    const itemPrice = cartItem.reduce(
      (acc, curr) => acc + Number(curr.price * curr.qty),
      intialValue
    );

    //discont will apply only if item price is greater than 499, and neither it affect if you increase the quantity,
    //only single item price should be greater than 499
    const discountedPrice = cartItem.reduce(
      (acc, curr) =>
        curr.price > 499
          ? acc + Number(curr.price * curr.qty) - totaldiscount
          : acc + Number(curr.price * curr.qty),
      intialValue
    );

    const totalPrice =
      discountedPrice === itemPrice
        ? itemPrice + deliveryCharges
        : discountedPrice + deliveryCharges;

    return { cartQuantity, itemPrice, discountedPrice, totalPrice };
  };

  useEffect(() => {
    getCartProduct(localToken);
  }, []);

  const { cartQuantity, itemPrice, discountedPrice, totalPrice } =
    getCartTotalPrice(state.cartItem);

  return (
    <div>
      <div className='heading-cart'>
        {state.cartItem.length !== 0 ? (
          <h1>My Cart</h1>
        ) : (
          <h1>No item in Cart</h1>
        )}
      </div>
      <section className='cart-main'>
        {state.cartItem.length !== 0 ? (
          <>
            <div className='productDisplay'>
              {state.cartItem.map((products, index) => {
                return (
                  <>
                    <CartCard
                      key={index}
                      id={products._id}
                      name={products.title}
                      price={products.price}
                      image={products.productImg}
                      removeFromCart={removeFromCart}
                      updateCartQuantity={updateCartQuantity}
                    />
                  </>
                );
              })}
            </div>
            <div className='totalCart'>
              <PriceCard
                cartQuantity={cartQuantity}
                itemPrice={itemPrice}
                discountedPrice={discountedPrice}
                totalPrice={totalPrice}
              />
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Cart;
