import {
  // Box,
  // Typography,
  // LinearProgress,
  // Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ForumPostCommentMain from "../ForumPostComment/ForumPostCommentMain";
// import ForumPostCommentComponent from "./ForumPostCommentComponent";

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

export default function ForumPostComments ({ forumPost }) {
  const classes = useStyles();
  // console.log(forumPost.forumPostComments);
  // const sortForumPostCommentsData = forumPostCommentsData.sort((a, b) => (a.createdAt > b.createdAt) ? 1:-1).reverse();
  return (
    <div className={classes.root}>
      {/* <Typography className={classes.subTitle}>评论：</Typography> */}
      {forumPost.active !== true ? (
        ""
      ) : (
        <div>
          {forumPost.forumPostComments.items.map((comment, idx) => {
            return (
              <ForumPostCommentMain
                comment={comment}
                key={idx}
                idx={idx}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
