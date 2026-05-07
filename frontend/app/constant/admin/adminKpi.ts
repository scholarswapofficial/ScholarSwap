import {
  RiUser3Line,
  RiBookOpenLine,
  RiShoppingBag3Line,
  RiGraduationCapLine,
} from "react-icons/ri";

export const ADMIN_KPI_DATA = [
  {
    id: 1,
    title: "Total Users",
    value: "124.8K",
    growth: "+12.4%",
    icon: RiUser3Line,
    cardClass: "purple",
  },

  {
    id: 2,
    title: "Library Uploads",
    value: "18.2K",
    growth: "+8.1%",
    icon: RiBookOpenLine,
    cardClass: "blue",
  },

  {
    id: 3,
    title: "Marketplace Sales",
    value: "$48.9K",
    growth: "+18.7%",
    icon: RiShoppingBag3Line,
    cardClass: "pink",
  },

  {
    id: 4,
    title: "Course Enrollments",
    value: "9.6K",
    growth: "+15.2%",
    icon: RiGraduationCapLine,
    cardClass: "green",
  },
];