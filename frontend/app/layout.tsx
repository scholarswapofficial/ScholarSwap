"use client";

import "@/styles/globals.scss";
import "@/styles/sections/auth/intro.module.scss";  
import "@/styles/sections/auth/auth.module.scss";  
import "@/styles/sections/home/layout.module.scss";
import "@/styles/sections/home/sidebar.module.scss";  
import "@/styles/sections/home/feed.module.scss";  
import "@/styles/sections/home/rightpanel.module.scss";  

import { AuthProvider } from "./context/AuthContext";
import GoogleProvider from "./components/google/GoogleProvider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <GoogleProvider>
          <AuthProvider>{children}</AuthProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}