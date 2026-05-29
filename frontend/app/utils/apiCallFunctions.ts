export const fetchPosts = async ({ page = 1, tags = [] }) => {
  const query = new URLSearchParams({
    page: String(page),
    limit: "10"
  });

  const response = await fetch(
    `http://localhost:5000/api/post?${query.toString()}`,
    {
      method: "GET",
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