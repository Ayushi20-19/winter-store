import axios from "axios";

export const setCartProducts = async (product, localToken, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      { headers: { authorization: localToken } }
    );

    if (response.status === 201) {
      dispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    } else {
      console.warn(" error from set product", response);
    }
  } catch (error) {
    console.warn(" error from set product", error);
  }
};
