const BACKEND_URL =process.env.NEXT_PUBLIC_BACKEND_URL;

export const getMyProfile = async (token:string) => {
  
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(
      `${BACKEND_URL}/api/profile/me`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch profile");
    }

    return data;
};