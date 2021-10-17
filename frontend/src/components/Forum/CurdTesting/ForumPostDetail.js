import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  removeSelectedForumPost,
  selectedForumPost,
} from "../../../redux/actions/forumAction";
import ForumPostComments from "../ForumPostDetail/ForumPostComments";
import ForumPostCommentsPost from "../ForumPostDetail/ForumPostCommentsPost";
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

const ForumPostDetail = ({ selectedForumPost }) => {
  const classes = useStyles();
  const { forumPostId } = useParams();

  useEffect(() => {
    console.log(forumPostId);
    if (forumPostId && forumPostId !== "") {
      selectedForumPost(forumPostId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forumPost = useSelector((state) => state.forumPost);
  console.log(forumPost);

  return (
    <div className={classes.root}>
      <ForumPostMain forumPost={forumPost} />
      <ForumPostComments forumPost={forumPost} />
      <ForumPostCommentsPost forumPost={forumPost} />
    </div>
  );
};
export default connect(null, { selectedForumPost, removeSelectedForumPost })(
  ForumPostDetail
);
