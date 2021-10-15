import React from "react";
const Product = ({ product }) => {
  return (
    <div>
      <h1>
        {product.id} {product.title}
      </h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  console.log({ params });
  const url = `http://localhost:4000/products/${params.productId}`;
  const response = await fetch(url);
  const product = await response.json();
  if (!product.id) {
    return {
      notFound: true,
    };
  }
  console.log("Re - Generating page for productId: " + product.id);
  return {
    props: {
      product,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  //   const url = `https://jsonplaceholder.typicode.com/posts`;
  //   const response = await fetch(url);
  //   const posts = await response.json();
  // const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
  const paths = [{ params: { productId: "1" } }];
  return {
    paths,
    fallback: "blocking",
  };
}
