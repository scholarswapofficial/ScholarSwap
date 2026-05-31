import type { Metadata } from "next";

import "@/styles/globals.scss";
import "@/styles/sections/auth/intro.module.scss";
import "@/styles/sections/auth/auth.module.scss";
import "@/styles/sections/home/layout.module.scss";
import "@/styles/sections/home/sidebar.module.scss";
import "@/styles/sections/auth/footer.module.scss";
import "@/styles/sections/home/feed.module.scss";
import "@/styles/sections/home/rightpanel.module.scss";
import ToastProvider from "./components/Toast/ToastProvider";

import { AuthProvider } from "./context/AuthContext";
import GoogleProvider from "./components/google/GoogleProvider";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scholarswap.in"),

  title: { default: "ScholarSwap", template: "%s | ScholarSwap",},

  description:
    "ScholarSwap is a student collaboration platform for books, notes, projects, courses, networking and learning.",

  keywords: [
    "student platform",
    "student social media",
    "college collaboration",
    "engineering notes",
    "student marketplace",
    "online learning",
    "books sharing",
    "student community",
  ],

  authors: [
    {
      name: "ScholarSwap",
    },
  ],

  creator: "ScholarSwap",

  publisher: "ScholarSwap",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.scholarswap.in/home",
  },

  openGraph: {
    title: "ScholarSwap",
    description:
      "Connect with students, share resources, collaborate on projects and grow together.",

    url: "https://www.scholarswap.in/home",

    siteName: "ScholarSwap",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScholarSwap",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "ScholarSwap",

    description:
      "Student collaboration and learning platform.",

    images: ["/og-image.png"],
  },

  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ScholarSwap",
    url: "https://www.scholarswap.in/home",
    description:
      "Student collaboration platform for learning, networking and resource sharing.",
  };

  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />


        <GoogleProvider>
          <AuthProvider>
            {children}
            <ToastProvider />

          </AuthProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}