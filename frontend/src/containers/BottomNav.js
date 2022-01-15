import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Drawer,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useRef, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DrawerList from "../components/Drawer/DrawerList";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import ShopRoundedIcon from "@mui/icons-material/ShopRounded";
import { makeStyles } from "@mui/styles";
import { signOut } from "../redux/slice/authSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function BottomNav() {
  const pathname = window.location.pathname;
  const history = useHistory();
  const userAuth = useSelector((state) => state.userAuth);
  const [value, setValue] = useState(pathname);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);

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
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const signOut_user = async () => {
    setAnchorEl(null);

    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      history.push("/");
    }
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      disableScrollLock={true}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/account/dashboard"
      >
        <DashboardIcon />
        个人中心
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to={
          userAuth.user === null
            ? ""
            : `/account/profile/${userAuth.user.username}`
        }
      >
        <PublicIcon />
        个人资料
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/account/myAccount"
        disabled
      >
        <ManageAccountsIcon />
        我的账户
      </MenuItem>
      <MenuItem onClick={handleMenuClose} disabled>
        <SettingsIcon />
        设置
      </MenuItem>

      <MenuItem onClick={signOut_user}>
        <LogoutIcon />
        注销
      </MenuItem>
    </StyledMenu>
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
          zIndex: 2,
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
              // value="/account/dashboard"
              icon={<AccountCircle />}
              onClick={(e) => {
                handleProfileMenuOpen(e);
              }}
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
        <Drawer open={drawer} onClose={toggleDrawer(false)} anchor={"bottom"}>
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>
      </Paper>
      {renderMenu}
    </Box>
  );
}
