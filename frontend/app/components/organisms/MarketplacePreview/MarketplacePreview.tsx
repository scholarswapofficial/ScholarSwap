import { marketplaceData } from "@/constant/home/marketplaceData";
import NoteCard from "@/components/molecules/NoteCard/NoteCard";
import styles from "@/styles/sections/home/rightpanel.module.scss";

const MarketplacePreview = () => {
  return (
    <div className={styles.card}>
      <h3>Marketplace</h3>
      {marketplaceData.map((n) => (
        <NoteCard key={n.id} {...n} />
      ))}
    </div>
  );
};

export default MarketplacePreview;