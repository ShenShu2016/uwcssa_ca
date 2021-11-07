import {
  Box,
  Button,
  CardActions,
  // CardMedia,
  CircularProgress,
  Container,
  // Tab,
  // Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpRequest from "../Auth/SignUpRequireDialog";
import Storage from "@aws-amplify/storage";
import { useSelector } from "react-redux";
// import EventCommentsPost from "./EventCommentsPost";
// import EventComments from "./EventComments";

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

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function EventBody() {
  const { event } = useSelector((state) => state.event.selected);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const userInfo = useSelector((state) => state.userAuth);
  const [posterURL, setPosterURL] = useState(null);

  const {
    // title,
    // startDate,
    // endDate,
    // eventStatus,
    // location,
    content,
    posterImgS3Key,
    // topic,
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
          <Box sx={{ width: "100%" }}>
            <Box sx={{ minHeight: "100px" }}>
              <Typography paragraph>{content}</Typography>
            </Box>
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
        </Container>
      )}
    </Box>
  );
}
