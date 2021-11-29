import { Box, Stack, Paper, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

import { useTitle } from "../../../Hooks/useTitle";
import ForumHomeSubTopic from "../ForumHome/ForumHomeSubTopic";

export default function ForumTopicMain({ forumTopic }) {
  useTitle(forumTopic.name + "-论坛");

  return (
    <div>
      <Box sx={{ padding: "2rem", maxwidth: "100%" }}>
        <Stack direction="column">
          <Paper sx={{ padding: "1rem" }}>
            <Typography
              variant="h4"
              component="span"
              style={{
                whiteSpace: "pre-wrap",
                fontWeight: 500,
                wordBreak: "break-word",
                // color: "grey",
              }}
            >
              {forumTopic.name}
            </Typography>
          </Paper>
          <Box sx={{ display: "grid", mt: 2 }}>
            <Box
              sx={{
                boxShadow: 1,
                backgroundColor: "info.main",
                p: 1,
                mx: 1,
                mt: 3,
                borderRadius: 1,
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "700",
                display: "flex",
                justifyContent: "space-between",
                opacity: 0.9,
              }}
            >
              <Box>
                <Button
                  variant="subtitle2"
                  sx={{
                    color: "white",
                  }}
                  component={Link}
                  to={`/forum/${forumTopic.id}`}
                >
                  副主题板块
                </Button>
              </Box>
            </Box>
            {forumTopic.forumSubTopics.items?.map((forumSubTopic) => {
              return (
                <ForumHomeSubTopic
                  forumSubTopic={forumSubTopic}
                  key={forumSubTopic.id}
                />
              );
            })}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
