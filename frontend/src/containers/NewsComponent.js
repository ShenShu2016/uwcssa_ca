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
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
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
  lastnews: {
    marginTop: 157,
    marginBottom: 44,
  },
});

const NewsComponent = () => {
  const news = useSelector((state) => state.allNews.news);
  console.log(news);
  const classes = useStyles();
  const renderListBigNews = news.map((news) => {
    const { id, topic, image, subject } = news;
    if (id === 1) {
      return (
        <Container>
          <Card key={id} className={classes.BigNews}>
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
    }
  });
  const renderList = news.map((news) => {
    const { id, topic, image, subject } = news;
    return (
      <Box p={1} m={(1, 2)}>
        <Card className={classes.root} key={id}>
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
          {renderListBigNews}
        </Box>
      </Container>

      <Container>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.lastnews}
        >
          the lastest news
        </Typography>

        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          {renderList}
        </Box>
      </Container>
    </Container>
  );
};
export default NewsComponent;
