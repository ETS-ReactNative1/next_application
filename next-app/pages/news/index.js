import React from "react";

const NewsList = ({ articles }) => {
  return (
    <div>
      <h1>List of new articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          {article.title} | {article.category}
        </div>
      ))}
    </div>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
}
