import React from "react";
import comments from "../../data/comments";
/*export async function getServerSideProps(context) {
  const {
    params: { commentId },
  } = context;
  const comment = comments.find((c) => c.id === parseInt(commentId));
  console.log(comment);
  return {
    props: {
      comment,
    },
  };
}*/

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { commentId },
  } = context;
  const comment = comments.find((c) => c.id === parseInt(commentId));
  console.log(comment);
  return {
    props: {
      comment,
    },
  };
}

const CommentId = ({ comment }) => {
  return (
    <div>
      My comment id is <strong>{comment.id}</strong> and the text is:{" "}
      {comment.text}
    </div>
  );
};

export default CommentId;
