import React from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/Product/SingleProductCard";
import { useDataContext } from "../context/data-context";

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    state: { products },
  } = useDataContext();
  const product = products.find((item) => item._id === productId);
  console.log(
    "🚀 ~ file: SingleProductPage.js ~ line 11 ~ SingleProductPage ~ product",
    product
  );
  console.log(
    "🚀 ~ file: SingleProductPage.js ~ line 6 ~ SingleProductPage ~ productId",
    productId
  );
  return (
    <div>
      <SingleProductCard {...product} />
    </div>
  );
};

export default SingleProductPage;
