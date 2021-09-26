import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  paper: {
    maxWidth: "80%",

    margin: "2rem auto",
    padding: "2rem",
  },
  media: {
    height: "300px",
    maxWidth: "600px",
  },
  news: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "4rem",
    width: "80%",
    margin: "auto",
  },
  s3image: {},
});

const ArticleComponent = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const classes = useStyles();
  // console.log("articles", articles);

  const renderList = articles.map((article) => {
    const {
      id,
      content,
      topic,
      type,
      imagePath,
      like,
      unlike,
      // createdAt,
      // updateAt,
    } = article;

    return (
      <Card className={classes.paper} key={id}>
        <CardActions>
          <Button size="small" color="primary">
            Type: {type.name}
          </Button>
          <Button size="small" color="primary">
            Topic: {topic.name}
          </Button>
        </CardActions>
        <CardActionArea>
          {/* <CardMedia className={classes.media} image={image} title={topic} /> */}
          <AmplifyS3Image path={imagePath} className={classes.s3image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            like: {like.length}
          </Button>
          <Button size="small" color="primary">
            unlike: {unlike.length}
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
        <Box></Box>
        {renderList}
      </Box>
    </Box>
  );
};
export default ArticleComponent;
