const BACKEND_URL =process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchPosts = async ({ page = 1, tags = [] }) => {
  
  const query = new URLSearchParams({
    page: String(page),
    limit: "10"
  });

  const response = await fetch(
    `${BACKEND_URL}/api/post?${query.toString()}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // Handle HTTP errors manually (important!)
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const likePost = async (
  postId: string,
  type: string = "like"
) => {
  
    const response = await fetch(
      `${BACKEND_URL}/api/post/like/${postId}`,
      {
        method: "POST", 
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }), // optional (like/unlike)
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  
};


export const getcommentsByPost = async (postId: string, page: number = 1, limit:number=5) => {
    const response = await fetch(
      `${BACKEND_URL}/api/post/comments/${postId}?page=${page}&limit=${limit}`,
      {
        method: "GET", 
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}

export const addComment = async (postId: string, content: string) => {
     const response = await fetch(
      `${BACKEND_URL}/api/post/addcom/${postId}`,
      {
        method: "POST", // or PUT (depends on your backend)
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),       
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}