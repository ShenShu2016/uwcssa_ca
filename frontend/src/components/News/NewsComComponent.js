import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { red } from "@material-ui/core/colors";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
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
  comment: {
    marginTop: "6.6rem",
  },
  avatar: {
    backgroundColor: red[500],
  },
  addIcon: {
    marginTop: "2.3rem",
    // marginLeft: "68rem",
    // marginRight: "30rem",
  },
});

const NewsComComponent = () => {
  const newsComments = useSelector(
    (state) => state.allNewsComments.newsComments
  );
  const classes = useStyles();
  const renderList = newsComments.map((newsComments) => {
    const { id, comment, created_by, created_at } = newsComments;
    //Time formatting
    let timeString = Object.values({ created_at });
    const timeString1 = timeString.toString();
    const finaltimeCom = timeString1.split(".")[0];

    return (
      <Box p={1} m={1} key={id} className={classes.root}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                Z
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={created_by}
            subheader={finaltimeCom}
          />
          <CardActionArea>
            {/* <CardMedia className={classes.media} image={image} title={topic} /> */}
            <CardContent>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {comment}
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              回复
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`news/${id}`}
            >
              点赞
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });

  return (
    <Container className={classes.comment}>
      <Typography component="h1" variant="body1" align="left">
        评论区
      </Typography>

      <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
        {renderList}
      </Box>
      <Box className={classes.addIcon} display="flex" justifyContent="flex-end">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Container>
  );
};
export default NewsComComponent;
