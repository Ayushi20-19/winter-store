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
// const getFilterdeData = (state, data) => {
//   var filterdData = [...data];
//   if (state.filters.includeOutOfStock) {
//     filterdData = [...filterdData].filter((items) => items.inStock);
//     return filterdData;
//   } else if (state.filters.fastDelivery) {
//     filterdData = [...filterdData].filter((items) => items.fastDelivery);
//     return filterdData;
//   } else {
//     return filterdData;
//   }
// var newData = [];
// const getFilterdeData = (data, includeOutOfStock, fastDelivery) => {
//   console.log("new dataaaaaaaaaaaaaaaaaaaa", newData);
//   console.log(includeOutOfStock);
//   if (includeOutOfStock) {
//     // [...newData, ...[...data].filter((items) => items.inStock)]
//     newData.push(...[...data].filter((items) => items.inStock));
//     console.log("dataaaaaaaaaaa neww,", newData);
//     return newData;
//   } else if (fastDelivery) {
//     return [...newData, ...[...data].filter((items) => items.fastDelivery)];
//   }
//   else if (fastDelivery) {
//     return [...newData, ...[...data].filter((items) => items.fastDelivery)];
//   } else {
//     return newData;
//   }
// };
const getFilterdeData = (data, includeOutOfStock, fastDelivery) => {
  var filterdData = [...data];
  if (includeOutOfStock && !fastDelivery) {
    filterdData = [...filterdData].filter((items) => items.inStock);
    return filterdData;
  } else if (fastDelivery && !includeOutOfStock) {
    filterdData = [...filterdData].filter((items) => items.fastDelivery);
    return filterdData;
  } else if (fastDelivery && includeOutOfStock) {
    filterdData = [...filterdData]
      .filter((items) => items.inStock)
      .filter((items) => items.fastDelivery);
    return filterdData;
  } else return filterdData;
};
//   console.log("from filter fun -----------", state, data);
//   switch (state) {
//     case "INCLUDE_OUT_OF_STOCK": {
//       // return "filter file";
//       return [...data].filter((value) => console.log(value.inStock === true));
//     }

//     default:
//       return data;
//   }

export { getSortedData, getFilterdeData };
