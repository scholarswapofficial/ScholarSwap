import LibSidebar from "@/components/organisms/LibSidebar/LibSidebar";
import FriendSection from "@/sections/libs/FriendSection/FriendSection";
import ChatSection from "@/sections/libs/ChatSection/ChatSection";
import "./messages.scss";

export default function MessagesPage() {
  return (
    <div className="messages">
      <LibSidebar />
      <FriendSection />
      <ChatSection />
    </div>
  );
}