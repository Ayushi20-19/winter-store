const getSortedData = (state, data) => {
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

const getFilteredData = (data, includeOutOfStock, fastDelivery) => {
  var filteredData = [...data];
  if (includeOutOfStock && !fastDelivery) {
    filteredData = [...filteredData].filter((items) => items.inStock);
  } else if (fastDelivery && !includeOutOfStock) {
    filteredData = [...filteredData].filter((items) => items.fastDelivery);
  } else if (fastDelivery && includeOutOfStock) {
    filteredData = [...filteredData]
      .filter((items) => items.inStock)
      .filter((items) => items.fastDelivery);
  }
  return filteredData;
};

export { getSortedData, getFilteredData };
