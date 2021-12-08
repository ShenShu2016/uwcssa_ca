import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
// import {
//   removeSelectedEvent,
//   selectedEvent,
// } from "../../redux/actions/eventActions";
import {
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/reducers/eventSlice";
import { useDispatch, useSelector } from "react-redux";

import { ArrowBack } from "./ArrowBack";
import { Box } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventBody from "../Event/EventBody";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    // paddingBlock: "3rem",
    // paddingInline: "1rem",
  },
});
export default function EventDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { eventID } = useParams();
  const { event } = useSelector((state) => state.event.selected);
  useTitle(event.title && `近期活动 ${event.title}`);

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent({ eventID }));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  return (
    <div>
      {event.active === false ? (
        <Redirect to="/" />
      ) : (
        <div className={classes.root}>
          <Box sx={{ paddingBlock: "1rem" }}>
            {/* 试试这个东西不要硬编码 */}
            {/* <IconButton component={Link} to="/event">
              <ArrowBackIcon />
            </IconButton> */}
            <ArrowBack />
          </Box>
          <EventBody event={event} />
        </div>
      )}
    </div>
  );
}
