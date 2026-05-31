import { Request, Response } from "express";
import * as postService from "./post.service";


export const createPostController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id; // from JWT middleware

    const { title, content, tags } = req.body;

    // Basic validation
    if (!content || !title) {
      return res.status(400).json({
        success: false,
        message: "Content and title are required",
      });
    }

    const post = await postService.createPost({
      author: userId,
      title,
      content,
      tags,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getPostsController = async (req: Request, res: Response) => {
  try {
    let { page = "1", limit = "10", search = "", tag = "" } = req.query;

    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = Math.min(parseInt(limit as string) || 10, 50); // max limit = 50

    const result = await postService.getPosts({
      page: pageNumber,
      limit: limitNumber,
      search: search as string,
      tag: tag as string,
    });

    return res.status(200).json({
      success: true,
      ...result,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



export const getMyPostsController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    let { page = "1", limit = "10" } = req.query;

    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = Math.min(parseInt(limit as string) || 10, 50);

    const result = await postService.getMyPosts({
      userId,
      page: pageNumber,
      limit: limitNumber,
    });

    return res.status(200).json({
      success: true,
      ...result,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const deletePostController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const postId = req.params.postId as string;

    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required",
      });
    }

    await postService.deletePost({
      postId,
      userId,
    });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


//adding comment controller
export const addCommentController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const postId = req.params.postId as string;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Comment content is required",
      });
    }

    const comment = await postService.addComment({
      userId,
      postId,
      content,
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: comment,
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


// deleting comment controller
export const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const commentId = req.params.commentId as string;

    if (!commentId) {
      return res.status(400).json({
        success: false,
        message: "Comment ID is required",
      });
    }

    await postService.deleteComment({
      commentId,
      userId,
    });

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



export const reactPostController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const postId = req.params.postId as string;
    const { type } = req.body; // like, love, haha...

    const result = await postService.reactPost({
      userId,
      postId,
      type,
    });

    return res.status(200).json({
      success: true,
      message: result.message,
      data: result.data,
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const adminDeletePostController = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId as string;

    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required",
      });
    }

    await postService.adminDeletePost(postId);

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully by admin",
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const adminDeleteCommentController = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId as string;

    if (!commentId) {
      return res.status(400).json({
        success: false,
        message: "Comment ID is required",
      });
    }

    await postService.adminDeleteComment(commentId);

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully by admin",
    });

  } catch (error: any) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getCommentsByPost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required",
      });
    }

    const result = await postService.fetchCommentsByPostId(
      Array.isArray(postId) ? postId[0] : postId,
      page,
      limit
    );

    return res.status(200).json({
      success: true,
      message: "Comments fetched successfully",
      ...result,
    });

  } catch (error) {
    console.error("Error fetching comments:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};