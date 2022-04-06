import React from "react";
import axios from "axios";
import { useDataContext } from "../../context/data-context";
import "./wishlist.css";
import WishlistCard from "./WishlistCard";
import { useEffect } from "react";

const Wishlist = () => {
  const { state, dispatch } = useDataContext();
  const localToken = localStorage.getItem("token");

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
    getWishlistProduct(localToken);
  }, []);

  return (
    <div>
      <div className='heading-cart'>
        {state.wishlistItem.length !== 0 ? (
          <h1>My Wishlist</h1>
        ) : (
          <h1>No item in Wishlist</h1>
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
