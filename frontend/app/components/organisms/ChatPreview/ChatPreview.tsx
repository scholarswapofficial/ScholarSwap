import { chatData } from "@/constant/home/chatData";
import ChatItem from "@/components/molecules/ChatItem/ChatItem";
import styles from "@/styles/sections/home/rightpanel.module.scss";

const ChatPreview = () => {
  return (
    <div className={styles.card}>
      <h3>Chats</h3>
      {chatData.map((c) => (
        <ChatItem key={c.id} {...c} />
      ))}
    </div>
  );
};

export default ChatPreview;