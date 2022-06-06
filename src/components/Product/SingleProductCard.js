import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { setCartProducts } from "../Cart/SetCartProducts";
import { setWishlistProducts } from "../Wishlist/SetWishlistProducts";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import "./Css/singleproductcard.css";
const SingleProductCard = (product) => {
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  const {
    authState: { token },
  } = useAuthContext();
  const checkItemInCart = (id) =>
    state.cartItem.some((dataCart) => dataCart._id === id);
  const checkItemInWishlist = (id) =>
    state.wishlistItem.some((dataWishlist) => dataWishlist._id === id);
  const cartDebounce = debounce(() => {
    token
      ? (cartBtnHandler(product), notify(`"${product.title}" added to cart`))
      : (notify("You need to Login in first"), navigate("/login"));
  }, 400);
  const wishlistDebounce = debounce(
    () =>
      token
        ? (wishlistBtnHandler(product),
          notify(`"${product.title}" added to wishlist`))
        : (notify("You neeed to Login in first"), navigate("/login")),
    400
  );
  const cartBtnHandler = (product) => {
    if (token) {
      setCartProducts(product, token, dispatch);
    }
  };
  const wishlistBtnHandler = (product) => {
    if (token) {
      setWishlistProducts(product, token, dispatch);
    }
  };
  return (
    <div>
      <section className='margin-top-2'>
        <div className='flex sprod-dis'>
          <div className='sprod-img'>
            <img src={product.productImg} alt='product img' />
          </div>
          <div className='margin-4 margin-left-0 spod-content'>
            <div>
              <h1>{product.title}</h1>
            </div>
            <div className='margin-top-1'>{product.longDescription}</div>

            <div className='btns-wrapper-ecom margin-top-3'>
              <h3>₹{product.price}</h3>
              <h3>{product.stars} stars rating</h3>
            </div>
            <div className='btn-sprod-wrapper margin-top-3'>
              {checkItemInWishlist(product._id) ? (
                <>
                  <button
                    className='btn secondary border-radius-0'
                    onClick={() =>
                      token ? navigate("/wishlist") : navigate("/login")
                    }>
                    Go to Wishlist
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='btn secondary border-radius-0'
                    onClick={wishlistDebounce}>
                    Add to Wishlist
                  </button>
                </>
              )}
              {checkItemInCart(product._id) ? (
                <>
                  <button
                    className='btn primary  border-radius-0'
                    onClick={() =>
                      token ? navigate("/cart") : navigate("/login")
                    }>
                    Go to cart
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='btn primary border-radius-0'
                    style={product.inStock ? null : { cursor: "not-allowed" }}
                    onClick={cartDebounce}
                    disabled={product.inStock ? "" : true}>
                    Add to cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductCard;
