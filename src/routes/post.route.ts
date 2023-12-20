import express from "express";
import { postController } from "../controllers/post.controller";

const router = express.Router();

router.route("/posts").get(postController.findAllPost);

router
  .route("/post")
  .post(postController.createPost)
  .get(postController.findPostByField);

router
  .route("/post/:id")
  .patch(postController.updatePost)
  .delete(postController.deletePost)
  .get(postController.findOnePost);

router.route("/service/:service_id/posts/related").get(postController.findAllPostRelated)

export const postRouter = router;
