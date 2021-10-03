import React from "react";
import { useRouter } from "next/router";
const Docs = () => {
  const {
    query: { params = [] },
  } = useRouter();
  console.log({ params });
  if (params.length == 3) {
    return (
      <h1>
        Docs home feauture {params[0]} , concept {params[1]}, and example
        {params[2]}
      </h1>
    );
  }
  if (params.length == 2) {
    return (
      <h1>
        Docs home feauture {params[0]} , and concept {params[1]}
      </h1>
    );
  }
  if (params.length == 1) {
    return <h1>Docs home feauture {params[0]}</h1>;
  }

  return <h1>Docs home</h1>;
};

export default Docs;
