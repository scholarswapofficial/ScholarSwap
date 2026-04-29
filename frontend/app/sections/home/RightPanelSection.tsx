import TrendingTopics from "@/components/organisms/TrendingTopics/TrendingTopics";
import UpcomingEvents from "@/components/organisms/UpcomingEvents/UpcomingEvents";
import PeopleYouMayKnow from "@/components/organisms/PeopleYouMayKnow/PeopleYouMayKnow";
import MarketplacePreview from "@/components/organisms/MarketplacePreview/MarketplacePreview";

import styles from "@/styles/sections/home/rightpanel.module.scss";

const RightPanelSection = () => {
  return (
    <div className={styles.rightpanel}>
      
      <TrendingTopics />

      <UpcomingEvents />

      <PeopleYouMayKnow />
      <MarketplacePreview /> 

    </div>
  );
};

export default RightPanelSection;