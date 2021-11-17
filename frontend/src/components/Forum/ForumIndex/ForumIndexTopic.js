import { Box } from "@mui/material";
import React from "react";
import ForumIndexTopicComponent from "./ForumIndexTopicComponent";

export default function ForumIndexTopic({ forumTopics }) {
  console.log(forumTopics);
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
          return <ForumIndexTopicComponent forumTopic={forumTopic} key={forumTopic.id} />;
        })}
      </Box>
    </div>
  );
}
