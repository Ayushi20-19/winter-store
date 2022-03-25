export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };

    case "ADD_TO_CART":
      return { ...state, cartItem: payload };

    case "GET_CART":
      return { ...state, cartItem: payload };

    case "REMOVE_FROM_CART":
      return { ...state, cartItem: payload };

    case "INCREASE_ITEM_QUANTITY":
      return { ...state, cartItem: payload };

    case "DECREASE_ITEM_QUANTITY":
      return { ...state, cartItem: payload };

    case "GET_CATEGORIES":
      return { ...state, categories: payload };

    case "SORT": {
      if (payload === "HIGH_TO_LOW") return { ...state, sortBy: "HIGH_TO_LOW" };
      if (payload === "LOW_TO_HIGH") return { ...state, sortBy: "LOW_TO_HIGH" };
    }

    case "OUT_OF_STOCK":
      return {
        ...state,
        filters: { ...state.filters, OutOfStock: !payload },
      };

    case "FAST_DELIVERY":
      return {
        ...state,
        filters: { ...state.filters, fastDelivery: !payload },
      };

    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: payload,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        priceRange: "",
        sortBy: "",
        filters: {
          filterByCategories: [],
          includeOutOfStock: false,
          fastDelivery: false,
        },
      };

    default:
      return state;
  }
};
