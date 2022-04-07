import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { setCartProducts } from "../Cart/SetCartProducts";
import "./wishlistcard.css";

const WishlistCard = ({
  id,
  name,
  price,
  image,
  removeFromWishlist,
  inStock,
}) => {
  const { state, dispatch } = useDataContext();
  const {
    authState: { token },
  } = useAuthContext();
  const navitageToCart = useNavigate();
  const product = state.products.find((item) => item._id === id);
  const checkItemInCart = (id) =>
    state.cartItem.some((dataCart) => dataCart._id === id);
  return (
    <div>
      <div className='card-wrapper margin-1'>
        <div className='element'>
          <img src={image} alt={name} />
        </div>
        <div className='content-ecard'>
          <span>{name}</span>
          <p>Description of product</p>
        </div>
        <div className='btns-wrapper-ecom'>
          <span>${price}</span>
          <span>4 stars</span>
        </div>
        <div className='btn-wrapper'>
          <button className='btn-cart' onClick={() => removeFromWishlist(id)}>
            Remove
          </button>
          {checkItemInCart(id) ? (
            <>
              <button
                className='btn-cart'
                onClick={() => navitageToCart("/cart")}>
                Go To Cart
              </button>
            </>
          ) : (
            <>
              <button
                className='btn-cart'
                disabled={inStock ? "" : true}
                style={inStock ? null : { cursor: "not-allowed" }}
                onClick={() => setCartProducts(product, token, dispatch)}>
                Add To Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
