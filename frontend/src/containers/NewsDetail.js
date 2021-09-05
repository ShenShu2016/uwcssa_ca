import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedNew, removeSelectedNew } from "../redux/actions/newsActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const NewsDetail = () => {
  const classes = useStyles();
  const new12 = useSelector((state) => state.new12);
  const { topic, subject, content, image } = new12;
  const { newId } = useParams();
  const dispatch = useDispatch();
  console.log(newId);

  const fetchNewDetail = async () => {
    const response = await axios
      .get(`https://uwcssa.ca/news/article/${newId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedNew(response.data));
  };

  useEffect(() => {
    if (newId && newId !== "") fetchNewDetail();
    return () => dispatch(removeSelectedNew());
  }, [newId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>NewsDetail</h1>
      <Button variant="contained" color="primary" component={Link} to="/news">
        Back to News
      </Button>
      {Object.keys(new12).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={image}
              title={subject}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {topic}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};
export default NewsDetail;
