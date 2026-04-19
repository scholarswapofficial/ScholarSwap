import { FRIEND_SIDEBAR } from "@/constant/feed/friend";
import FriendSidebarItem from "@/components/molecules/FriendSidebarItem/FriendSidebarItem";
import styles from "@/styles/sections/feed/friend.module.scss";

const FriendSidebar = () => {
  return (
    <div className={styles["friend-sidebar"]}>
      
      {/* MENU */}
      <div className={styles["friend-sidebar__menu"]}>
        {FRIEND_SIDEBAR.map((item, index) => (
          <FriendSidebarItem
            key={item.id}
            item={item}
            active={index === 0}
          />
        ))}
      </div>

      {/* AD */}
      <div className={styles["friend-ad"]}>
        <h4>Sponsored</h4>
        <div className={styles["friend-ad__content"]}>
          <p>Easy online shopping</p>
          <span>Save big on items across categories</span>
          <button>Shop Now</button>
        </div>
      </div>

    </div>
  );
};

export default FriendSidebar;