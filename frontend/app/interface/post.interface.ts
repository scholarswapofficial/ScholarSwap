export interface Author {
  _id: string;
  name?: string;
  avatar?: string;
}

export interface PostInterface {
  _id: string;

  author: Author | string; // depends on populate

  title: string;
  content: string;

  tags: string[];

  likesCount: number;
  commentsCount: number;

  createdAt: string;
}