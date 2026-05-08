import {
  RiUser3Line,
  RiShieldCheckLine,
  RiUserFollowLine,
  RiUserUnfollowLine,
} from "react-icons/ri";

export const ADMIN_USER_KPI = [
  {
    id: 1,
    title: "Total Users",
    value: "124,842",
    growth: "+12.4%",
    icon: RiUser3Line,
    className: "purple",
  },

  {
    id: 2,
    title: "Verified Users",
    value: "32,689",
    growth: "+8.7%",
    icon: RiShieldCheckLine,
    className: "green",
  },

  {
    id: 3,
    title: "Active Users",
    value: "98,214",
    growth: "+15.3%",
    icon: RiUserFollowLine,
    className: "orange",
  },

  {
    id: 4,
    title: "Suspended Users",
    value: "1,939",
    growth: "-4.2%",
    icon: RiUserUnfollowLine,
    className: "red",
  },
];