import {
  Box,
  Typography,
  // Button,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

export default function ForumSubTopicMovieTip() {
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          minHeight: 300,
          p: 2,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4">电影</Typography>
            <Typography variant="subtitle2">这里是电影板块</Typography>
          </Box>
          <Divider />
          <Typography variant="subtitle2">电影板块规矩</Typography>
          <Typography variant="subtitle2">其他板块引导信息</Typography>
        </Stack>
      </Paper>
    </div>
  );
}
