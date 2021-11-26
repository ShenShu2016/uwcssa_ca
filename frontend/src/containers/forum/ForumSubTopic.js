import React, { useEffect, useState } from "react";
import {
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
  // selectedForumSubTopicPosts,
  selectedForumSubTopicPostsLastReply,
} from "../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Box } from "@mui/system";
import ForumRightSide from "../../components/Forum/ForumRightSide";
import ForumSubTopicMain from "../../components/Forum/ForumSubTopic/ForumSubTopicMain";
import ForumSubTopicPosts from "../../components/Forum/ForumSubTopic/ForumSubTopicPosts";
import { Skeleton } from "@mui/material";
// import OpenIconSpeedDial from "../OpenIconSpeedDial";
import { useParams } from "react-router-dom";

export default function ForumSubTopic() {
  const dispatch = useDispatch();
  const { forumSubTopicID } = useParams();
  const history = useHistory();
  const [starter, setStarter] = useState(false);
  // console.log(posts);
  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      dispatch(selectedForumSubTopic(forumSubTopicID));
      // dispatch(selectedForumSubTopicPosts(forumSubTopicID));
      dispatch(selectedForumSubTopicPostsLastReply(forumSubTopicID));
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);
  const {
    forumSubTopic,
    // forumSubTopicPosts,
    forumSubTopicPostsLastReply,
  } = useSelector((state) => state.forum.selected);
  useEffect(() => {
    if (
      forumSubTopic === undefined ||
      forumSubTopic === null ||
      forumSubTopic.length === 0
    ) {
      setStarter(false);
    } else {
      if (forumSubTopic.forumTopic === undefined || forumSubTopicPostsLastReply.items === undefined) {
        setStarter(false);
      } else {
        setStarter(true);
      }

      if (forumSubTopic.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [forumSubTopic,forumSubTopicPostsLastReply, history]);
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
        {starter === false ? (
          <Skeleton
            variant="rectangular"
            width={880}
            height={220}
            sx={{ m: 4 }}
          />
        ) : (
          <ForumSubTopicMain forumSubTopic={forumSubTopic} />
        )}
        {starter === false  ? (
          <Skeleton
            variant="rectangular"
            width={880}
            height={118}
            sx={{ m: 5 }}
          />
        ) : (
          <ForumSubTopicPosts forumSubTopic={forumSubTopic} posts={forumSubTopicPostsLastReply} />
        )}
      </Box>
      <Box
        sx={
          {
            // width: 220,
          }
        }
      >
        <ForumRightSide />
      </Box>
      {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
    </Box>
  );
}
