import express from "express";
import {
  getEdit,
  postEdit,
  watch,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/:id([0-9a-z]{24})", watch);
videosRouter.get("/:id([0-9a-z]{24})/delete", deleteVideo);
videosRouter.route("/:id([0-9a-z]{24})/edit").get(getEdit).post(postEdit);
videosRouter.route("/upload").get(getUpload).post(postUpload);

export default videosRouter;
