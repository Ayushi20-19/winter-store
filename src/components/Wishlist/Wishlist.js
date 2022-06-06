import React from "react";
import axios from "axios";
import { useDataContext } from "../../context/data-context";
import "./wishlist.css";
import WishlistCard from "./WishlistCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { state, dispatch } = useDataContext();
  const localToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const getWishlistProduct = async (localToken) => {
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: localToken },
    });

    dispatch({
      type: "GET_WISHLIST",
      payload: response.data.wishlist,
    });
  };

  const removeFromWishlist = async (_id) => {
    const localToken = localStorage.getItem("token");
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: {
        authorization: localToken,
      },
    });

    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      console.warn(" error ", response);
    }
  };

  useEffect(() => {
    if (localToken) getWishlistProduct(localToken);
  }, []);

  return (
    <div>
      <div className='heading-cart'>
        {localToken ? (
          state.wishlistItem.length !== 0 ? (
            <h1>My Wishlist</h1>
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
              Login to see Wishlist products
            </h1>
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/20f6fa81601861.5d041a148bd59.gif'
              alt=''
            />
          </div>
        )}
      </div>
      <section className='wishlist-main margin-2'>
        {state.wishlistItem.length !== 0 ? (
          <>
            <div className='wishlistProduct  flex-wrap'>
              {state.wishlistItem.map((products, index) => {
                return (
                  <>
                    <WishlistCard
                      key={index}
                      id={products._id}
                      name={products.title}
                      price={products.price}
                      image={products.productImg}
                      inStock={products.inStock}
                      removeFromWishlist={removeFromWishlist}
                    />
                  </>
                );
              })}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default Wishlist;
