export default function handler(req, res) {
  res.setPreviewData({ user: "Julian Parra" });
  // res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
