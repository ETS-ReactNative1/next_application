import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product/1");
    //router.replace("/product/1");
  };
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/pre-render">
        <a>Pre render</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>PLace order</button>
      <hr />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
};

export default Home;
