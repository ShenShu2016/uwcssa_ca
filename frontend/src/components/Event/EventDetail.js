import { Box, IconButton, Tab } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import {
  removeSelectedEvent,
  selectedEvent,
  selectedEventComments,
} from "../../redux/actions/eventActions";
import { useDispatch, useSelector } from "react-redux";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventBody from "../Event/EventBody";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";
import EventHeader from "./EventHeader";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EventCommentsPost from "./EventCommentsPost";
import EventComments from "./EventComments";

const useStyles = makeStyles({
  root: {
    maxWidth: "1200px",
    margin: "auto",
    paddingBlock: "3rem",
    paddingInline: "1rem",
  },
});
export default function EventDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { eventID } = useParams();
  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent({ eventID }));
      dispatch(selectedEventComments({ eventID }));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  const { event, comments } = useSelector((state) => state.event.selected);
  useTitle(event.title);
  useTitle(`近期活动 ${event.title}`);

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent(eventID));
      dispatch(selectedEventComments({ eventID }));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Box>
        <IconButton component={Link} to="/event">
          <ArrowBackIcon />
        </IconButton>
        <EventHeader event={event} />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="活动详情" value="1" />
                <Tab label="活动讨论" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <EventBody event={event} />
            </TabPanel>
            <TabPanel value="2">
              <EventCommentsPost event={event} />
              <EventComments comments={comments} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </div>
  );
}
