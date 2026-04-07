import FriendRequests from "@/components/organisms/FriendRequests/FriendRequests";
import ChatPreview from "@/components/organisms/ChatPreview/ChatPreview";
import MarketplacePreview from "@/components/organisms/MarketplacePreview/MarketplacePreview";
import LibraryPreview from "@/components/organisms/LibraryPreview/LibraryPreview";

import styles from "@/styles/sections/home/rightpanel.module.scss";

const RightPanelSection = () => {
  return (
    <div className={styles.rightpanel}>
      <FriendRequests />
      <ChatPreview />
      <MarketplacePreview />
      <LibraryPreview />
    </div>
  );
};

export default RightPanelSection;