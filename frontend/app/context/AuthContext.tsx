"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/* -------------------------------------------------------------------------- */
/*                                   USER                                     */
/* -------------------------------------------------------------------------- */

export interface User {
  name: string | null;
  email: string | null;
  role: "user" | "admin";
  college: string | null;
  isVerified?: boolean | null;
  googleId?: string | null;
  avatar?: string | null;
}

/* -------------------------------------------------------------------------- */
/*                              CONTEXT TYPES                                 */
/* -------------------------------------------------------------------------- */

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login: (email: string, password: string) => Promise<string>;
  signup: (
    name: string,
    email: string,
    password: string,
    college: string
  ) => Promise<string>;

  verifyEmail: (token: string) => Promise<string>;
  logout: () => Promise<void>;
}

/* -------------------------------------------------------------------------- */
/*                              CREATE CONTEXT                                */
/* -------------------------------------------------------------------------- */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* -------------------------------------------------------------------------- */
/*                              AUTH PROVIDER                                 */
/* -------------------------------------------------------------------------- */

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  /* ---------------------------------------------------------------------- */
  /*                        AUTO LOGIN (VERY IMPORTANT)                      */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
          method: "GET",
          credentials: "include", // 🔥 send cookies
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                                 SIGNUP                                 */
  /* ---------------------------------------------------------------------- */

  const signup = async (
    name: string,
    email: string,
    password: string,
    college: string
  ) => {
    const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, college }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    return data.message || "Signup successful";
  };

  /* ---------------------------------------------------------------------- */
  /*                                  LOGIN                                 */
  /* ---------------------------------------------------------------------- */

  const login = async (email: string, password: string) => {
    const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include", // 🔥 IMPORTANT
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    setUser(data.user);
    router.replace("/");

    return data.message || "Login successful";
  };

  /* ---------------------------------------------------------------------- */
  /*                             VERIFY EMAIL                               */
  /* ---------------------------------------------------------------------- */

  const verifyEmail = async (token: string) => {
    const res = await fetch(
      `${BACKEND_URL}/api/auth/verify-email/${token}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Verification failed");
    }

    return data.message;
  };

  /* ---------------------------------------------------------------------- */
  /*                                 LOGOUT                                 */
  /* ---------------------------------------------------------------------- */

  const logout = async () => {
    await fetch(`${BACKEND_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include", // 🔥 required
    });

    setUser(null);
    router.replace("/auth");
  };

  /* ---------------------------------------------------------------------- */
  /*                                PROVIDER                                */
  /* ---------------------------------------------------------------------- */

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        verifyEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                                USE AUTH                                    */
/* -------------------------------------------------------------------------- */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};