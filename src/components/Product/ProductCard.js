import React from "react";
import "../Product/Css/productcard.css";
import { useDataContext } from "../../context/data-context";
import { useNavigate } from "react-router-dom";
import { setCartProducts } from "../Cart/SetCartProducts";
import { setWishlistProducts } from "../Wishlist/SetWishlistProducts";
import { useAuthContext } from "../../context/auth-context";
import { debounce } from "lodash";
import { toast } from "react-toastify";
const ProductCard = (product) => {
  const { state, dispatch } = useDataContext();
  const {
    authState: { token },
  } = useAuthContext();
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);

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
    <>
      <div className='card-wrapper' key={product.id}>
        <div className='element'>
          <img src={product.productImg} alt='product img' />
        </div>
        <div onClick={() => navigate(`/productListing/${product._id}`)}>
          <div className='content-ecard'>
            <span>{product.title}</span>
            <p>{product.description}</p>
          </div>
          <div className='btns-wrapper-ecom'>
            <span>₹{product.price}</span>
            <span>{product.stars} stars</span>
          </div>
        </div>

        {product.inStock ? null : (
          <div className='outOfStock'>Out Of Stock</div>
        )}
        <div className='overlay'>
          <button title='quick view' className='productQuickView '>
            <i className='fad fa-search iconCard'></i>
          </button>

          {checkItemInWishlist(product._id) ? (
            <>
              <button
                title='go to wishlist'
                className='productQuickView'
                onClick={() =>
                  token ? navigate("/wishlist") : navigate("/login")
                }>
                <i className='fas  fa-heart  iconCard'></i>
              </button>
            </>
          ) : (
            <>
              <button
                title='add to wishlist'
                className='productQuickView'
                onClick={wishlistDebounce}>
                <i className='far fa-heart iconCard'></i>
              </button>
            </>
          )}
          {checkItemInCart(product._id) ? (
            <>
              <button
                title='go to cart'
                className='productQuickView'
                onClick={() =>
                  token ? navigate("/cart") : navigate("/login")
                }>
                <i className='fas fa-shopping-bag iconCard'></i>
              </button>
            </>
          ) : (
            <>
              <button
                title='add to cart'
                className='productQuickView'
                onClick={cartDebounce}
                disabled={product.inStock ? "" : true}>
                <i
                  className='far fa-shopping-bag iconCard'
                  style={
                    product.inStock ? null : { cursor: "not-allowed" }
                  }></i>
              </button>
            </>
          )}

          <button
            title='open product'
            className='productQuickView'
            onClick={() => navigate(`/productListing/${product._id}`)}>
            <i className='far fa-expand-arrows iconCard'></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
