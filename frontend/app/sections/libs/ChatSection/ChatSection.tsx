"use client";

import { FiArrowLeft } from "react-icons/fi";
import { CHAT_DATA } from "@/constant/chat";
import "./ChatSection.scss";

type ChatSectionProps = {
  selectedChat: any;

  setSelectedChat: (
    value: any
  ) => void;
};

const ChatSection = ({
  selectedChat,
  setSelectedChat,
}: ChatSectionProps) => {
  return (
    <div className="chat">
      {/* HEADER */}
      <div className="chat__header">
        {/* MOBILE BACK */}
        <button
          className="chat__back"
          onClick={() =>
            setSelectedChat(null)
          }
        >
          <FiArrowLeft />
        </button>

        <div>
          <h3>
            {selectedChat?.name ||
              "Priya Sharma"}
          </h3>

          <span className="chat__status">
            Online
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className="chat__body">
        {CHAT_DATA.messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat__message ${
              msg.sender === "me"
                ? "chat__message--me"
                : ""
            }`}
          >
            <p>{msg.text}</p>

            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat__input">
        <input
          type="text"
          placeholder="Type a message..."
        />

        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatSection;