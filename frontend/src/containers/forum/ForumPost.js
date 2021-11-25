import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState  } from "react";
import {
  removeSelectedForumPost,
  selectedForumPost,
} from "../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import ForumRightSide from "../../components/Forum/ForumRightSide";
import ForumPostComments from "../../components/Forum/ForumPost/ForumPostDetail/ForumPostComments";
import ForumPostMain from "../../components/Forum/ForumPost/ForumPostDetail/ForumPostMain";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});

export default function ForumPost() {
  const classes = useStyles();
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
      if (forumPost.forumPostComments === undefined || forumPost.forumSubTopic === undefined) {
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
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9}>
          {starter === false ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Box>
              <ForumPostMain forumPost={forumPost} />
              <ForumPostComments forumPost={forumPost} />
            </Box>
          )}
        </Grid>
        <Grid item md={1}>
          {/* 你在这做啥，好多红 */}
          <Box>{"  "}</Box>
        </Grid>
        <Grid item md={2}>
          <ForumRightSide />
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
      </Grid>
    </div>
  );
}
