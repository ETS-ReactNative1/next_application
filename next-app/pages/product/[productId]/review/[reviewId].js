import React from "react";
import { useRouter } from "next/router";
const ReviewProduct = () => {
  const {
    query: { reviewId, productId },
  } = useRouter();

  return (
    <h1>
      Details for productId {productId} reviewId = {reviewId}
    </h1>
  );
};

export default ReviewProduct;
