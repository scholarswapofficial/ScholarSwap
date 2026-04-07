import { feedData } from "@/constant/home/feedData";
import PostCard from "../PostCard/PostCard";

const FeedList = () => {
  return (
    <div>
      {feedData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedList;