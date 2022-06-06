import React from "react";
import axios from "axios";
import { useDataContext } from "../../context/data-context";
import "./cart.css";
import CartCard from "./CartCard";
import { useEffect } from "react";
import PriceCard from "./PriceCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useDataContext();
  const localToken = localStorage.getItem("token");
  const navigate = useNavigate();
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
    try {
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
        console.warn(" error from update cart quantity", response);
      }
    } catch (error) {
      console.warn(" error from update cart quantity", error);
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
    if (localToken) getCartProduct(localToken);
  }, []);

  const { cartQuantity, itemPrice, discountedPrice, totalPrice } =
    getCartTotalPrice(state.cartItem);

  return (
    <div>
      <div className='heading-cart'>
        {localToken ? (
          state.cartItem.length !== 0 ? (
            <h1>My Cart</h1>
          ) : (
            <div className='flex-column flex-center'>
              <h1
                className='cursor-pointer'
                onClick={() => navigate("/productListing")}>
                Add some products to see here
              </h1>
              <img
                src='https://i.pinimg.com/originals/f2/79/07/f279070acd83c478e0d00f0da39958a3.gif'
                alt=''
              />
            </div>
          )
        ) : (
          <div className='flex-column flex-center'>
            <h1 className='cursor-pointer' onClick={() => navigate("/login")}>
              Login to see Cart products
            </h1>
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/20f6fa81601861.5d041a148bd59.gif'
              alt=''
            />
          </div>
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
                      quantity={products.qty}
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
