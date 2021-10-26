import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import SignUpRequest from "./SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
// import LinesEllipsis from "react-lines-ellipsis";

const useStyles = makeStyles((theme) => ({
  cardDetails: {
    maxWidth: 345,
  },
  cardMedia: {
    display: "block",
    marginLeft: "auto",
    marginRight: " auto",
    width: "50%",
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
    <Grid item xs={2} sm={4} md={4} key={event.title}>
      <Card className={classes.cardDetails}>
        <CardActionArea component={Link} to={`/event/${id}`}>
          <CardMedia component="img" height="194" image={posterURL} />
          <CardContent>
            <Typography variant="subtitle2">
              时间：{startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
              {startDate.slice(11, 16)}
            </Typography>
            <Typography variant="subtitle2" color="primary">
              {eventStatus}
            </Typography>
            <Box style={{ maxHeight: "30px", overflow: "hidden" }}>
              <Typography
                variant="subtitle1"
                style={{
                  wordBreak: "break-word",
                  overflow: "hidden",
                }}
              >
                <b>{title}</b>
              </Typography>
            </Box>

            <Typography variant="subtitle2" color="textSecondary">
              地址： {location}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              类别： {topic.name}
            </Typography>

            <Box style={{ maxHeight: "40px", overflow: "hidden" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  wordBreak: "break-word",
                  overflow: "hidden",
                }}
              >
                {content}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
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
        </CardActions>
      </Card>
    </Grid>
  );
}
