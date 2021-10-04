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
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

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
const ArticleComments = ({ article }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {Object.keys(article).length === 0 ? (
        ""
      ) : (
        <div>
          {article.ArticleComments.items.map((comment) => {
            const { id, content, createdAt, like, unlike, owner } = comment;

            return (
              <Box key={id} pb={1}>
                <Card className={classes.main}>
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                        component={Link}
                        to={`/account/profile/${owner}`}
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
                    <Button size="small" color="primary">
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
export default ArticleComments;
