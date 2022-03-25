import axios from "axios";

export const setCartProducts = async (product, localToken) => {
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
};
