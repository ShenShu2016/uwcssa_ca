import {
  Box,
  Button,
  CardActions,
  CardMedia,
  CircularProgress,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import EventComments from "./EventDetail/Comment/EventComments";
import EventCommentsPost from "./EventDetail/Comment/EventCommentsPost";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpRequest from "../Auth/SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      {/* 为什么这里要加上typography？？？？ */}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EventBody({ event }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const userInfo = useSelector((state) => state.userAuth);
  const [posterURL, setPosterURL] = useState(null);

  const {
    title,
    startDate,
    endDate,
    eventStatus,
    location,
    content,
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
      // console.log(posterImgS3Key);
      getPoster();
    }
  }, [posterImgS3Key]);
  // console.log("posterURL", posterURL);
  // console.log("event", event);
  return (
    <Box>
      {event.startDate ? (
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
                  {title}
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
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="活动详情" {...a11yProps(0)} />
                <Tab label="活动讨论" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* 这里问题挺多的，为什么在tabpanel里面不能加box？？ */}
              <Box sx={{ width: "100%" }}>
                {content}
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
              </Box>
              {/* {content}
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
              )} */}
            </TabPanel>
            <TabPanel value={value} index={1} component={"div"}>
              <EventCommentsPost event={event} />
              <EventComments event={event} />
            </TabPanel>
          </Box>
        </Container>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Box>
  );
}
