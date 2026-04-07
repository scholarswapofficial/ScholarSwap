import styles from "@/styles/sections/home/rightpanel.module.scss";

const FriendRequestItem = ({ name }: { name: string }) => {
  return (
    <div className={styles["friend-item"]}>
  <span>{name}</span>
  <div>
    <button>Accept</button>
    <button>Ignore</button>
  </div>
</div>
  );
};

export default FriendRequestItem;