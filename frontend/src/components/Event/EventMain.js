import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import SignUpRequest from "./SignUpRequireDialog";
// import LinesEllipsis from "react-lines-ellipsis";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    minWidth: "40%",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "160",
  },
  content: {
    maxHeight: "200px",
  },

  s3image: {
    width: "162px",
    height: "162px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "112px",
      height: "112px",
      marginTop: "2.5rem",
    },
  },
}));

export default function EventMain({ event }) {
  const classes = useStyles();
  const [posterURL, setPosterURL] = useState(null);
  console.log("event", event);
  const {
    id,
    content,
    title,
    poster,
    location,
    startDate,
    eventStatus,
    topic,
  } = event;

  useEffect(() => {
    const getPoster = async () => {
      try {
        const posterAccessURL = await Storage.get(poster, {
          level: "public",
          expires: 120,
          download: false,
        });
        setPosterURL(posterAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setPosterURL(null);
      }
    };
    if (poster) {
      getPoster();
    }
  }, [poster]);

  const userInfo = useSelector((state) => state.userAuth);

  return (
    <Grid item xs={12} key={event.title}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="subtitle1" variant="subtitle1">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              时间：{startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
              {startDate.slice(11, 16)} | {location}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {topic.name} | {eventStatus}
            </Typography>
            <Typography variant="subtitle1">{content}</Typography>
          </CardContent>
          <CardActions>
            {userInfo.isAuthenticated ? (
              <Button
                size="small"
                component={Link}
                to={`/event/${event.id}/eventSignUp`}
              >
                报名
              </Button>
            ) : (
              <SignUpRequest />
            )}
            <Button size="small" component={Link} to={`/event/${id}`}>
              了解更多
            </Button>
          </CardActions>
          <img src={posterURL} alt="" sx={{ width: "100%" }} />
        </div>
      </Card>
    </Grid>
  );
}
