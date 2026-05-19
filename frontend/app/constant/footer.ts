// constants/footer.ts

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export const footerData = {
  brand: {
    name: "ScholarSwap",
    description:
      "Empowering learners and educators by connecting knowledge, resources, and opportunities.",
  },

  exploreLinks: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],

  resourceLinks: [
    {
      label: "Help Center",
      href: "/help-center",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
    {
      label: "Terms of Service",
      href: "/terms",
    },
  ],

  socialLinks: [
    {
      icon: FaInstagram,
      href: "https://instagram.com",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
    },
  ],

  contact: {
    title: "Send your queries",
    subtitle: "Have a question or need help? We're here for you.",
    email: "scholarswap@gmail.com",
  },
};