import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // Grid,
  // Skeleton,
  // Breadcrumbs,
  Box,
  // Button,
  Typography,
  LinearProgress,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  // loadMoreForumPostCommentSubComments,
  removeSelectedForumPostComment,
  selectedForumPostComment,
  selectedForumPostCommentSubComments,
} from "../../../../redux/actions/forumAction";
import ForumPostCommentSubComments from "./ForumPostCommentSubComments";
import ForumPostSubCommentsPost from "./ForumPostSubCommentsPost";

const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

export default function ForumPostComment({ comment }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isReplying, setIsReplying] = useState(true);
  setIsReplying(true);
  console.log(comment.id);
  const {forumPostComment, subComments, subCommentsNextToken} = useSelector((state) => state.forum.selectedForumPostComment);
  useEffect(() => {
    async function fetchData() {
      console.log(comment.id);
      if (comment.id && comment.id !== "") {
        dispatch(selectedForumPostComment(comment.id));
        dispatch(selectedForumPostCommentSubComments(comment.id));
      }
    }
    fetchData();
    return () => dispatch(removeSelectedForumPostComment);
  }, [comment.id, dispatch]);

  return (
    <div>
      <div>
        {Object.keys(forumPostComment).length === 0 ? (
          "...loading"
        ) : (
          <Box>
            <ForumPostCommentSubComments
              subComments={subComments}
              subCommentsNextToken={subCommentsNextToken}
            />
            <Box className="moreCommentsStatus">
              {subCommentsNextToken ? (
                <Box classes={classes.content}>
                  <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    sx={{ my: 3 }}
                  >
                  </Typography>
                  <LinearProgress />
                </Box>
              ) : (
                <Typography variant="h5" align="center" sx={{ my: 3 }}>
                  已经到达底部
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Box>
          {isReplying && (
            <ForumPostSubCommentsPost forumPostComment={comment} />
          )}
        </Box>
      </div>
    </div>
  );
}
