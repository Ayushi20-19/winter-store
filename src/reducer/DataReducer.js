// const reducer = (state, action) => {
//     console.log(state, action);
//     switch (action.type) {
//       case "LOW_TO_HIGH":
//         return {
//           ...state,
//           filterData: [...state.filterData].sort((a, b) => {
//             return a.price - b.price;
//           }),
//         };
//       case "HIGH_TO_LOW":
//         //console.log(action.payload);
//         return {
//           ...state,
//           filterData: [...state.filterData].sort((a, b) => {
//             return b.price - a.price;
//           }),
//         };
//       case "INCLUDE_OUT_OF_STOCK":
//         console.log(action.payload);
//         return {
//           ...state,
//           filterData: [...state.filterData].filter(
//             (data) => data.inStock === false
//           ),
//         };
//       case "FAST_DELIVERY":
//         console.log(action.payload);
//         return {
//           ...state,
//           filterData: [...state.filterData].filter(
//             (data) => data.fastDelivery === true
//           ),
//         };
//       default:
//         return state;
//     }
//   };
export const DataReducer = (state, { type, payload }) => {
  console.log(state, type, payload);
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, products: payload };
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

    // case 'FILTER_BY_CATEGORIES': {
    // 	return
    // }
    // case 'FILTER_BY_BRANDS': {
    // 	return
    // }

    default:
      return state;
  }
};
