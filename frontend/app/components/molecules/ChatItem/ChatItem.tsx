import styles from "@/styles/sections/home/rightpanel.module.scss";

const ChatItem = ({ name, message }: any) => {
  return (
    <div className={styles["chat-item"]}>
  <strong>{name}</strong>
  <span>{message}</span>
</div>
  );
};

export default ChatItem;