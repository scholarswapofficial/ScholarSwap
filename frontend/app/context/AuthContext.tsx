
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

/* -------------------------------------------------------------------------- */
/*                                   USER                                     */
/* -------------------------------------------------------------------------- */

export interface User {
  name: string | null;

  email: string | null;

  role: "user" | "admin";

  college: string | null;


  isVerified?: boolean | null;

  verificationToken?: string | null;

  verificationTokenExpiry?:
    | Date
    | null;

  googleId?: string | null;

  avatar?: string | null;
}

/* -------------------------------------------------------------------------- */
/*                              CONTEXT TYPES                                 */
/* -------------------------------------------------------------------------- */

interface AuthContextType {
  user: User | null;

  login: (
    email: string,
    password: string
  ) => Promise<string | void>;

  logout: () => void;

  signup?: (
    name: string,
    email: string,
    password: string,
    college: string
  ) => Promise<string | void>;

  verifyEmail?: (
    token: string
  ) => Promise<string | void>;
}

/* -------------------------------------------------------------------------- */
/*                              CREATE CONTEXT                                */
/* -------------------------------------------------------------------------- */

const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined);

/* -------------------------------------------------------------------------- */
/*                              AUTH PROVIDER                                 */
/* -------------------------------------------------------------------------- */

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  /* ---------------------------------------------------------------------- */
  /*                                 SIGNUP                                 */
  /* ---------------------------------------------------------------------- */

  const signup = async (
    name: string,
    email: string,
    password: string,
    college: string
  ) => {
    if (
      !name ||
      !email ||
      !password ||
      !college
    ) {
      throw new Error(
        "All fields are required for signup"
      );
    }

    try {
      const res = await fetch(
        `${BACKEND_URL}/api/auth/signup`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
            college,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Sign up failed"
        );
      }

      return (
        data.message ||
        "Signup successful"
      );
    } catch (error: any) {
      console.error(
        "Sign up failed:",
        error
      );

      throw new Error(
        error.message ||
          "Sign up failed"
      );
    }
  };

  /* ---------------------------------------------------------------------- */
  /*                                  LOGIN                                 */
  /* ---------------------------------------------------------------------- */

  const login = async (
    email: string,
    password: string
  ) => {
    if (!email || !password) {
      throw new Error(
        "Email and password are required for login"
      );
    }

    try {
      const res = await fetch(
        `${BACKEND_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Login failed"
        );
      }

      setUser(data.user);

      localStorage.setItem(
        "token",
        "Bearer " + data.token
      );

      return (
        data.message ||
        "Login successful"
      );
    } catch (error: any) {
      console.error(
        "Login failed:",
        error
      );

      throw new Error(
        error.message ||
          "Login failed"
      );
    }
  };

  /* ---------------------------------------------------------------------- */
  /*                             VERIFY EMAIL                               */
  /* ---------------------------------------------------------------------- */

const verifyEmail = async (token:string) => {
     if(!token){
          throw new Error("Verification token is required");
     }
     try {
          const res = await fetch(`${BACKEND_URL}/api/auth/verify-email/${token}`, {
               method: "GET",
               headers: {
               "Content-Type": "application/json",
               },
          });  

          const data = await res.json();

          if (!res.ok) throw new Error(data.message || "Email verification failed");

          return data.message;
     }
     catch(error:any){
          console.error("Email verification failed:", error);
          throw new Error(error.message || "Email verification failed !!!");
     }

}


  /* ---------------------------------------------------------------------- */
  /*                                 LOGOUT                                 */
  /* ---------------------------------------------------------------------- */

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    setUser(null);
  };

  /* ---------------------------------------------------------------------- */
  /*                                PROVIDER                                */
  /* ---------------------------------------------------------------------- */

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        verifyEmail,
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
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};
