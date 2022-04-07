import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useDataContext } from "../../context/data-context";
import { setCartProducts } from "../Cart/SetCartProducts";
import "./Css/singleproductcard.css";
const SingleProductCard = (product) => {
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuthContext();
  const checkItemInCart = (id) =>
    state.cartItem.some((dataCart) => dataCart._id === id);
  console.log(
    "🚀 ~ file: SingleProductCard.js ~ line 4 ~ SingleProductCard ~ product",
    product
  );

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
            <div className='margin-top-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className='margin-top-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className='btns-wrapper-ecom margin-top-3'>
              <h3>${product.price}</h3>
              <h3>{product.stars} stars rating</h3>
            </div>
            <div className='btn-sprod-wrapper margin-top-3'>
              {checkItemInCart(product._id) ? (
                <>
                  <button
                    className='btn secondary border-radius-0'
                    onClick={() =>
                      token ? navigate("/cart") : navigate("/login")
                    }>
                    Go to card
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='btn secondary border-radius-0'
                    style={product.inStock ? null : { cursor: "not-allowed" }}
                    onClick={() =>
                      token ? (
                        setCartProducts(product, token, dispatch)
                      ) : (
                        <>{(navigate("/login"), alert("LOGIN PLEASE"))}</>
                      )
                    }
                    disabled={product.inStock ? "" : true}>
                    Add to cart
                  </button>
                </>
              )}
              <button className='btn primary border-radius-0'>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductCard;
