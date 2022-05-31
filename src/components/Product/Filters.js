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

const getCategoryFilteredData = (state, data) => {
  let filteredData = [...data];
  if (state.filters.filterByCategories.length !== 0)
    filteredData = filteredData.filter((product) =>
      state.filters.filterByCategories.includes(product.categoryName)
    );
  return filteredData;
};
const getFilteredData = (data, OutOfStock, fastDelivery) => {
  let filteredData = [...data];
  if (OutOfStock) {
    filteredData = filteredData.filter((items) => items.inStock);
  }
  if (fastDelivery) {
    filteredData = filteredData.filter((items) => items.fastDelivery);
  }
  return filteredData;
};

const getPriceRangeData = (data, priceRange) => {
  let filteredData = [...data];
  if (priceRange > 0) {
    filteredData = filteredData.filter(
      (items) => Number(items.price) <= Number(priceRange)
    );
  }
  return filteredData;
};
export {
  getSortedData,
  getFilteredData,
  getPriceRangeData,
  getCategoryFilteredData,
};
