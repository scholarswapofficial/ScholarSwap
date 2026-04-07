import { libraryData } from "@/constant/home/libraryData";
import LibraryItem from "@/components/molecules/LibraryItem/LibraryItem";
import styles from "@/styles/sections/home/rightpanel.module.scss";

const LibraryPreview = () => {
  return (
    <div className={styles.card}>
      <h3>Library</h3>
      {libraryData.map((l) => (
        <LibraryItem key={l.id} {...l} />
      ))}
    </div>
  );
};

export default LibraryPreview;