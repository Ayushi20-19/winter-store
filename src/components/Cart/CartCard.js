import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { setWishlistProducts } from "../Wishlist/SetWishlistProducts";
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
  return (
    <div>
      <div className='mainCartWrapper' key={key}>
        <div className='imageWrapper'>
          <img src={image} alt='product img' />
        </div>
        <div className='cartContendWrapper'>
          <div className='cartContend'>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <button
              className='cartQuantityBtn'
              disabled={Number(quantity) === 1 ? true : ""}
              onClick={() => updateCartQuantity(id, "decrement")}>
              -
            </button>
            {quantity}
            <button
              className='cartQuantityBtn '
              onClick={() => updateCartQuantity(id, "increment")}>
              +
            </button>
          </div>
          <div class='btnWrapperEcom '>
            {checkItemInWishlist(id) ? (
              <>
                <button class='btn-cart' onClick={() => navigate("/wishlist")}>
                  Go To Wishlist
                </button>
              </>
            ) : (
              <>
                <button
                  class='btn-cart'
                  onClick={() => setWishlistProducts(product, token, dispatch)}>
                  Add to WishList
                </button>
              </>
            )}

            <button class='btn-cart' onClick={() => removeFromCart(id)}>
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
