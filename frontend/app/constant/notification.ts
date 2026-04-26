// constant/notification.ts

export const NOTIFICATION_TABS = [
  { id: "all", label: "All" },
  { id: "unread", label: "Unread", count: 5 },
  { id: "mentions", label: "Mentions", count: 2 },
];

export const NOTIFICATIONS = [
  {
    id: 1,
    type: "like",
    name: "Sarah",
    message: "Great notes on DSA Trees! Helped me a lot. 👍",
    time: "2 minutes ago",
    avatar: "images/library/default-avatar.png",
    unread: true,
  },
  {
    id: 2,
    type: "comment",
    name: "Mike",
    message: "Can you share the video explanation for this?",
    time: "10 minutes ago",
    avatar: "images/library/default-avatar.png",
    unread: true,
  },
  {
    id: 3,
    type: "friend_request",
    name: "John",
    message: "You have 12 mutual connections",
    time: "1 hour ago",
    avatar: "images/library/default-avatar.png",
  },
  {
    id: 4,
    type: "mention",
    name: "Sharmila",
    message: "@You please check this out!",
    time: "3 hours ago",
    avatar: "images/library/default-avatar.png",
  },
  {
    id: 5,
    type: "note",
    name: "Soumyadeep",
    message: "Operating System - Process Scheduling",
    time: "5 hours ago",
    avatar: "images/library/default-avatar.png",
  },
  {
    id: 6,
    type: "follow",
    name: "Ananya",
    message: "started following you",
    time: "8 hours ago",
    avatar: "images/library/default-avatar.png",
  },
];