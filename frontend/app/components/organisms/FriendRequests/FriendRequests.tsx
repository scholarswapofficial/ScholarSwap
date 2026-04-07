import { friendsData } from "@/constant/home/friendsData";
import FriendRequestItem from "@/components/molecules/FriendRequestItem/FriendRequestItem";
import styles from "@/styles/sections/home/rightpanel.module.scss";

const FriendRequests = () => {
  return (
    <div className={styles.card}>
      <h3>Friend Requests</h3>
      {friendsData.map((f) => (
        <FriendRequestItem key={f.id} name={f.name} />
      ))}
    </div>
  );
};

export default FriendRequests;