import express from "express";
import createHttpError from "http-errors";
import Handler from "./handlers.js";

const router = express.Router();

router.route("/").get(Handler.getPosts).post(Handler.createPosts);

router
  .route("/:postId")
  .get(Handler.getpostsById)
  .put(Handler.updatePostsById)
  .delete(Handler.deletePostsById);

export default router;
