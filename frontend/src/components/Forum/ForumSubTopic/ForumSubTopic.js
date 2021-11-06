import { Grid, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import {
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
  selectedForumSubTopicPosts,
} from "../../../redux/actions/forumAction";
import { useDispatch, useSelector } from "react-redux";
import ForumAdSide from "../ForumAdSide";
import ForumSubTopicMain from "./ForumSubTopicMain";
import OpenIconSpeedDial from "../OpenIconSpeedDial";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
const useStyles = makeStyles({
  bread: {
    marginTop: "4rem",
    marginLeft: "1rem",
  },
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});
export default function ForumSubTopic() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { forumSubTopicID } = useParams();
  const { forumSubTopic, posts } = useSelector(
    (state) => state.forum.selectedForumSubTopic
  );
  console.log(forumSubTopic);
  console.log(posts);
  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      dispatch(selectedForumSubTopic(forumSubTopicID));
      dispatch(selectedForumSubTopicPosts(forumSubTopicID));
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>
          {Object.keys(forumSubTopic).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumSubTopicMain
              forumSubTopic={forumSubTopic}
              forumPost={posts}
              // postsNextToken={forumSubTopic.postsNextToken}
            />
          )}
        </Grid>
        <Grid item sm={1} md={2}>
          <ForumAdSide />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid>
      </Grid>
    </div>
  );
}
