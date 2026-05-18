import styles from "@/styles/sections/feed/friend.module.scss";

type FriendRequestData = {
  image: string;
  name: string;
  role: string;
  mutual: string;
};

type FriendRequestItemProps = {
  data: FriendRequestData;
};

const FriendRequestItem = ({
  data,
}: FriendRequestItemProps) => {
  return (
    <div
      className={
        styles["friend-card"]
      }
    >
      <div
        className={
          styles["friend-card__info"]
        }
      >
        <img
          src={data.image}
          alt={data.name}
        />

        <div>
          <h4>{data.name}</h4>
          <p>{data.role}</p>
          <span>{data.mutual}</span>
        </div>
      </div>

      <div
        className={
          styles["friend-card__actions"]
        }
      >
        <button
          className={
            styles["accept"]
          }
        >
          Accept
        </button>

        <button
          className={
            styles["decline"]
          }
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default FriendRequestItem;