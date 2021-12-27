import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Drawer,
  Paper,
} from "@mui/material";
import React, { useRef, useState } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import DrawerList from "../components/Drawer/DrawerList";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import { Link } from "react-router-dom";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShopRoundedIcon from "@mui/icons-material/ShopRounded";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function BottomNav() {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);
  const ref = useRef(null);
  const classes = useStyles();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };
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
            value="/article"
            icon={<ArticleRoundedIcon />}
            component={Link}
            to="/article"
          />
          <BottomNavigationAction
            label="活动"
            value="/event"
            icon={<EventRoundedIcon />}
            component={Link}
            to="/event"
          />
          {/* <BottomNavigationAction
            label="论坛"
            value="/forum"
            icon={<ForumRoundedIcon />}
            component={Link}
            to="/forum"
          /> */}
          <BottomNavigationAction
            label="商城"
            value="/market"
            icon={<ShopRoundedIcon />}
            component={Link}
            to="/market"
          />
          {isAuthenticated ? (
            <BottomNavigationAction
              label="个人中心"
              value="/account/dashboard"
              icon={<AccountCircle />}
              component={Link}
              to="/account/dashboard"
            />
          ) : (
            <BottomNavigationAction
              label="登入"
              value="/auth/signIn"
              icon={<LoginRoundedIcon />}
              component={Link}
              to="/auth/signIn"
            />
          )}
          <BottomNavigationAction
            label="更多"
            value="more"
            icon={<MoreHorizIcon />}
            onClick={toggleDrawer(true)}
          />
        </BottomNavigation>
        <Drawer open={drawer} onClose={toggleDrawer(false)}>
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      </Paper>
    </Box>
  );
}
