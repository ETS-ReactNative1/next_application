import React from "react";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2>
              {product.title} - {product.price}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  console.log("generating / regeneratin productList");
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
