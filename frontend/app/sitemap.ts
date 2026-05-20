import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.scholarswap.in/home",
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: "https://www.scholarswap.in/library",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://www.scholarswap.in/course/explore",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://www.scholarswap.in/marketplace",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://www.scholarswap.in/course",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}