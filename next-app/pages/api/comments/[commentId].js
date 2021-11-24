import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  if (req.method == "GET") {
    res.status(200).json(comment);
  } else if (req.method == "DELETE") {
    const index = comments.findIndex((c) => c.id === comment.id);
    comments.splice(index, 1);
    res.status(200).json(comment);
  } else if (req.method == "PATCH") {
    const text = req.body.comment;
    comment.text = text;
    res.status(200).json(comment);
  }
}
