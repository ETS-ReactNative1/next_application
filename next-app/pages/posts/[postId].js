import React from "react";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
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
  if (!post.id) {
    return {
      notFound: true,
    };
  }
  console.log("Generating page for postId: " + post.id);
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
  // const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
  const paths = [
    { params: { postId: "1" } },
    { params: { postId: "2" } },
    { params: { postId: "3" } },
  ];
  return {
    paths,
    fallback: true,
  };
}
