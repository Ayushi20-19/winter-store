const getSortedData = (state, data) => {
  //console.log(state, data);
  switch (state.sortBy) {
    case "LOW_TO_HIGH":
      return [...data].sort((a, b) => {
        return a.price - b.price;
      });

    case "HIGH_TO_LOW":
      return [...data].sort((a, b) => {
        return b.price - a.price;
      });

    default:
      return data;
  }
};
const getFilterdeData = (state, data) => {
  if (state.filters.includeOutOfStock) {
    return [...data].filter((items) => items.inStock);
  }
  return data;
  //   console.log("from filter fun -----------", state, data);
  //   switch (state) {
  //     case "INCLUDE_OUT_OF_STOCK": {
  //       // return "filter file";
  //       return [...data].filter((value) => console.log(value.inStock === true));
  //     }

  //     default:
  //       return data;
  //   }
};
export { getSortedData, getFilterdeData };
