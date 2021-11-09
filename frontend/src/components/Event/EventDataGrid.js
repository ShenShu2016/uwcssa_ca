import React, { useEffect } from "react";
import { fetchEvents } from "../../redux/reducers/eventSlice";

import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: false,
  },
  {
    field: "topic",
    headerName: "Topic",
    width: 110,
    editable: false,
  },
  {
    field: "location",
    headerName: "location",
    width: 150,
    editable: false,
  },
  {
    field: "eventStatus",
    headerName: "Event Status",
    width: 200,
    editable: false,
  },
];

export default function UwcssaJobsPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const { events } = useSelector((state) => state.event);

  // console.log("events", events);

  const rows = events.map((event) => {
    const { id, title, location, startDate, eventStatus, topic } = event;
    return {
      id: id,
      title: title,
      location: location,
      startDate: startDate,
      topic: topic.name,
      eventStatus: eventStatus,
    };
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" component="h2" color="primary">
            UWCSSA Event Data
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/staff/event/postEvent"
          >
            New Event
          </Button>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      </Paper>
    </div>
  );
}
