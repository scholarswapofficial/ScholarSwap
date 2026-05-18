"use client";

import { useState } from "react";
import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import FriendSection from "@/sections/libs/FriendSection/FriendSection";
import ChatSection from "@/sections/libs/ChatSection/ChatSection";

import "./messages.scss";

export default function MessagesPage() {
  // SIDEBAR
  const [collapsed, setCollapsed] =
    useState(false);

  // MOBILE SIDEBAR
  const [mobileOpen, setMobileOpen] =
    useState(false);

  // SELECTED CHAT
  const [selectedChat, setSelectedChat] =
    useState<any>(null);

  return (
    <div className="messages">
      {/* SIDEBAR */}
      <LibSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MOBILE / DESKTOP CONTENT */}
      <div className="messages__content">
        {/* FRIEND LIST */}
        <div
          className={`messages__friends ${
            selectedChat
              ? "messages__friends--hidden"
              : ""
          }`}
        >
          <FriendSection     setSelectedChat={   setSelectedChat}/>
        </div>

        {/* CHAT */}
        <div
          className={`messages__chat ${
            selectedChat
              ? "messages__chat--active"
              : ""
          }`}
        >
          <ChatSection   selectedChat={   selectedChat}
            setSelectedChat={ setSelectedChat}
          />
        </div>
      </div>
    </div>
  );
}