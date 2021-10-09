import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  removeSelectedForumPost,
  selectedForumPost,
} from "../../../redux/actions/forumAction";

import ForumPostComments from "../ForumPostDetail/ForumPostComments";
import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
import ForumPostMain from "../ForumPostDetail/ForumPostMain";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});

const ForumPostDetail = ({ selectedForumPost, removeSelectedForumPost }) => {
  const classes = useStyles();
  const { forumPostId } = useParams();

  useEffect(() => {
    console.log(forumPostId);
    if (forumPostId && forumPostId !== "") {
      selectedForumPost(forumPostId);
    }
  }, []); 

  const forumPost = useSelector((state) => state.forumPost);
  console.log(forumPost);

  return (
    <div className={classes.root}>
      <ForumPostMain forumPost={forumPost} />
      <ForumPostComments forumPost={forumPost}/>
      <ForumPostCommentsPost forumPost={forumPost}/>
    </div>
  );
};
export default connect(null, { selectedForumPost, removeSelectedForumPost })(
  ForumPostDetail
);
