import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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

const ForumPostComments = ({ forumPost }) => {
  const classes = useStyles();
  console.log(forumPost.forumPostComments);
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {Object.keys(forumPost).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div>
          {forumPost.forumPostComments.items.map((comment) => {
            const { id, content, createdAt, like, unlike, owner } = comment;

            return (
              <Box key={id} pb={1}>
                <Card className={classes.main}>
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                      ></Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={owner}
                    subheader={`发布日期： ${createdAt.slice(
                      0,
                      10
                    )} ${createdAt.slice(11, 19)}`}
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
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<ThumbUpIcon />}
                    >
                      {like.length}
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<ThumbDownIcon />}
                    >
                      {unlike.length}
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={`forumPostComment/${id}`}
                    >
                      回复
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ForumPostComments;
