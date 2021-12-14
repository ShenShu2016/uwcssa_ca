import { Box, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  removeSelectedForumPost,
  selectedForumPost,
} from "../../redux/slice/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import ForumPostMain from "../../components/Forum/ForumPost/ForumPostDetail/ForumPostMain";
import ForumRightSide from "../../components/Forum/ForumRightSide";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export default function ForumPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [starter, setStarter] = useState(false);
  const { forumPostID } = useParams();
  const { forumPost } = useSelector((state) => state.forum.selected);

  useEffect(() => {
    if (forumPostID && forumPostID !== "") {
      dispatch(selectedForumPost(forumPostID));
      // dispatch(selectedForumPostComments(forumPostID));
    }
    return () => dispatch(removeSelectedForumPost());
  }, [forumPostID, dispatch]);
  useEffect(() => {
    if (
      forumPost === undefined ||
      forumPost === null ||
      forumPost.length === 0
    ) {
      setStarter(false);
    } else {
      if (
        forumPost.forumPostComments === undefined ||
        forumPost.forumSubTopic === undefined
      ) {
        setStarter(false);
      } else {
        setStarter(true);
      }
      if (forumPost.description === "not-found") {
        history.push("/not-found");
      }
    }
  }, [forumPost, history]);
  console.log(forumPost);
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        maxWidth: "100%",
        paddingInline: { xs: 0, sm: "1rem" },
        // flexDirection: { xs: "column", sm: "row" },
        bgcolor: "grey.50",
      }}
    >
      <Box
        sx={{
          mx: 2,
          width: { md: 1080, lg: 1240 },
        }}
      >
        {starter === false ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <Box>
            <ForumPostMain forumPost={forumPost} />
          </Box>
        )}
      </Box>
      <Box>
        <ForumRightSide />
      </Box>
    </Box>
  );
}
