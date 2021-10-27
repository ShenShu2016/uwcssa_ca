import {
  Box,
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
});

function ForumPostCommentsMain({ forumPostComment }) {
  const classes = useStyles();
  const { content, createdAt, like, unlike, owner } = forumPostComment;
  return (
    <div>
      {Object.keys(forumPostComment).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box className={classes.main}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />

          <CardContent className={classes.cardContent}>
            <Typography
              variant="body1"
              color="textSecondary"
              component="pre"
              style={{ wordWrap: "break-word" }}
            >
              {content}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
              {like.length}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {unlike.length}
            </Button>
            <Button size="small" color="primary">
              回复
            </Button>
          </CardActions>
        </Box>
      )}
    </div>
  );
}

export default ForumPostCommentsMain;
