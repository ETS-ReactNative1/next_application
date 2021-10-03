import React from "react";
import { useRouter } from "next/router";
const ProductDetail = () => {
  const {
    query: { productId },
  } = useRouter();

  return <h1>Details for {productId}</h1>;
};

export default ProductDetail;
