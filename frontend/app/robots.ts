import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/auth",
          "/settings",
        ],
      },
    ],

    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}