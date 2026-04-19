import { FRIEND_REQUESTS } from "@/constant/feed/friend";
import FriendRequestItem from "@/components/molecules/FriendRequestItem/FriendRequestItem";
import styles from "@/styles/sections/feed/friend.module.scss";

const FriendRequests = () => {
  return (
    <div className={styles["friend-requests"]}>
      
      <h3>People you may know</h3>

      <div className={styles["friend-requests__grid"]}>
        {FRIEND_REQUESTS.map((user) => (
          <FriendRequestItem key={user.id} data={user} />
        ))}
      </div>

    </div>
  );
};

export default FriendRequests;