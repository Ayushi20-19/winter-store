import axios from "axios";

export const setCartProducts = async (product, localToken) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      { headers: { authorization: localToken } }
    );
    if (response.status === 201) {
      return response;
    } else {
      console.warn(" error from set product", response);
    }
  } catch (error) {
    console.warn(" error from set product", error);
  }
};
