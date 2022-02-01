import { Box, Button } from "@mui/material";
import { Link, Route, Switch } from "react-router-dom";

import Form from "../../components/Form/Form";
import FormQuestion from "../../components/Form/FormQuestion";
import GoogleMapsPlace from "../../components/GoogleMap/GoogleMapsPlace";
import React from "react";
import { makeStyles } from "@mui/styles";
import test1 from "./test1";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "4rem",
    maxWidth: "1536px",
    paddingInline: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0.5rem",
    },
  },
}));

export default function ForumRouter() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button variant="contained" component={Link} to="/test">
        Test
      </Button>
      <Switch>
        <Route exact path="/test" component={test1} />
        <Route path="/test/googleMapsPlace" exact component={GoogleMapsPlace} />
        <Route path="/test/form" exact component={Form} />
        <Route path="/test/formQuestion" exact component={FormQuestion} />
      </Switch>
    </Box>
  );
}
