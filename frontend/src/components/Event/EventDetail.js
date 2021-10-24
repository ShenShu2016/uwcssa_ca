import React, { useEffect } from "react";
import {
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/actions/eventActions";
import { useDispatch, useSelector } from "react-redux";

import EventBody from "../Event/EventBody";

import { makeStyles } from "@mui/styles";
import { Link, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  const event = useSelector((state) => state.event);

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent(eventID));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  return (
    <div className={classes.root}>
      <IconButton component={Link} to="/event">
        <ArrowBackIcon />
      </IconButton>
      <EventBody event={event} />
    </div>
  );
}
