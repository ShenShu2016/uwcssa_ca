import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Avatar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    margin: "auto",
    maxWidth: "960px",
    paddingInline: "1rem",
  },
  title: {
    textAlign: "center",
  },
  paper: {
    maxWidth: "100%",
    margin: "2rem auto",
  },
  s3image: {},
});

const ArticleComponent = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const classes = useStyles();

  const renderList = articles.map((article) => {
    const {
      id,
      content,
      title,
      topic,
      type,
      imagePath,
      like,
      unlike,
      createdAt,
      // updateAt,
      owner,
    } = article;

    return (
      <Card className={classes.paper} key={id} elevation={5}>
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
        />{" "}
        <CardHeader title={title} />
        <CardActions>
          <Button size="small" color="primary">
            Type: {type.name}
          </Button>
          <Button size="small" color="primary">
            Topic: {topic.name}
          </Button>
        </CardActions>
        <CardActionArea>
          <CardContent>
            <AmplifyS3Image path={imagePath} className={classes.s3image} />
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography
            variant="body1"
            noWrap
            color="textSecondary"
            component="p"
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
            回复: {}
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`article/${id}`}
          >
            查看更多
          </Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Articles
        </Typography>
        {renderList}
      </Box>
    </Box>
  );
};
export default ArticleComponent;
