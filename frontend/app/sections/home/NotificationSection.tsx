"use client";

import React, { useState } from "react";
import "@/styles/sections/home/notification.scss";
import { NOTIFICATIONS, NOTIFICATION_TABS } from "@/constant/notification";

const NotificationSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="notification">
      {/* Header */}
      <div className="notification__header">
        <div>
          <h2>Notifications</h2>
          <p>Stay updated with what's happening in your network.</p>
        </div>

        <button className="filter-btn">All Notifications ▾</button>
      </div>

      {/* Tabs */}
      <div className="notification__tabs">
        {NOTIFICATION_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.count && <span className="badge">{tab.count}</span>}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="notification__list">
        {NOTIFICATIONS.map((item) => (
          <div key={item.id} className="notification__item">
            <img src={item.avatar} alt="user" />

            <div className="content">
              <p>
                <strong>{item.name}</strong>{" "}
                {renderText(item.type, item.message)}
              </p>
              <span>{item.time}</span>
            </div>

            {/* Actions */}
            {item.type === "friend_request" && (
              <div className="actions">
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
              </div>
            )}

            {/* Unread Dot */}
            {item.unread && <div className="dot" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSection;

// helper
function renderText(type: string, message: string) {
  switch (type) {
    case "like":
      return <>liked your post<br />{message}</>;
    case "comment":
      return <>commented on your note<br />{message}</>;
    case "mention":
      return <>mentioned you in a comment<br />{message}</>;
    case "note":
      return <>shared a new note<br />{message}</>;
    case "follow":
      return <>{message}</>;
    case "friend_request":
      return <>sent you a friend request<br />{message}</>;
    default:
      return message;
  }
}