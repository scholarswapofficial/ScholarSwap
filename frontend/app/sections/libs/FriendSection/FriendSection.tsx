"use client";
import { CHAT_DATA } from "@/constant/chat";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import "./FriendSection.scss";

const FriendSection = () => {
  const router = useRouter();

  return (
    <div className="friend">
      {/* Header */}
      <div className="friend__header">
        <button
          className="friend__back"
          onClick={() => router.push("/home")}
        >
          <FiArrowLeft />
          <span>Home</span>
        </button>
      </div>

      {/* Search */}
      <div className="friend__search">
        <input type="text" placeholder="Search messages..." />
      </div>

      {/* List */}
      <div className="friend__list">
        {CHAT_DATA.friends.map((friend) => (
          <div key={friend.id} className="friend__item">
            <div className="friend__avatar" />

            <div className="friend__info">
              <div className="friend__top">
                <h4>{friend.name}</h4>
                <span>{friend.time}</span>
              </div>
              <p>{friend.message}</p>
            </div>

            {friend.active && <span className="friend__active" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendSection;