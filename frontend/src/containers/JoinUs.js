import { Box, Button } from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";
import Table from "../components/JoinUs/Table";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  slogan: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  header: {
    marginBottom: "2rem",
  },
});

export default function JoinUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.slogan}>
        <Typography variant="h3" className={classes.header}>
          Join US
        </Typography>
        <Typography variant="body1">
          {" "}
          加入UWCSSA，你将会遇到志同道合和具启发性的人，与他们成为朋友，一起打拼。
        </Typography>
      </Box>

      <Button variant="contained" color="primary" component={Link} to="/">
        Click me
      </Button>
      <Table />
    </div>
  );
}
