import React from "react";

const Category = ({ articles, category }) => {
  return (
    <div>
      <h1>Article list for {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          {article.title} | {article.category}
        </div>
      ))}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const {
    params: { category },
    req,
    res,
    query,
  } = context;
  console.log({ cookie: req.headers.cookie, query });
  res.setHeader("Set-Cookie", ["name=Julian"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const articles = await response.json();
  return {
    props: {
      articles,
      category,
    },
  };
}
