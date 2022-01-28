import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comment from "./Comment";
import { Typography } from "@mui/material";
import { insertSubComments } from "../../../redux/slice/subCommentSlice";
import { makeStyles } from "@mui/styles";
import { selectAllComments } from "../../../redux/slice/commentSlice";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  moreCommentsStatus: {
    width: "100%",
    margin: "auto",
  },
});

export default function Comments() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { insertCommentsStatus } = useSelector((state) => state.comment);
  const comments = useSelector(selectAllComments);
  const { insertSubCommentsStatus } = useSelector((state) => state.subComment);

  useEffect(() => {
    if (
      comments &&
      insertCommentsStatus === "succeeded" &&
      insertSubCommentsStatus === "idle"
    ) {
      let tempSubComments = [];
      comments.map((comment, idx) => {
        //console.log("comment", comment);
        return (tempSubComments = [
          ...comment.subComments.items,
          ...tempSubComments,
        ]);
      });
      dispatch(insertSubComments(tempSubComments));
      console.log("tempSubComments", tempSubComments);
    }
  }, [comments, dispatch, insertSubCommentsStatus, insertCommentsStatus]);

  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      <div>
        {comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
        {/* <CustomAlert /> */}
      </div>

      {/* <Box className="moreCommentsStatus">
        {article.articleComments.commentsNextToken ? (
          <Box>
            <Typography
              variant="h5"
              color="primary"
              align="center"
              sx={{ my: 3 }}
            >
              再往下翻一翻 加载更多
            </Typography>
            <LinearProgress />
          </Box>
        ) : (
          <Typography variant="h5" align="center" sx={{ my: 3 }}>
            已经到达底部
          </Typography>
        )}
      </Box> */}
    </div>
  );
}
