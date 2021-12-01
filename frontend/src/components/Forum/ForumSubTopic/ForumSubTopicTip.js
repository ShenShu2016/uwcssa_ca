import React from "react";
import ForumSubTopicGameTip from "./ForumSubTopicTip/ForumSubTopicGameTip";
import ForumSubTopicMovieTip from "./ForumSubTopicTip/ForumSubTopicMovieTip";
export default function ForumSubTopicTip({ forumSubTopic }) {
  const id = forumSubTopic.id;
  const tip = () => {
    switch (id) {
      case "游戏":
        return <ForumSubTopicGameTip />;
      case "电影":
        return <ForumSubTopicMovieTip />;
      case "测试":
        return <ForumSubTopicGameTip />;
      default:
        return <h1>{id}none tip</h1>;
    }
  };
  return (
    <div>
      {/* {id === "游戏" ? <ForumSubTopicGameTip /> : null}
      {id === "电影" ? <ForumSubTopicMovieTip /> : null} */}
      {tip()}
    </div>
  );
}
