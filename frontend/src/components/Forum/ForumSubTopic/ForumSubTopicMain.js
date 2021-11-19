import {
  Box,
  // Typography,
  Breadcrumbs,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../../Hooks/useTitle";
import ForumSubTopicTip from "./ForumSubTopicTip";

export default function ForumSubTopicMain({ forumSubTopic }) {
  console.log(forumSubTopic);
  useTitle(forumSubTopic.name + "-" + forumSubTopic.forumTopic.name + "-论坛");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey",
      }}
    >
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
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
      <Box
        sx={{
          p: "1rem",
          // bgcolor: "white",
          // width: "100%",
        }}
      >
        <ForumSubTopicTip forumSubTopic={forumSubTopic} />
        {/* <Paper variant="outlined" square elevation={4}>
          <Typography variant="h5">{forumSubTopic.name}</Typography>
          <Typography variant="h5">{forumSubTopic.name}</Typography>
        </Paper> */}
      </Box>
    </Box>
  );
}
