import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";
import FriendSidebar from "@/components/organisms/FriendSidebar/FriendSidebar";
import FriendRequests from "@/components/organisms/FriendRequests/FriendRequests";
import styles from "@/styles/sections/feed/friend.module.scss";

const FriendSection = () => {
  return (
    <div className={styles["friend-layout"]}>
      
      {/* Top Navigation */}
      <FeedTabs />

      <div className={styles["friend-content"]}>
        
        {/* Left Sidebar */}
        <FriendSidebar />

        {/* Right Content */}
        <FriendRequests />

      </div>

    </div>
  );
};

export default FriendSection;