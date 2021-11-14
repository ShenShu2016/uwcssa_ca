import {
  Box,
  Typography,
  Breadcrumbs,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../../Hooks/useTitle";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    //   justifyContent: "center",
  },
  forumSubTopic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export default function ForumSubTopicMain( {forumSubTopic} ) {
  const classes = useStyles();
  console.log(forumSubTopic);
  useTitle(forumSubTopic.name + "-" + forumSubTopic.forumTopic.name + "-论坛");
  return (
    <div className={classes.root}>
      <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
        <Typography variant="h5">{forumSubTopic.name}</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <span style={{}}>
            <Button color="inherit" component={Link} to={`/`}>
              UWCSSA
            </Button>
          </span>
          <span style={{}}>
            <Button color="inherit" component={Link} to={`/forum`}>
              论坛
            </Button>
          </span>
          <span style={{ cursor: "not-allowed" }}>
            <Button
              color="inherit"
              component={Link}
              to={`/forum/forumTopic/${forumSubTopic.forumTopic.id}`}
            >
              {forumSubTopic.forumTopic.name}
            </Button>
          </span>
          <span style={{ cursor: "not-allowed" }}>
            <Button
              color="inherit"
              component={Link}
              disabled
              to={`/forum/forumSubTopic/${forumSubTopic.id}`}
            >
              {forumSubTopic.name}
            </Button>
          </span>
        </Breadcrumbs>
      </Box>
    </div>
  );
}