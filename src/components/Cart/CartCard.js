import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { setWishlistProducts } from "../Wishlist/SetWishlistProducts";
import { debounce } from "lodash";
import "./cartcard.css";

const CartCard = ({
  key,
  id,
  name,
  price,
  image,
  quantity,
  removeFromCart,
  updateCartQuantity,
}) => {
  const {
    authState: { token },
  } = useAuthContext();
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();
  const product = state.products.find((item) => item._id === id);
  const checkItemInWishlist = (id) =>
    state.wishlistItem.some((dataWishlist) => dataWishlist._id === id);
  const decCartDebounce = debounce(() => {
    updateCartQuantity(id, "decrement");
  }, 600);
  const incCartDebounce = debounce(() => {
    updateCartQuantity(id, "increment");
  }, 400);
  return (
    <div>
      <div className='mainCartWrapper' key={key}>
        <div className='imageWrapper'>
          <img src={image} alt='product img' />
        </div>
        <div className='cartContendWrapper'>
          <div className='cartContend'>
            <h1>{name}</h1>
            <h3>₹ {price}</h3>
            <button
              className='cartQuantityBtn'
              disabled={Number(quantity) <= 1 ? true : ""}
              onClick={
                Number(quantity) < 1 ? removeFromCart(id) : decCartDebounce
              }>
              -
            </button>
            {quantity}
            <button className='cartQuantityBtn ' onClick={incCartDebounce}>
              +
            </button>
          </div>
          <div className='btnWrapperEcom '>
            {checkItemInWishlist(id) ? (
              <>
                <button
                  className='btn-cart'
                  onClick={() => navigate("/wishlist")}>
                  Go To Wishlist
                </button>
              </>
            ) : (
              <>
                <button
                  className='btn-cart'
                  onClick={() => setWishlistProducts(product, token, dispatch)}>
                  Add to WishList
                </button>
              </>
            )}

            <button className='btn-cart' onClick={() => removeFromCart(id)}>
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
