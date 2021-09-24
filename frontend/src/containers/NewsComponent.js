import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "34.5rem",
  },
  media: {
    height: "30rem",
    width: "22rem",
  },
  BigNews: {
    justifyContent: "center",
    marginTop: "6rem",
  },
  main: {
    marginTop: "6rem",
    marginBottom: "20rem",
  },
  lastNews: {
    marginTop: "15.5rem",
    marginBottom: "4.5rem",
  },
});

const NewsComponent = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const classes = useStyles();
  const renderBigNews = articles.map((news, index) => {
    const { id, topic, image, subject } = news;
    if (index === 0) {
      return (
        <Container key={id}>
          <Card className={classes.BigNews}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title={topic}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                ></Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  subject: {subject}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                component={Link}
                to={`news/${id}`}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Container>
      );
    } else {
      return <div key={id}></div>;
    }
  });
  const renderList = articles.map((news) => {
    const { id, topic, image, subject } = news;
    return (
      <Box p={1} m={1} key={id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={topic} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"></Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                subject: {subject}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`news/${id}`}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });

  return (
    <Container className={classes.main}>
      <Container>
        <Typography component="h1" variant="h3" align="center">
          BIGGEST NEWS
        </Typography>
        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          {renderBigNews}
        </Box>
      </Container>

      <Container>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.lastNews}
        >
          The Latest News
        </Typography>

        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          {renderList}
        </Box>
      </Container>
    </Container>
  );
};
export default NewsComponent;
