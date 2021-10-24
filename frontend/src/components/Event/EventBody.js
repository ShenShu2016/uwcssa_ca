import React, { useEffect, useState } from "react";

import Storage from "@aws-amplify/storage";
import {
  Button,
  Container,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUpRequest from "../Event/SignUpRequireDialog";

export default function EventBody({ event }) {
  const userInfo = useSelector((state) => state.userAuth);
  const [posterURL, setPosterURL] = useState(null);
  const {
    title,
    startDate,
    endDate,
    eventStatus,
    location,
    content,
    poster,
    topic,
  } = event.event;

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
  console.log("posterURL", posterURL);

  return (
    <div>
      {Object.keys(event.event).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container size="lg">
          <Box sx={{ marginTop: "3rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    <b>{title}</b>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    gutterBottom
                  >
                    {startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                    {startDate.slice(11, 16)} - {endDate.slice(11, 16)} |{" "}
                    {topic.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    gutterBottom
                  >
                    {location}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                    gutterBottom
                  >
                    {eventStatus}
                  </Typography>
                </CardContent>
              </Box>

              <img src={posterURL} alt="" style={{ width: 300, height: 300 }} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CardContent>
                <Typography paragraph>{content}</Typography>
              </CardContent>
              <CardActions>
                {userInfo.isAuthenticated ? (
                  <Button size="small" component={Link} to="">
                    报名
                  </Button>
                ) : (
                  <SignUpRequest />
                )}
              </CardActions>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
}
