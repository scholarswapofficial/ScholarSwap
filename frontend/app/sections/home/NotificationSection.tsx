"use client";

import React, { useState } from "react";
import "@/styles/sections/home/notification.scss";
import { NOTIFICATIONS, NOTIFICATION_TABS } from "@/constant/notification";
import { FiMoreVertical } from "react-icons/fi";
import { FaHeart, FaCommentDots, FaUserPlus, FaAt, FaBook } from "react-icons/fa";

const NotificationSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="notification">
      {/* Header */}
      <div className="notification__header">
        <div className="left">
          <div className="icon">🔔</div>
          <div>
            <h2>Notifications</h2>
            <p>Stay updated with what's happening in your network.</p>
          </div>
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
        {NOTIFICATIONS.map((item, index) => (
          <div key={item.id} className="notification__item">
            
            {/* Timeline line */}
            <div className="timeline">
              <span className="circle" />
              {index !== NOTIFICATIONS.length - 1 && <span className="line" />}
            </div>

            {/* Avatar */}
            <div className="avatar-wrapper">
              <img src={item.avatar} alt="user" />

              {/* Type Icon */}
              <div className={`type-icon ${item.type}`}>
                {getIcon(item.type)}
              </div>
            </div>

            {/* Content */}
            <div className="content">
              <p>
                <strong>{item.name}</strong>{" "}
                {renderText(item.type, item.message)}
              </p>
              <span className="time">{item.time}</span>
            </div>

            {/* Actions */}
            {item.type === "friend_request" && (
              <div className="actions">
                <button className="accept">Accept</button>
                <button className="decline">Decline</button>
              </div>
            )}

            {/* Menu */}
            <button className="menu">
              <FiMoreVertical />
            </button>

            {/* Unread Dot */}
            {item.unread && <div className="dot" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSection;

// Icons
function getIcon(type: string) {
  switch (type) {
    case "like":
      return <FaHeart />;
    case "comment":
      return <FaCommentDots />;
    case "mention":
      return <FaAt />;
    case "note":
      return <FaBook />;
    case "friend_request":
      return <FaUserPlus />;
    default:
      return null;
  }
}

// Text
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