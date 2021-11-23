import { Box, Button } from "@mui/material";

import CustomBreadcrumbs from "../../CustomMUI/CustomBreadcrumbs";
import ForumSubTopicTip from "./ForumSubTopicTip";
import { Link } from "react-router-dom";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { useTitle } from "../../../Hooks/useTitle";

export default function ForumSubTopicMain({ forumSubTopic }) {
  console.log(forumSubTopic);
  const { userAuth } = useSelector((state) => state);
  useTitle(forumSubTopic.name + "-" + forumSubTopic.forumTopic.name + "-论坛");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "1rem", maxwidth: "100%" }}>
        <CustomBreadcrumbs />
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
      {userAuth.isAuthenticated && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pr: 2,
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to={`/forum/${forumSubTopic.forumTopicID}/${forumSubTopic.id}/发布帖子`}
            endIcon={<SendIcon />}
            size="large"
          >
            发帖
          </Button>
        </Box>
      )}
    </Box>
  );
}
