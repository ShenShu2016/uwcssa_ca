import { Box, IconButton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import {
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/actions/eventActions";
import { useDispatch, useSelector } from "react-redux";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventBody from "../Event/EventBody";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

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
  const { event } = useSelector((state) => state.event.selected);
  useTitle(`近期活动 ${event.title}`);

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent(eventID));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  return (
    <div className={classes.root}>
      <Box>
        <IconButton component={Link} to="/event">
          <ArrowBackIcon />
        </IconButton>

        <EventBody event={event} />
      </Box>
    </div>
  );
}
