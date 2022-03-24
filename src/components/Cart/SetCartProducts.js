import axios from "axios";

export const setCartProducts = async (product, localToken) => {
  const response = await axios.post(
    "/api/user/cart",
    {
      product: {
        product,
      },
    },
    { headers: { authorization: localToken } }
  );

  return response.data;
};
