import { Box, Stack, Paper,Typography } from "@mui/material";
import React from "react";
import ForumHomePostComponent from "./ForumHomePostComponent";

export default function ForumHomePostsLastReply({ forumPosts }) {
  // console.log(forumTopics);
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          mt: 2,
        }}
      >
        <Stack direction="column">
          <Paper variant="outlined" sx={{ padding: "1rem" }}>
            <Typography
              variant="h6"
              component="span"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                // color: "grey",
              }}
            >
              帖子速递
            </Typography>
          </Paper>
          {forumPosts.map((forumPost) => {
            return (
              <ForumHomePostComponent
                forumPost={forumPost}
                key={forumPost.id}
              />
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}
