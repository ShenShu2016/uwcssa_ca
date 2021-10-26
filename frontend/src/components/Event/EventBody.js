import {
  Box,
  Button,
  CardActions,
  CardMedia,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const [value, setValue] = React.useState(0);

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
    <Box>
      {Object.keys(event.event).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container size="lg">
          <Container size="sm">
            <CardMedia component="img" height="300" image={posterURL} />

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
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <b>
                    {startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                    {startDate.slice(11, 16)} - {endDate.slice(11, 16)}
                  </b>
                </Typography>
                <Typography component="div" variant="h5" color="red">
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
              <Box sx={{ width: "100%" }}>
                <Typography paragraph>{content}</Typography>

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
            </TabPanel>
            <TabPanel value={value} index={1}>
              建设中。。。
            </TabPanel>
          </Box>
        </Container>
      )}
    </Box>
  );
}
