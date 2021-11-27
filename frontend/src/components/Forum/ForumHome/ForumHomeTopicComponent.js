import { Box, Button, Collapse } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumHomeSubTopic from "./ForumHomeSubTopic";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  border: "1px solid",
  borderColor: "rgba(255, 255, 255, 0.6)",
  width: 20,
  minWidth: 20,
  height: 20,
  "& .label": {
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    color: "white",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderColor: "theme.palette.common.white",
    "& .label": {
      transform: "scale(1.5)",
      color: "dodgerBlue",
      [theme.breakpoints.up("md")]: {
        transform: "scale(1.7)",
      },
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: 24,
    minWidth: 24,
    height: 24,
  },
  [theme.breakpoints.up("md")]: {
    width: 32,
    minWidth: 32,
    height: 32,
  },
}));
export default function ForumHomeTopicComponent({ forumTopic }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={
          open
            ? {
                boxShadow: 1,
                backgroundColor: "info.main",
                p: 1,
                mx: 1,
                mt: 3,
                borderRadius: 1,
                textAlign: "center",
                fontSize: "1rem",
                // fontWeight: "700",
                display: "flex",
                justifyContent: "space-between",
                opacity: 0.9,
              }
            : {
                opacity: 0.5,
                // background: "linear-gradient(to right bottom, #1E90FF, #00CED1)",
                boxShadow: 1,
                backgroundColor: "info.main",
                p: 1,
                mx: 1,
                mt: 3,
                borderRadius: 1,
                textAlign: "center",
                fontSize: "1rem",
                // fontWeight: "700",
                display: "flex",
                justifyContent: "space-between",
              }
        }
        onClick={handleClick}
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
            {forumTopic.name}
          </Button>
        </Box>
        {/* <Box component="Typography">最后发表</Box> */}
        <Box>
          {open ? (
            <StyledButton size="small" aria-label="small button group">
              <ExpandLess className="label" />
            </StyledButton>
          ) : (
            <StyledButton size="small">
              <ExpandMore className="label" />
            </StyledButton>
          )}
        </Box>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {forumTopic.forumSubTopics.items.map((forumSubTopic) => {
          return (
            <ForumHomeSubTopic
              forumSubTopic={forumSubTopic}
              key={forumSubTopic.id}
            />
          );
        })}
      </Collapse>
    </div>
  );
}
