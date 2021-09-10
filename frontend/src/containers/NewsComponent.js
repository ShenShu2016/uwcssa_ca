import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: 220,
  },
  BigNews: {
    justifyContent: "center",
    marginTop: 62,
  },
  main: {
    marginTop: 62,
    marginBottom: 202,
  },
  lastNews: {
    marginTop: 157,
    marginBottom: 44,
  },
});

const NewsComponent = () => {
  const news = useSelector((state) => state.allNews.news);
  const classes = useStyles();
  const renderBigNews = news.map((news, index) => {
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
                  <br />
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
  const renderList = news.map((news) => {
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
                <br />
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
