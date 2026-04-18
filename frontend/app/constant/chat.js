export const CHAT_DATA = {
  user: {
    name: "John Doe",
    role: "Student",
  },

  friends: [
    {
      id: 1,
      name: "Priya Sharma",
      message: "Last message hey: John...",
      time: "10:02 AM",
      active: true,
    },
    {
      id: 2,
      name: "Rahul Verma",
      message: "Sounds good! I'll meet you...",
      time: "7:05 AM",
    },
    {
      id: 3,
      name: "Ananya Singh",
      message: "Hey, I've uploaded my notes 📚",
      time: "22 min ago",
    },
    {
      id: 4,
      name: "Rohan Gupta",
      message: "Got it! Thanks for letting me know.",
      time: "Yesterday",
    },
  ],

  messages: [
    {
      id: 1,
      sender: "other",
      text: "Hey John! Do you have the DBMS textbook by chance?",
      time: "10:02 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Yes, I do. I can lend it to you.",
      time: "10:05 AM",
    },
    {
      id: 3,
      sender: "other",
      text: "That would be great! When can I pick it up?",
      time: "10:08 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "We can meet near the library this afternoon.",
      time: "10:11 AM",
    },
  ],
};