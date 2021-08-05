export const trending = (req, res) => res.send("Trending videos");
export const see = (req, res) => {
  return res.send(`See videos: #${req.params.id}`);
}
export const edit = (req, res) => {
  return res.send(`Edit videos: #${req.params.id}`);
}
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send(`Delete videos: #${req.params.id}`);
}