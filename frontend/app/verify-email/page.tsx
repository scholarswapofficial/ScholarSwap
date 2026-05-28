"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams, } from "next/navigation";


const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { verifyEmail } = useAuth();
  const [status, setStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  const [message, setMessage] = useState("");
  const router = useRouter();
  useEffect(() => {

    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link");
    
      return;
    }

    const runVerification = async () => {
      if (!verifyEmail) {
        setStatus("error");
        setMessage("Verification service unavailable");
        return;
      }
      try {
        await verifyEmail(token);
        setStatus("success");
      } catch (error: any) {
        setStatus("error");
        setMessage(error.message || "Verification failed");
      }finally{
         router.push("/auth"); 
      }
    };

    runVerification();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {status === "loading" && <h2>Verifying your email...</h2>}
      {status === "success" && <h2>✅ {message}</h2>}
      {status === "error" && <h2>❌ {message}</h2>}
    </div>
  );
};

export default VerifyEmailPage;