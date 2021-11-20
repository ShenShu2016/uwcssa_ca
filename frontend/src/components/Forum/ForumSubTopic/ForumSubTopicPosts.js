import { Box } from "@mui/material";
import ForumSubTopicPostComponent from "./ForumSubTopicPostComponent";
import React from "react";

export default function ForumSubTopicPosts( {posts} ) {

  console.log(posts);
  return (
    <Box sx={{
      
    }}>
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
        {posts.items.map((forumPost) => {
          return <ForumSubTopicPostComponent forumPost={forumPost} key={forumPost.id} />;
        })}
      </Box>
    </Box>
  );
}
