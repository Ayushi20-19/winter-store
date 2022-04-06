import axios from "axios";

export const setWishlistProducts = async (product, localToken, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      { headers: { authorization: localToken } }
    );
    if (response.status === 201) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
    } else {
      console.warn(" error from set product", response);
    }
  } catch (error) {
    console.warn(" error from set product", error);
  }
};
