import { Box, Button, Collapse } from "@mui/material";
import React, { useState } from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumIndexSubTopic from "./ForumIndexSubTopic";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
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
      transform: "scale(1.3)",
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
const useStyles = makeStyles((theme) => ({
  navTopic: {
    opacity: 0.9,
  },
  navTopicOpen: {
    opacity: 0.5,
  },
}));
export default function ForumIndexTopicComponent({ forumTopic }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={{
          // background: "linear-gradient(to right bottom, #1E90FF, #00CED1)",
          boxShadow: 1,
          backgroundColor: "info.main",
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: "center",
          fontSize: "1rem",
          // fontWeight: "700",
          display: "flex",
          justifyContent: "space-between",
        }}
        className={open ? classes.navTopic : classes.navTopicOpen}
        onClick={handleClick}
      >
        <Box>
          <Button
            variant="subtitle2"
            sx={{
              color: "white",
            }}
            component={Link}
            to={`/forum/forumTopic/${forumTopic.id}`}
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
        {/* 这里出发点有问题不能这么做 每次开关都要call 一次 图片 ，不行，应该一开始就fetch 了，只不过开关是隐藏，整个下面的component 应该是一个table或者别的形式的*/}
        {forumTopic.forumSubTopics.items.map((forumSubTopic) => {
          return (
            <ForumIndexSubTopic
              forumSubTopic={forumSubTopic}
              key={forumSubTopic.id}
            />
          );
        })}
      </Collapse>
    </div>
  );
}
