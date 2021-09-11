import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

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

const NewsComComponent = () => {
  const newsComments = useSelector(
    (state) => state.allNewsComments.newsComments
  );
  const classes = useStyles();
  const renderList = newsComments.map((newsComments) => {
    const { id, comment } = newsComments;
    return (
      <Box p={1} m={1} key={id}>
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia className={classes.media} image={image} title={topic} /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"></Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                subject: {comment}
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
    <Container>
      <Container>
        <Typography component="h1" variant="h4" align="center">
          评论区
        </Typography>

        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          {renderList}
        </Box>
      </Container>
    </Container>
  );
};
export default NewsComComponent;
