import {  FiBell,  FiLock,  FiShield,  FiCreditCard,  FiSliders,  FiHelpCircle,} from "react-icons/fi";

export const SETTINGS_SIDEBAR = [
  { id: "notifications", label: "Notifications", icon: FiBell },
  { id: "account", label: "Account & Security", icon: FiLock },
  { id: "privacy", label: "Privacy", icon: FiShield },
  { id: "payments", label: "Payments & Earnings", icon: FiCreditCard },
  { id: "preferences", label: "Preferences", icon: FiSliders },
  { id: "help", label: "Help & Support", icon: FiHelpCircle },
];

export const NOTIFICATION_SETTINGS = [
  {
    id: "likes",
    title: "Likes",
    desc: "When someone likes your notes",
  },
  {
    id: "comments",
    title: "Comments",
    desc: "When someone comments on your notes",
  },
  {
    id: "mentions",
    title: "Mentions",
    desc: "When someone mentions you",
  },
  {
    id: "friendRequests",
    title: "Friend Requests",
    desc: "When someone sends you a request",
  },
  {
    id: "followers",
    title: "Followers",
    desc: "When someone follows you",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    desc: "Updates about your purchases & sales",
  },
];


// Account settings fields

export const ACCOUNT_FIELDS = {
  email: {
    label: "Email Address",
    placeholder: "Enter new email",
  },
  password: {
    current: {
      label: "Current Password",
      placeholder: "Enter current password",
    },
    new: {
      label: "New Password",
      placeholder: "Enter new password",
    },
    confirm: {
      label: "Confirm Password",
      placeholder: "Confirm new password",
    },
  },
};

export const PRIVACY_SETTINGS = [
  {
    id: "profileVisibility",
    title: "Profile Visibility",
    desc: "Control who can see your profile",
  },
  {
    id: "messages",
    title: "Who Can Message You",
    desc: "Allow messages from everyone or only connections",
  },
  {
    id: "notesVisibility",
    title: "Notes Visibility",
    desc: "Control who can access your notes",
  },
  {
    id: "activityStatus",
    title: "Show Activity Status",
    desc: "Let others see when you're online",
  },
  {
    id: "tagging",
    title: "Tagging",
    desc: "Allow others to tag you in posts",
  },
];


export const PREFERENCE_SETTINGS = [
  {
    id: "autoPlayVideos",
    title: "Autoplay Videos",
    desc: "Automatically play videos in feed",
  },
  {
    id: "emailDigest",
    title: "Email Digest",
    desc: "Receive weekly summary emails",
  },
  {
    id: "recommendations",
    title: "Personalized Recommendations",
    desc: "Show content based on your activity",
  },
];

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
];

export const HELP_OPTIONS = [
  {
    id: "faq",
    title: "FAQs",
    desc: "Find answers to common questions",
    action: "View FAQs",
  },
  {
    id: "support",
    title: "Contact Support",
    desc: "Get help from our support team",
    action: "Contact",
  },
  {
    id: "report",
    title: "Report a Problem",
    desc: "Report bugs or issues",
    action: "Report",
  },
];

export const LEGAL_LINKS = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
];

export const PAYMENT_METHODS = [
  {
    id: "upi",
    title: "UPI ID",
    desc: "Receive payments directly to your UPI",
    placeholder: "Enter UPI ID",
  },
  {
    id: "bank",
    title: "Bank Account",
    desc: "Withdraw earnings to your bank",
    placeholder: "Enter account details",
  },
];

export const TRANSACTIONS = [
  {
    id: 1,
    title: "DSA Notes Purchase",
    amount: "+₹50",
    status: "completed",
    date: "Today",
  },
  {
    id: 2,
    title: "OS Notes Sale",
    amount: "+₹120",
    status: "completed",
    date: "Yesterday",
  },
];