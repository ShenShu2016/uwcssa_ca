import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import ForumPostCommentsMain from "./ForumPostCommentsMain";
import ForumPostSubComments from "./ForumPostSubComments";
import ForumPostSubCommentsPost from "./ForumPostSubCommentsPost";
import { makeStyles } from "@mui/styles";
import { selectedForumPostComment } from "../../../../redux/actions/forumAction";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});

const ForumPostCommentDetail = ({ selectedForumPostComment }) => {
  const classes = useStyles();
  const { forumPostCommentId } = useParams();

  useEffect(() => {
    console.log(forumPostCommentId);
    if (forumPostCommentId && forumPostCommentId !== "") {
      selectedForumPostComment(forumPostCommentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forumPostComment = useSelector((state) => state.forumPostComment);
  console.log(forumPostComment);

  return (
    <div className={classes.root}>
      <ForumPostCommentsMain forumPostComment={forumPostComment} />
      <ForumPostSubComments forumPostComment={forumPostComment} />
      <ForumPostSubCommentsPost forumPostComment={forumPostComment} />
    </div>
  );
};
export default connect(null, { selectedForumPostComment })(
  ForumPostCommentDetail
);
