import {
  Box,
  // Button,
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import SignUpRequest from "../Auth/SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import moment from "moment";
// import { useSelector } from "react-redux";

// import LinesEllipsis from "react-lines-ellipsis";

const useStyles = makeStyles((theme) => ({
  actionArea: {
    maxWidth: 300,
    minWidth: 256,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardDetails: {
    maxWidth: 300,
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0 6px 12px 0 #757ce8",
    },
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
  root: {
    maxWidth: "110px",
    minWidth: "100px",
    padding: 0,
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#3f50b5",
    color: "#fff",
    marginBottom: "0.5rem",
    borderRadius: "0 3px 3px 0",
    background: "#FFFFFF",
    // borderLeft: `3px solid #f44336`,
    fontWeight: "bold",
    padding: "8px 16px",
    // margin: spacing(0.5),
  },
}));

const EventTag = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.tag}>{label}</Box>
    </div>
  );
};

export default function EventMain({ event }) {
  const classes = useStyles();
  const [posterURL, setPosterURL] = useState(null);
  // console.log("event", event);
  const {
    id,
    content,
    title,
    posterImgS3Key,
    location,
    startDate,
    endDate,
    topic,
  } = event;

  useEffect(() => {
    const getPoster = async () => {
      try {
        const posterAccessURL = await Storage.get(posterImgS3Key, {
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
    if (posterImgS3Key) {
      getPoster();
    } else {
      setPosterURL(
        "https://media-exp1.licdn.com/dms/image/C5603AQHwt3NgA8rYHw/profile-displayphoto-shrink_200_200/0/1616353723146?e=1640822400&v=beta&t=wzrF9eUlq7YnsTg-1cpH4LrYXm2oCCOHHHp0ac1hmgM"
      );
    }
  }, [posterImgS3Key]);

  // const userInfo = useSelector((state) => state.userAuth);

  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      key={event.title}
      sx={{ marginBottom: "1rem" }}
    >
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={`/event/${id}`}
      >
        <Card className={classes.cardDetails}>
          <Box sx={{ position: "relative" }}>
            <CardMedia component="img" height="194" image={posterURL} />
            {endDate > moment().format() ? (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <EventTag label={"ComingSoon"} />
              </Box>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <EventTag label={"InProgress"} />
              </Box>
            )}
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                时间：{startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                {startDate.slice(11, 16)}
              </Typography>
              <Box style={{ maxHeight: "30px", overflow: "hidden" }}>
                <Typography
                  variant="subtitle1"
                  style={{
                    wordBreak: "break-word",
                    overflow: "hidden",
                  }}
                  gutterBottom
                >
                  <b>{title}</b>
                </Typography>
              </Box>

              {location ? (
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  地址： {location}
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  地址： 无
                </Typography>
              )}
              {topic.name ? (
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  类别： {topic.name}
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                >
                  类别： 无
                </Typography>
              )}

              {/* 
            <Box
              style={{
                height: "40px",
                overflow: "hidden",
              }}
            >
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
            </Box> */}

              <Box sx={{ overflow: "hidden", height: "30px" }}>
                <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {content}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            {/* <CardActions>
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
        </CardActions> */}
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
