import { marketplaceData } from "@/constant/home/marketplaceData";
import NoteCard from "@/components/molecules/NoteCard/NoteCard";
import styles from "@/styles/sections/home/rightpanel.module.scss";

const MarketplacePreview = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.card__header}>
        <div className={styles.card__title}>🛒 Marketplace</div>
        <span className={styles.card__link}>View all</span>
      </div>

      {marketplaceData.map((n) => (
        <NoteCard key={n.id} {...n} />
      ))}

    </div>
  );
};

export default MarketplacePreview;