import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import {
  removeSelectedForumPost,
  selectedForumPost,
} from "../../../redux/actions/forumAction";
import ForumPostComments from "../ForumPostDetail/ForumPostComments";
import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
import ForumAdSide from "../ForumAdSide";
import ForumPostMain from "../ForumPostDetail/ForumPostMain";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";

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
  const forumPost = useSelector((state) => state.forumPost);
  useEffect(() => {
    async function fetchData() {
        console.log(forumPostID);
        if (forumPostID && forumPostID !== "") {
         await dispatch(selectedForumPost(forumPostID));
         }
        ;
    }
    fetchData();
    return() => dispatch(removeSelectedForumPost());
  }, [forumPostID, dispatch]);

  
  console.log(forumPost);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
    { Object.keys(forumPost.forumPost).length === 0 ?(
            "Loading"
        ) : (
        <Grid item xs={11} sm={10} md={9} lg={9} xl={9}>

          <ForumPostMain forumPost={forumPost.forumPost} />
          <ForumPostComments forumPost={forumPost.forumPost} />
          <ForumPostCommentsPost forumPost={forumPost.forumPost} />
        
          </Grid>
        )}
        <Grid item sm={2} md={3}>
          <ForumAdSide />
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <OpenIconSpeedDial />
        </Grid> */}
      </Grid>
    </div>
  );
};
