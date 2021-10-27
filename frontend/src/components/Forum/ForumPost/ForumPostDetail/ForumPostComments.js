import {
  Box,
  Typography,
  LinearProgress,
  // Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ForumPostCommentComponent from "./ForumPostCommentComponent";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
  },
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  cardContent: {},
  main: {},
});

const ForumPostComments = ({ comments, commentsNextToken }) => {
  const classes = useStyles();
  // console.log(forumPost.comments);
  // const sortForumPostCommentsData = forumPostCommentsData.sort((a, b) => (a.createdAt > b.createdAt) ? 1:-1).reverse();
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>

      <div>
        {comments.map((comment) => {
          return <ForumPostCommentComponent comment={comment} />
        })}
      </div>

      <Box className="moreCommentsStatus">
        {commentsNextToken ? (
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
      </Box>
    </div>
  );
};

export default ForumPostComments;
