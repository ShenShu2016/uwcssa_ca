import { Grid, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import {
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
  selectedForumSubTopicPosts,
  selectedForumSubTopicPostsLastReply,
} from "../../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import ForumAdSide from "../ForumAdSide";
import ForumSubTopicMain from "./ForumSubTopicMain";
import ForumSubTopicPosts from "./ForumSubTopicPosts";
import OpenIconSpeedDial from "../OpenIconSpeedDial";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

export default function ForumSubTopic() {
  const dispatch = useDispatch();
  const { forumSubTopicID } = useParams();

  // console.log(posts);
  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      dispatch(selectedForumSubTopic(forumSubTopicID));
      dispatch(selectedForumSubTopicPosts(forumSubTopicID));
      dispatch(selectedForumSubTopicPostsLastReply(forumSubTopicID));
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);
  const {
    forumSubTopic,
    // forumSubTopicPosts,
    forumSubTopicPostsLastReply,
  } = useSelector((state) => state.forum.selected);
  console.log(forumSubTopicPostsLastReply);
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          xs={11}
          sm={10}
          md={9}
          lg={9}
          xl={9}
          sx={{
            bgcolor: "grey.200",
          }}
        >
          {Object.keys(forumSubTopic).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumSubTopicMain forumSubTopic={forumSubTopic} />
          )}
          {Object.keys(forumSubTopicPostsLastReply).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumSubTopicPosts posts={forumSubTopicPostsLastReply} />
          )}
        </Grid>
        <Grid item sm={1} md={2}>
          <ForumAdSide />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid>
      </Grid>
    </Box>
  );
}
