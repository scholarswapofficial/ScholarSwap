"use client";

import { CHAT_DATA } from "@/constant/chat";

import { useRouter } from "next/navigation";

import { FiArrowLeft } from "react-icons/fi";

import "./FriendSection.scss";

type FriendSectionProps = {
  setSelectedChat: (
    value: any
  ) => void;
};

const FriendSection = ({
  setSelectedChat,
}: FriendSectionProps) => {
  const router = useRouter();

  return (
    <div className="friend">
      {/* HEADER */}
      <div className="friend__header">
        <button
          className="friend__back"
          onClick={() =>
            router.push("/home")
          }
        >
          <FiArrowLeft />

          <span>Home</span>
        </button>

        <h2>Messages</h2>
      </div>

      {/* SEARCH */}
      <div className="friend__search">
        <input
          type="text"
          placeholder="Search messages..."
        />
      </div>

      {/* LIST */}
      <div className="friend__list">
        {CHAT_DATA.friends.map(
          (friend) => (
            <div
              key={friend.id}
              className="friend__item"
              onClick={() =>
                setSelectedChat(friend)
              }
            >
              <div className="friend__avatar" />

              <div className="friend__info">
                <div className="friend__top">
                  <h4>
                    {friend.name}
                  </h4>

                  <span>
                    {friend.time}
                  </span>
                </div>

                <p>
                  {friend.message}
                </p>
              </div>

              {friend.active && (
                <span className="friend__active" />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FriendSection;