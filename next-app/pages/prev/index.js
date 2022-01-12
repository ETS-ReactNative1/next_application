import React from "react";

const Prev = ({ data }) => {
  return <h1 className="content">Prev: {data}</h1>;
};

export default Prev;

export async function getStaticProps(context) {
  console.log(">>>>> Get static props <<<<", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published aticles",
    },
  };
}
