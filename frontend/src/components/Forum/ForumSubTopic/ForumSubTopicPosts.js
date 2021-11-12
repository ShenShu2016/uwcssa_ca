import { Box } from "@mui/material";
import ForumSubTopicPostComponent from "./ForumSubTopicPostComponent";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    //   justifyContent: "center",
  },
}));
export default function ForumSubTopicPosts( {posts} ) {
  const classes = useStyles();
  console.log(posts);
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
        {posts.items.map((forumPost) => {
          return <ForumSubTopicPostComponent forumPost={forumPost} />;
        })}
      </Box>
    </div>
  );
}
