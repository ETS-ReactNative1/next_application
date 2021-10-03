import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
    </>
  );
};

export default Home;
