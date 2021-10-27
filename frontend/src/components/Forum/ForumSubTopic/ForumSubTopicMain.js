import {
  Box,
  LinearProgress,
  Typography,
  Skeleton,
} from "@mui/material";
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
  forumSubTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export default function ForumSubTopicMain({isLoading,forumPost, postsNextToken }) {
  const classes = useStyles();
  console.log(isLoading);
  const forumPostsData = forumPost;
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
        {isLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
          <div>
            {forumPostsData.map((forumPost) => {
             return <ForumSubTopicPostComponent forumPost={forumPost} />
            })}
          </div>
        )}
        <Box className="moreCommentsStatus">
          {postsNextToken ? (
            <Box>
              <Typography
                variant="h5"
                color="primary"
                align="center"
                sx={{ my: 3 }}
              >
                再往下翻一翻 加载更多
              </Typography>
              <LinearProgress />
            </Box>
          ) : (
            <Typography variant="h5" align="center" sx={{ my: 3 }}>
              已经到达底部
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
}
