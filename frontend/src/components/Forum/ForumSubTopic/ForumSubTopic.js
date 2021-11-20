import { Skeleton } from "@mui/material";
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
// import OpenIconSpeedDial from "../OpenIconSpeedDial";
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
        display: "flex",
        margin: "auto",
        maxWidth: "100%",
        paddingInline: { xs: 0, sm: "1rem" },
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "grey.50",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        {Object.keys(forumSubTopic).length === 0 ? (
          <Skeleton
            variant="rectangular"
            width={880}
            height={220}
            sx={{ m: 4 }}
          />
        ) : (
          <ForumSubTopicMain forumSubTopic={forumSubTopic} />
        )}
        {Object.keys(forumSubTopicPostsLastReply).length === 0 ? (
          <Skeleton
            variant="rectangular"
            width={880}
            height={118}
            sx={{ m: 5 }}
          />
        ) : (
          <ForumSubTopicPosts posts={forumSubTopicPostsLastReply} />
        )}
      </Box>
      <Box
        sx={{
          width: 220,
        }}
      >
        <ForumAdSide />
      </Box>
      {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
    </Box>
  );
}
