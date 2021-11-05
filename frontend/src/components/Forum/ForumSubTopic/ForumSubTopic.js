import {
  Grid,
  Skeleton,
  Breadcrumbs,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  const {forumSubTopic,posts} = useSelector((state) => state.forum.selectedForumSubTopic);
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
            <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
              <Typography variant="h5">
                {forumSubTopic.name}
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <span style={{}}>
                  <Button color="inherit" component={Link} to={`/`}>
                    UWCSSA
                  </Button>
                </span>
                <span style={{}}>
                  <Button color="inherit" component={Link} to={`/forum`}>
                    论坛
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/forumTopic/${forumSubTopic.forumTopic.id}`}
                  >
                    {forumSubTopic.forumTopic.name}
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    disabled
                    to={`/forumSubTopic/${forumSubTopic.id}`}
                  >
                    {forumSubTopic.name}
                  </Button>
                </span>
              </Breadcrumbs>
            </Box>
          )}
          {Object.keys(forumSubTopic).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumSubTopicMain
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
