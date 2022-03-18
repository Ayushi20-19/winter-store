export const DataReducer = (state, { type, payload }) => {
  console.log(state, type, payload);
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
    case "GET_CATEGORIES":
      return { ...state, categories: payload };
    case "SORT": {
      if (payload === "HIGH_TO_LOW") return { ...state, sortBy: "HIGH_TO_LOW" };
      if (payload === "LOW_TO_HIGH") return { ...state, sortBy: "LOW_TO_HIGH" };
    }
    case "INCLUDE_OUT_OF_STOCK": {
      return {
        ...state,
        filters: { ...state.filters, includeOutOfStock: !payload },
      };
    }
    case "FAST_DELIVERY": {
      return {
        ...state,
        filters: { ...state.filters, fastDelivery: !payload },
      };
    }

    default:
      return state;
  }
};
