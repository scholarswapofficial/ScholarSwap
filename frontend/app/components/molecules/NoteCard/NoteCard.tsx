import styles from "@/styles/sections/home/rightpanel.module.scss";

const NoteCard = ({ title, price }: any) => {
  return (
    <div className={styles["note-card"]}>
      <p>{title}</p>
      <span>{price}</span>
    </div>
  );
};

export default NoteCard;