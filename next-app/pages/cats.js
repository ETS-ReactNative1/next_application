import React from "react";
import Image from "next/image";
import img from "../public/1.jpg";

const Cats = () => {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="cat" width="280" height="420" />
      {["1", "2", "3"].map((path) => (
        <div key={path}>
          <Image
            src={`/${path}.jpg`}
            alt="cat"
            width="280"
            height="420"
          />
        </div>
      ))}
    </div>
  );
};

export default Cats;
