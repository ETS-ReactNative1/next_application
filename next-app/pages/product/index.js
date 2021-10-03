import React from "react";
import Link from "next/link";
const ProductHome = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Product list</h1>
      <ul>
        <li>
          <Link href="/product/1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/product/2">
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href="/product/3" replace>
            <a>Product 3</a>
          </Link>
        </li>
        <li>
          <Link href="/product/4">
            <a>Product 4</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductHome;
