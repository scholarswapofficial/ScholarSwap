"use client";
import { CHAT_DATA } from "@/constant/chat";
import "./ChatSection.scss";

const ChatSection = () => {
  return (
    <div className="chat">
      {/* Header */}
      <div className="chat__header">
        <h3>Priya Sharma</h3>
        <span className="chat__status">Online</span>
      </div>

      {/* Messages */}
      <div className="chat__body">
        {CHAT_DATA.messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat__message ${
              msg.sender === "me" ? "chat__message--me" : ""
            }`}
          >
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat__input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatSection;