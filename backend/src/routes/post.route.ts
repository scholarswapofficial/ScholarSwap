import express from "express";
import * as PostController  from "../modules/post/post.controller";
import authProtect from "../middlewares/auth.middleware";
import adminProtect from "../middlewares/admin.middleware";

const router = express.Router();

// Create Post
router.post("/", authProtect,PostController.createPostController);

// Get all posts with pagination
router.get("/", PostController.getPostsController);

// Get all user's posts
router.get("/mine", authProtect, PostController.getMyPostsController);

// Delete post (only owner)
router.delete("/:postId", authProtect, PostController.deletePostController);

// Add comment to a post
router.post("/addcom/:postId", authProtect, PostController.addCommentController);

// Delete comment (only owner)
router.delete("/delcom/:commentId", authProtect, PostController.deleteCommentController);

// Like/unlike a post (works as toggle api for like and unlike)
router.post("/like/:postId", authProtect, PostController.reactPostController);


// Admin delete any post
router.delete("/:postId/admin", authProtect, adminProtect, PostController.adminDeletePostController);

// Admin delete any comment
router.delete("/delcom/:commentId/admin", authProtect, adminProtect, PostController.adminDeleteCommentController);

//get comment of a post 
// GET /api/post/comments/:postId?page=1&limit=10
router.get("/comments/:postId", PostController.getCommentsByPost);

export default router;