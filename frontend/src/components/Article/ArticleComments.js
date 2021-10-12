import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";

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

export default function ArticleComments({ article }) {
  const classes = useStyles();
  // console.log(article, "article");
  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle}>评论：</Typography>
      {Object.keys(article.comments).length === 0 ? (
        ""
      ) : (
        <div>
          {article.comments.map((comment) => {
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
                      component="span"
                      style={{ whiteSpace: "pre" }}
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
      {article.commentsNextToken ? (
        <Button variant="contained" size="large">
          加载更多
        </Button>
      ) : (
        <Typography variant="h5" align="center">
          已经到达底部
        </Typography>
      )}
    </div>
  );
}
