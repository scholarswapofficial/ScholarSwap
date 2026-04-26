import NotificationSection from "@/sections/home/NotificationSection";
import FeedTabs from "@/components/molecules/FeedTabs/FeedTabs";

export default function NotificationPage() {
  return (
    <div className="notification-page">
      <FeedTabs />
      <NotificationSection />
    </div>
  );
}