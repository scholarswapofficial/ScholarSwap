export const feedData = [
  {
    id: 1,
    author: {
      name: "Chris Murphy",
      avatar: "/images/library/default-avatar.png",
      time: "2 hours ago",
    },
    content: {
      title: "Shared Data Structures Notes",
      description:
        "Here are my handwritten notes on Arrays, Linked Lists, Stacks and Queues.",
    },
    tags: ["DSA", "Notes"],
    media: {
      type: "image",
      url: "/notes/dsa.png",
      label: "PDF",
    },
    stats: {
      likes: 45,
      comments: 12,
      views: 120,
    },
  },

{
  id: 2,
  author: {
    name: "Sara Malik",
    avatar: "/images/library/sara.png",
    verified: false,
    time: "1 day ago",
  },
  content: {
    title: "Can someone explain DSA problem?",
    description:
      "I'm stuck on this problem. Tried multiple approaches but not getting the optimal solution. Any hints?",
  },
  tags: ["DSA"],
  media: {
    type: "image",
    url: "/notes/sara.png",
    label: "PNG",
  },
  stats: {
    likes: 23,
    comments: 19,
    views: 98,
  },
}
];