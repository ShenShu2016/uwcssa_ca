import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  removeSelectedForumPost,
  selectedForumPost,
  selectedForumPostComments,
} from "../../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

// import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
import ForumAdSide from "../ForumAdSide";
import ForumPostComments from "./ForumPostDetail/ForumPostComments";
import ForumPostMain from "./ForumPostDetail/ForumPostMain";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
// import {
//   removeSelectedForumPost,
//   selectedForumPost,
//   selectedForumPostComments,
// } from "../../../redux/actions/forumAction";



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
  const { forumPostID } = useParams();
  const { forumPost, comments, commentsNextToken } = useSelector(
    (state) => state.forum.selectedForumPost
  );

  useEffect(() => {
    if (forumPostID && forumPostID !== "") {
      dispatch(selectedForumPost(forumPostID));
      dispatch(selectedForumPostComments(forumPostID));
    }
    return () => dispatch(removeSelectedForumPost());
  }, [forumPostID, dispatch]);

  console.log(forumPost);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9}>
          {Object.keys(forumPost).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
              <Typography
                variant="h4"
                className={classes.title}
                sx={{ fontWeight: 700 }}
              >
                {forumPost.title}
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
                    to={`/forumTopic/${forumPost.forumSubTopic.forumTopic.id}`}
                  >
                    {forumPost.forumSubTopic.forumTopic.name}
                  </Button>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/forumSubTopic/${forumPost.forumSubTopic.id}`}
                  >
                    {forumPost.forumSubTopic.name}
                  </Button>
                </span>
              </Breadcrumbs>
            </Box>
          )}
          {Object.keys(forumPost).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumPostMain forumPost={forumPost} />
          )}
          {Object.keys(comments).length === 0 ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <ForumPostComments
              comments={comments}
              commentsNextToken={commentsNextToken}
            />
          )}
        </Grid>

        <Grid item sm={2} md={3}>
          <ForumAdSide />
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
      </Grid>
    </div>
  );
}
