import {
  Box,
  Grid,
  Skeleton,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  removeSelectedForumPost,
  selectedForumPost,
  // selectedForumPostComments,
} from "../../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

// import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
import ForumAdSide from "../ForumAdSide";
import ForumPostComments from "./ForumPostDetail/ForumPostComments";
import ForumPostMain from "./ForumPostDetail/ForumPostMain";
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
  const { forumPost} = useSelector((state) => state.forum.selected);

  useEffect(() => {
    if (forumPostID && forumPostID !== "") {
      dispatch(selectedForumPost(forumPostID));
      // dispatch(selectedForumPostComments(forumPostID));
    }
    return () => dispatch(removeSelectedForumPost());
  }, [forumPostID, dispatch]);

  console.log(forumPost);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={10} md={9}>
          {forumPost.active !== true? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Box>
            <ForumPostMain forumPost={forumPost} />
            <ForumPostComments forumPost={forumPost}/>
            </Box>
          )}
        </Grid>
        <Grid item sm={0} md={1}>
         <Box>
         {"  "}
         </Box>
        </Grid>
        <Grid item xs={0} sm={1.5} md={2}>
          <ForumAdSide />
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
      </Grid>
    </div>
  );
}
