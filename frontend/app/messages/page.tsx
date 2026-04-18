import FriendSection from "@/sections/libs/FriendSection/FriendSection";
import ChatSection from "@/sections/libs/ChatSection/ChatSection";
import "./messages.scss";

export default function MessagesPage() {
  return (
    <div className="messages">
      <FriendSection />
      <ChatSection />
    </div>
  );
}