import { Post, IPost } from "../../models/post.model";
import {Like} from "../../models/like.model";
import {Comment} from "../../models/comment.model";
import mongoose from "mongoose";

interface CreatePostInput {
  author: string;
  title?: string;
  content: string;
  tags?: string[];
}

export const createPost = async (data: CreatePostInput): Promise<IPost> => {
  try {
    const post = await Post.create({
      author: data.author,
      title: data.title || "",
      content: data.content,
      tags: data.tags || [],
    });

    return post;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface GetPostsInput {
  page: number;
  limit: number;
  search?: string;
  tag?: string;
}

export const getPosts = async ({
  page,
  limit,
  search,
  tag,
}: GetPostsInput) => {
  try {
    const skip = (page - 1) * limit;

    // 🔍 Build filter
    let filter: any = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    if (tag) {
      const tagsArray = tag.split(",").map(t => t.trim().toLowerCase());

      filter.tags = { $in: tagsArray };
  }
    // ⚡ Parallel queries (optimization)
    const [posts, total] = await Promise.all([
      Post.find(filter)
        .populate("author", "name avatar") // only needed fields
        .sort({ createdAt: -1 }) // latest first
        .skip(skip)
        .limit(limit)
        .lean(), // ⚡ improves performance

      Post.countDocuments(filter),
    ]);

    return {
      data: posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
      },
    };

  } catch (error: any) {
    throw new Error(error.message);
  }
};


interface GetMyPostsInput {
  userId: string;
  page: number;
  limit: number;
}

export const getMyPosts = async ({
  userId,
  page,
  limit,
}: GetMyPostsInput) => {
  try {
    const skip = (page - 1) * limit;

    // filter only current user's posts
    const filter = { author: userId };

    const [posts, total] = await Promise.all([
      Post.find(filter)
        .sort({ createdAt: -1 }) // latest first
        .skip(skip)
        .limit(limit)
        .lean(),

      Post.countDocuments(filter),
    ]);

    return {
      data: posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
      },
    };

  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface DeletePostInput {
  postId: string;
  userId: string;
}

export const deletePost = async ({ postId, userId }: DeletePostInput) => {
  try {
    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      const error: any = new Error("Invalid Post ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Find post
    const post = await Post.findById(postId);

    if (!post) {
      const error: any = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    // 🔐 Ownership check
    if (post.author.toString() !== userId.toString()) {
      const error: any = new Error("You are not authorized to delete this post");
      error.statusCode = 403;
      throw error;
    }

    // ✅ Delete post
    await Post.findByIdAndDelete(postId);

    await Promise.all([
      Like.deleteMany({ post: postId }),
      Comment.deleteMany({ post: postId }),
    ]);

    return true;

  } catch (error: any) {
    throw error;
  }
};


interface AddCommentInput {
  userId: string;
  postId: string;
  content: string;
}

// adding comment to a post
export const addComment = async ({
  userId,
  postId,
  content,
}: AddCommentInput) => {
  try {
    // ✅ Validate postId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      const error: any = new Error("Invalid Post ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      const error: any = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    // ✅ Create comment
    const comment = await Comment.create({
      user: userId,
      post: postId,
      content: content.trim(),
    });

    // ✅ Increment comment count
    await Post.findByIdAndUpdate(postId, {
      $inc: { commentsCount: 1 },
    });

    return comment;

  } catch (error: any) {
    throw error;
  }
};


interface DeleteCommentInput {
  commentId: string;
  userId: string;
}

export const deleteComment = async ({
  commentId,
  userId,
}: DeleteCommentInput) => {
  try {
    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      const error: any = new Error("Invalid Comment ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Find comment
    const comment = await Comment.findById(commentId);

    if (!comment) {
      const error: any = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }

    // 🔐 Ownership check
    if (comment.user.toString() !== userId.toString()) {
      const error: any = new Error("You are not authorized to delete this comment");
      error.statusCode = 403;
      throw error;
    }

    // ✅ Delete comment
    await Comment.findByIdAndDelete(commentId);

    // ✅ Decrement comment count in post
    await Post.findByIdAndUpdate(comment.post, {
      $inc: { commentsCount: -1 },
    });

    return true;

  } catch (error: any) {
    throw error;
  }
};


interface ReactPostInput {
  userId: string;
  postId: string;
  type: "like" | "love" | "haha" | "wow" | "sad" | "angry";
}

export const reactPost = async ({
  userId,
  postId,
  type = "like",
}: ReactPostInput) => {
  try {
    // ✅ Validate postId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      const error: any = new Error("Invalid Post ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Check post exists
    const post = await Post.findById(postId);
    if (!post) {
      const error: any = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    // 🔍 Check existing reaction
    const existing = await Like.findOne({ user: userId, post: postId });

    // 🟢 CASE 1: No reaction → CREATE
    if (!existing) {
      const newReaction = await Like.create({
        user: userId,
        post: postId,
        type,
      });

      await Post.findByIdAndUpdate(postId, {
        $inc: { likesCount: 1 },
      });

      return {
        message: "Reaction added",
        data: newReaction,
      };
    }

    // 🔴 CASE 2: Same reaction → REMOVE (toggle)
    if (existing.type === type) {
      await Like.deleteOne({ _id: existing._id });

      await Post.findByIdAndUpdate(postId, {
        $inc: { likesCount: -1 },
      });

      return {
        message: "Reaction removed",
        data: null,
      };
    }

    // 🔁 CASE 3: Different reaction → UPDATE
    existing.type = type;
    await existing.save();

    return {
      message: "Reaction updated",
      data: existing,
    };

  } catch (error: any) {
    throw error;
  }
};

// Admin delete any post
export const adminDeletePost = async (postId: string) => {
  try {
    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      const error: any = new Error("Invalid Post ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      const error: any = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    // ✅ Delete related data (IMPORTANT)
    await Promise.all([
      Like.deleteMany({ post: postId }),
      Comment.deleteMany({ post: postId }),
    ]);

    // ✅ Delete post
    await Post.findByIdAndDelete(postId);

    return true;

  } catch (error: any) {
    throw error;
  }
};

// Admin delete any comment
export const adminDeleteComment = async (commentId: string) => {
  try {
    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      const error: any = new Error("Invalid Comment ID");
      error.statusCode = 400;
      throw error;
    }

    // ✅ Find comment
    const comment = await Comment.findById(commentId);

    if (!comment) {
      const error: any = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }

    const postId = comment.post;

    // ✅ Delete comment
    await Comment.findByIdAndDelete(commentId);

    // ✅ Decrement comment count
    await Post.findByIdAndUpdate(postId, {
      $inc: { commentsCount: -1 },
    });

    return true;

  } catch (error: any) {
    throw error;
  }
};




export const fetchCommentsByPostId = async (
  postId: string,
  page: number,
  limit: number
) => {
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    throw new Error("Invalid Post ID");
  }

  const skip = (page - 1) * limit;

  // Fetch top-level comments (no parent)
  const comments = await Comment.find({
    post: postId,
    parentComment: null, // only root comments
  })
    .populate("user", "name email avatar") // customize fields
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalComments = await Comment.countDocuments({
    post: postId,
    parentComment: null,
  });

  return {
    comments,
    pagination: {
      total: totalComments,
      page,
      limit,
      totalPages: Math.ceil(totalComments / limit),
    },
  };
};