import { Box } from "@mui/material";
import React from "react";
import ForumHomeTopicComponent from "./ForumHomeTopicComponent";

export default function ForumHomeTopic({ forumTopics }) {
  // console.log(forumTopics);
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          mt:2,
          // bgcolor:"red",
          gridTemplateRows: "repeat(1,1fr)",
        }}
      >
        {forumTopics.map((forumTopic) => {
          return <ForumHomeTopicComponent forumTopic={forumTopic} key={forumTopic.id} />;
        })}
      </Box>
    </div>
  );
}
