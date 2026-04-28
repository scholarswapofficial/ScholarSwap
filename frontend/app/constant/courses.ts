import {
  FiGrid,
  FiCompass,
  FiBookOpen,
  FiAward,
  FiCode,
  FiBarChart2,
  FiPenTool,
  FiBriefcase,
  FiVolume2, // ✅ fixed
} from "react-icons/fi";
/* =========================
   SIDEBAR
========================= */

export const COURSE_SIDEBAR = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: FiGrid,
    href: "/course",
  },
  {
    id: "explore",
    label: "Explore",
    icon: FiCompass,
    href: "/course/explore",
  },
  {
    id: "my-courses",
    label: "My Courses",
    icon: FiBookOpen,
    href: "/course/my-courses",
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: FiAward,
    href: "/course/certificates",
  },
];

/* =========================
   CATEGORIES
========================= */
export const COURSE_CATEGORIES = [
  {
    id: "programming",
    title: "Programming",
    count: 25,
    icon: FiCode,
    color: "#6366f1", // indigo
    bg: "#eef2ff",
  },
  {
    id: "data",
    title: "Data Science",
    count: 18,
    icon: FiBarChart2,
    color: "#3b82f6", // blue
    bg: "#eff6ff",
  },
  {
    id: "design",
    title: "Design",
    count: 16,
    icon: FiPenTool,
    color: "#f59e0b", // amber
    bg: "#fffbeb",
  },
  {
    id: "business",
    title: "Business",
    count: 14,
    icon: FiBriefcase,
    color: "#10b981", // green
    bg: "#ecfdf5",
  },
  {
    id: "marketing",
    title: "Marketing",
    count: 12,
    icon: FiVolume2,
    color: "#ec4899", // pink
    bg: "#fdf2f8",
  },
  {
    id: "more",
    title: "More",
    count: null,
    icon: FiGrid,
    color: "#6b7280", // gray
    bg: "#f3f4f6",
  },
];

/* =========================
   COURSES
========================= */

export const COURSES = [
  {
    id: 1,
    title: "DSA Mastery",
    instructor: "Tushar",
    price: 199,
    image: "/images/course/course1.png",
    rating: 4.8,
    students: 2100,
    category: "programming",
  },
  {
    id: 2,
    title: "Full Stack Web Dev",
    instructor: "Ananya",
    price: 299,
    image: "/images/course/course2.png",
    rating: 4.7,
    students: 3400,
    category: "programming",
  },
  {
    id: 3,
    title: "DBMS Crash Course",
    instructor: "Rahul",
    price: 149,
    image: "/images/course/course3.png",
    rating: 4.6,
    students: 1200,
    category: "data",
  },
  {
    id: 4,
    title: "Operating Systems",
    instructor: "Sneha",
    price: 179,
    image: "/images/course/course4.png",
    rating: 4.5,
    students: 900,
    category: "subjects",
  },
];