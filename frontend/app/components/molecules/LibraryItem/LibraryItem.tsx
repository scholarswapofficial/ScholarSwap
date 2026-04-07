import styles from "@/styles/sections/home/rightpanel.module.scss";

const LibraryItem = ({ title }: any) => {
  return <div className={styles["library-item"]}>{title}</div>;
};

export default LibraryItem;