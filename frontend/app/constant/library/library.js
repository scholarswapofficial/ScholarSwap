export const LIB_HEADER_DATA = {
  title: "Marketplace",

  filters: {
    college: ["IIT Bombay", "IIT Delhi", "NIT Trichy"],
    branch: ["Computer Science", "ECE", "Mechanical"],
    cgpa: ["CGPA 9-10", "CGPA 8-9", "CGPA 7-8"],
    price: ["₹5-₹10", "₹10-₹50", "₹50+"],
  },

  sortOptions: ["Top Rated", "Newest", "Price Low-High"],
};

export const LIB_TABS = [
  "Topper Notes",
  "Assignments",
  "PYQs",
  "Solutions",
];

export const LIB_CARDS = [
  {
    id: 1,
    subject: "Networking",
    title: "Computer Networks Notes",
    author: "Priya Sharma",
    cgpa: "9.8",
    college: "IIT Bombay",
    rating: 5,
    reviews: 120,
    count: "28 PDF Notes",
    price: "₹5",
  },
  {
    id: 2,
    subject: "Algorithms",
    title: "Algorithms Cheat Sheet",
    author: "Rahul Verma",
    cgpa: "9.6",
    college: "IIT Bombay",
    rating: 5,
    reviews: 95,
    count: "34 PDF Notes",
    price: "₹10",
  },
  {
    id: 3,
    subject: "DBMS",
    title: "DBMS PYQs Solutions",
    author: "Ananya Agarwal",
    cgpa: "9.7",
    college: "IIT Bombay",
    rating: 5,
    reviews: 87,
    count: "6 Solutions",
    price: "₹15",
  },
  {
    id: 4,
    subject: "OS",
    title: "OS Assignment Solutions",
    author: "Sandeep Singh",
    cgpa: "9.9",
    college: "IIT Bombay",
    rating: 5,
    reviews: 72,
    count: "8 Solutions",
    price: "₹10",
  },

  // duplicate for row 2 (for now)
  {
    id: 5,
    subject: "Networking",
    title: "Advanced CN Notes",
    author: "Amit Kumar",
    cgpa: "9.5",
    college: "IIT Delhi",
    rating: 5,
    reviews: 60,
    count: "20 PDF Notes",
    price: "₹8",
  },
  {
    id: 6,
    subject: "Algorithms",
    title: "DSA Quick Notes",
    author: "Neha Singh",
    cgpa: "9.4",
    college: "IIT Bombay",
    rating: 5,
    reviews: 45,
    count: "25 PDF Notes",
    price: "₹12",
  },
  {
    id: 7,
    subject: "DBMS",
    title: "DBMS Notes",
    author: "Rohit Sharma",
    cgpa: "9.2",
    college: "NIT Trichy",
    rating: 5,
    reviews: 30,
    count: "10 Notes",
    price: "₹7",
  },
  {
    id: 8,
    subject: "OS",
    title: "OS Notes",
    author: "Karan Mehta",
    cgpa: "9.3",
    college: "IIT Kanpur",
    rating: 5,
    reviews: 25,
    count: "12 Notes",
    price: "₹9",
  },
];


export const LIBRARY_HEADER = {
  title: "Library",
  subtitle: "India’s Academic Book Store",

  filters: {
    college: ["All Colleges", "IIT Bombay", "IIT Delhi", "NIT Trichy", "VIT"],
    department: ["All", "CSE", "ECE", "Mechanical", "Civil"],
    subject: ["All", "DBMS", "OS", "CN", "DSA", "Maths"],
    semester: ["All", "Sem 1", "Sem 2", "Sem 3", "Sem 4"],
    type: ["All", "Books", "Notes", "PYQs"],
    language: ["All", "English", "Hindi"],
    price: ["Free", "₹0-50", "₹50-100", "₹100+"],
  },

  sortOptions: ["Popular", "Highest Rated", "Price Low-High", "Newest"],
};