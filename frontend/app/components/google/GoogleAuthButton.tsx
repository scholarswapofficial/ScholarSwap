"use client";

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleAuthButton() {
  const handleSuccess = async (credentialResponse: any) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google-login",
        {
          token: credentialResponse.credential,
        }
      );

      // Save token
      localStorage.setItem("token", "Bearer "+res.data.token);

      console.log("User:", res.data.user);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Google Login Failed")}
    />
  );
}