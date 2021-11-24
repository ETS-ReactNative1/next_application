import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(``);
  const [update, setUpdate] = useState(``);

  const fetchCommnents = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    const c = data.map((d) => ({ ...d, edit: false }));
    setComments(c);
  };

  const submitComment = async () => {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data });
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log({ data });
    fetchCommnents();
  };

  const toggleComment = async (commentId) => {
    const comment = comments.find((c) => c.id === commentId);
    const newComments = comments.map((c) =>
      c.id === commentId ? { ...c, edit: !comment.edit } : { ...c, edit: false }
    );
    setComments(newComments);
    setUpdate(comment.text);
  };

  const updateComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ comment: update }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data });
    fetchCommnents();
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <hr />
      <button onClick={fetchCommnents}>Load comments</button>
      <hr />
      {comments.map((c) => (
        <div key={c.id}>
          {c.edit ? (
            <div>
              <input
                type="text"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
              />
              &emsp;
              <button onClick={() => updateComment(c.id)}>Submit</button>&emsp;
              <button onClick={() => toggleComment(c.id)}>Cancel</button>
            </div>
          ) : (
            <div>
              {c.text} &emsp;
              <button onClick={() => deleteComment(c.id)}>Delete</button>&emsp;
              <button onClick={() => toggleComment(c.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
