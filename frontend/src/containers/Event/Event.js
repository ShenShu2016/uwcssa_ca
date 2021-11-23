import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventMain from "../../components/Event/EventMain";
// import EventSliderShow from "../components/Event/SliderShow";
import Filter from "../../components/Event/Filter";
import { Link } from "react-router-dom";
import { fetchEvents } from "../../redux/reducers/eventSlice";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";
import PastEvent from "../../components/Event/PastEvents";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginTop: "2rem",
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

  seeMore: {
    marginTop: "1rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
}));

export default function Event() {
  useTitle("UWCSSA活动");
  const classes = useStyles();

  const [eventList, setEventList] = useState([]);
  const [filteredEventList, setFilteredEventList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const dispatch = useDispatch();
  const { events, fetchEventsStatus } = useSelector((state) => state.event);

  useEffect(() => {
    if (fetchEventsStatus === "idle" || undefined) {
      dispatch(fetchEvents());
    }
  }, [dispatch, fetchEventsStatus]);

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
        .filter((d) => new Date(d.startDate) - new Date() >= 0)
        .sort(
          (a, b) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        )
    );
  }, [selectedTopic, sortBy, eventList, events]);

  // const currentEvent = filteredEventList.filter(
  //   (d) => new Date(d.startDate) - new Date() >= 0
  // );
  // console.log("currentEvent", currentEvent);

  // const pastEvent = filteredEventList.filter(
  //   (d) => new Date(d.startDate) - new Date() < 0
  // );
  // console.log("pastEvent", pastEvent);

  const renderList = filteredEventList.map((event, idx) => {
    return <EventMain key={idx} event={event} />;
  });

  const pastList = events
    .filter((d) => new Date(d.startDate) - new Date() < 0)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )
    .map((event, idx) => {
      return <PastEvent key={idx} event={event} />;
    });

  return (
    <div>
      <Box className={classes.root}>
        <Box sx={{ marginLeft: "1rem" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <span>
              <Button color="inherit" component={Link} to="/">
                主页
              </Button>
            </span>
          </Breadcrumbs>
        </Box>
        {/* <EventSliderShow /> */}
        <Box className={classes.list}>
          <Typography variant="h3" className={classes.title}>
            近期活动
          </Typography>
          <Box className={classes.timeTag}>
            <Filter
              handleSort={setSortBy}
              handleTopicChange={setSelectedTopic}
              selectedTopic={selectedTopic}
              // sortBy={sortBy}
            />

            {/* <h2>活动: {filteredEventList.length}</h2> */}
          </Box>
        </Box>

        <div>
          <Box sx={{ bgcolor: "#F9F9F9", paddingBottom: "3rem" }}>
            <Container>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                padding="0 1rem"
              >
                {renderList}
              </Grid>

              {/* <Box className={classes.seeMore}>
                <Button variant="outlined" component={Link} to="" disabled>
                  查看更多
                </Button>
              </Box> */}
            </Container>
          </Box>
        </div>
        <Box className={classes.list}>
          <Typography variant="h3" className={classes.title}>
            往期活动
          </Typography>
          <Box className={classes.timeTag}></Box>
        </Box>

        <div>
          <Box sx={{ bgcolor: "#F9F9F9", paddingBottom: "3rem" }}>
            <Container>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                padding="0 1rem"
              >
                {pastList}
              </Grid>
            </Container>
          </Box>
        </div>
      </Box>
    </div>
  );
}
