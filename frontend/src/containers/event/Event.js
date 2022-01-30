import "./styles.css";

import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import EventMain from "../../components/Event/EventMain";
// import EventSliderShow from "../../components/Event/SliderShow";
// import Filter from "../../components/Event/Filter";
import PastEvent from "../../components/Event/PastEvents";
import { fetchEvents } from "../../redux/slice/eventSlice";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    minWidth: "40%",
    maxWidth: "100%",
    paddingBottom: "1rem",
  },
  list: {
    marginTop: "5rem",

    height: "100%",
    paddingBottom: "2rem",
  },
  timeTag: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    margin: "0 auto",
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "900px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  cardGrid: {
    direction: "column",
    justify: "center",
    alignItems: "center",
  },
  seeMore: {
    marginTop: "1rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
}));

export default function Event() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useTitle("活动");
  const classes = useStyles();

  const [eventList, setEventList] = useState([]);
  const [filteredEventList, setFilteredEventList] = useState([]);
  const [sortBy] = useState("");
  const [selectedTopic] = useState("");
  const dispatch = useDispatch();
  const { events, fetchEventsStatus } = useSelector((state) => state.event);

  useEffect(() => {
    if (fetchEventsStatus === "idle" || undefined) {
      dispatch(fetchEvents());
    }
  }, [dispatch, fetchEventsStatus]);
  const moment = require("moment-timezone");

  useEffect(() => {
    setEventList(events);
    setFilteredEventList(events);
  }, [events]);

  useEffect(() => {
    const filtered = selectedTopic
      ? selectedTopic === "全部"
        ? events
        : events.filter((item) => item.topic.name === selectedTopic)
      : events;

    setFilteredEventList(
      [...filtered]
        .filter((d) => moment(d.endDate).isAfter(moment()))
        .sort((a, b) => moment(a.endDate) - moment(b.endDate))
    );
  }, [selectedTopic, sortBy, eventList, events, moment]);

  const delay = 500;

  const duration = 750;

  const animStr = (id) =>
    `glowIn ${duration}ms ease-out ${delay * (id + 1)}ms backwards`;

  const renderList = filteredEventList.map((event, id) => {
    return (
      <Grid
        item
        xs={2}
        sm={4}
        md={4}
        lg={3}
        key={id}
        style={{ animation: animStr(id), marginBottom: "1rem" }}
      >
        <EventMain key={id} event={event} />
      </Grid>
    );
  });

  const pastList = events
    .filter((d) => moment(d.endDate).isBefore(moment()))
    .sort((a, b) => moment(a.endDate) - moment(b.endDate))
    .map((event, id) => {
      return (
        <Grid
          item
          xs={2}
          sm={4}
          md={4}
          lg={3}
          key={id}
          style={{ animation: animStr(id), marginBottom: "1rem" }}
        >
          <PastEvent event={event} />
        </Grid>
      );
    });

  return (
    <Box className={classes.root}>
      {/* <EventSliderShow events={events} /> */}
      <Box className={classes.list}>
        <Typography variant="h3" className={classes.title}>
          近期活动
        </Typography>
      </Box>

      <div>
        <Box sx={{ bgcolor: "", paddingBottom: "3rem", flexGrow: 1 }}>
          {renderList.length !== 0 ? (
            <Grid
              container
              spacing={{ xs: 0, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
              direction={isMobile ? "column" : "row"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {renderList}
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3>More events coming soon! Please check back here later.</h3>
            </Grid>
          )}
        </Box>
      </div>
      <Box className={classes.list}>
        <Typography variant="h3" className={classes.title}>
          往期活动
        </Typography>

        <Box className={classes.timeTag}></Box>
      </Box>

      <div>
        <Box
          sx={{
            bgcolor: "",
            paddingBottom: "3rem",
            flexGrow: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 0, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
            direction={isMobile ? "column" : "row"}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pastList}
          </Grid>
        </Box>
      </div>
    </Box>
  );
}
