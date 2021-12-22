import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from "@mui/icons-material/Forum";
import ShopIcon from "@mui/icons-material/Shop";
import { makeStyles } from "@mui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const classes = useStyles();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  return (
    <Box sx={{ pb: 7 }} ref={ref} className={classes.root}>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="新闻"
            value="article"
            icon={<ArticleIcon />}
            component={Link}
            to="/article"
          />
          <BottomNavigationAction
            label="活动"
            value="event"
            icon={<EventIcon />}
            component={Link}
            to="/event"
          />
          <BottomNavigationAction
            label="论坛"
            value="forum"
            icon={<ForumIcon />}
            component={Link}
            to="/forum"
          />
          <BottomNavigationAction
            label="商城"
            value="market"
            icon={<ShopIcon />}
            component={Link}
            to="/market"
          />
          {isAuthenticated ? (
            <BottomNavigationAction
              label="个人中心"
              value="dashboard"
              icon={<AccountCircle />}
              component={Link}
              to="/account/dashboard"
            />
          ) : (
            <BottomNavigationAction
              label="登入"
              value="signIn"
              icon={<AccountCircle />}
              component={Link}
              to="/auth/signIn"
            />
          )}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
