import {
  Button,
  Box,
  Collapse,

} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ForumIndexSubTopic from "./ForumIndexSubTopic";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  border: "1px solid",
  borderColor: "rgba(255, 255, 255, 0.6)",
  width: 20,
  minWidth: 20,
  height: 20,
  "& .label": {
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    color: "#DCDCDC",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderColor: "theme.palette.common.white,",
    "& .label": {
      transform: "scale(1.3)",
      color: "#1E90FF",
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
    opacity: 1,
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
    <div key={forumTopic.id}>
      <Box
        sx={{
          background: "linear-gradient(to right bottom, #1E90FF, #00CED1)",
          color: "white",
          boxShadow: 1,
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
      >
        <Box component="Typography">
          <Button
            variant="subtitle2"
            color="white"
            component={Link}
            to={`/forum/forumTopic/${forumTopic.id}`}
          >
            {forumTopic.name}
          </Button>
        </Box>
        {/* <Box component="Typography">最后发表</Box> */}
        <Box component="Typography">
          {open ? (
            <StyledButton
              size="small"
              onClick={handleClick}
              aria-label="small button group"
            >
              <ExpandLess className="label" />
            </StyledButton>
          ) : (
            <StyledButton size="small" onClick={handleClick}>
              <ExpandMore className="label" />
            </StyledButton>
          )}
        </Box>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {forumTopic.forumSubTopics.items.map((forumSubTopic) => {
          return <ForumIndexSubTopic forumSubTopic={forumSubTopic} />;
        })}
      </Collapse>
    </div>
  );
}
