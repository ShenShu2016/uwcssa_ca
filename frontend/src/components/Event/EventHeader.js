import {
  Box,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Storage from "@aws-amplify/storage";
import { useSelector } from "react-redux";

export default function EventHeader() {
  const { event } = useSelector((state) => state.event.selected);

  const [posterURL, setPosterURL] = useState(null);

  const {
    title,
    startDate,
    endDate,
    eventStatus,
    location,
    posterImgS3Key,
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
      console.log(posterImgS3Key);
      getPoster();
    }
  }, [posterImgS3Key]);
  console.log("posterURL", posterURL);

  return (
    <Box>
      {Object.keys(event).length === 0 ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Container size="lg">
          <Container size="sm">
            <Box
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(to top, rgba(255,0,0,0) 0 70%, rgba(63, 81, 181, 1) )",
              }}
            >
              <CardMedia
                component="img"
                style={{
                  width: "auto",
                  maxHeight: "300px",
                }}
                image={posterURL}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                marginBottom: "1rem",
                bgcolor: "#FFFF",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" component="div" color="red">
                  <b>
                    {startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                    {startDate.slice(11, 16)} - {endDate.slice(11, 16)}
                  </b>
                </Typography>
                <Typography component="div" variant="h4" gutterBottom>
                  <b>{title}</b>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  gutterBottom
                >
                  {location} | {topic.name} | {eventStatus}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Container>
      )}
    </Box>
  );
}
