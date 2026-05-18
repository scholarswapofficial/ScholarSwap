"use client";

import { useState } from "react";

import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";

import FriendSection from "@/sections/libs/FriendSection/FriendSection";
import ChatSection from "@/sections/libs/ChatSection/ChatSection";

import "./messages.scss";

export default function MessagesPage() {
  const [collapsed, setCollapsed] =
    useState(false);

  return (
    <div className="messages">
      <LibSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <FriendSection />

      <ChatSection />
    </div>
  );
}