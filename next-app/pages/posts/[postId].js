import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await fetch(url);
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const response = await fetch(url);
  const posts = await response.json();
  const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
  return {
    paths,
    fallback: false,
  };
}
