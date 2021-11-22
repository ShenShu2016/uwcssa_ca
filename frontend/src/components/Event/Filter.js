import {
  Button,
  // FormControl,
  // FormHelperText,
  // InputLabel,
  // MenuItem,
  // Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Filter({
  handleSort,
  handleTopicChange,
  selectedTopic,
  sortBy,
}) {
  let topicNames = [
    "全部",
    "游戏",
    "节日",
    "电影",
    "跳舞",
    "美食",
    "音乐",
    "社交",
    "派对",
    "运动",
  ];
  return (
    <div>
      <div>
        <div>
          <Box>
            {topicNames.map((topic, idx) => (
              <Button
                key={idx}
                onClick={(e) => handleTopicChange(e.target.value)}
                value={topic}
                variant={selectedTopic === topic ? "contained" : "outlined"}
                size="small"
                sx={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                  borderRadius: "16px",
                }}
              >
                {topic}
              </Button>
            ))}
          </Box>
        </div>

        {/* <div>
          <Box sx={{ maxWidth: "300px", margin: "0 auto", marginTop: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleSort(e.target.value)}
                value={sortBy}
                label="sortBy"
              >
                <MenuItem value="furthest">Nearest to Furthest</MenuItem>

                <MenuItem value="nearest">Furthest to Nearest</MenuItem>
              </Select>
              <FormHelperText>日期排序</FormHelperText>
            </FormControl>
          </Box>
        </div> */}
      </div>
    </div>
  );
}
