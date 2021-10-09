import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountCircle from "@mui/icons-material/AccountCircle";
import DrawerList from "../components/Drawer/DrawerList";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Redirect } from "react-router";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { makeStyles } from "@mui/styles";
import { signOut } from "../redux/actions/authActions";
import uwcssaLogo from "../static/uwcssa_logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // maxWidth: "1300px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  title2: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  uwcssaLogo: {
    width: 36,
    height: 36,
    marginRight: "1rem",
  },

  sectionDesktop: {
    display: "none",
    marginInline: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));
export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const userAuth = useSelector((state) => state.userAuth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const history = useHistory();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [redirect, setRedirect] = useState(false);
  const signOut_user = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    dispatch(signOut());
    setRedirect(true);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
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
        Dashboard
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
        Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/account/myAccount"
      >
        My account
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
      <MenuItem onClick={signOut_user}>注销</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/" onClick={handleMenuClose}>
        <IconButton>
          <StorefrontIcon />
        </IconButton>
        <p>主页</p>
      </MenuItem>
      <MenuItem component={Link} to="/article" onClick={handleMenuClose}>
        <IconButton>
          <StorefrontIcon />
        </IconButton>
        <p>文章</p>
      </MenuItem>
      <MenuItem component={Link} to="/career" onClick={handleMenuClose}>
        <IconButton>
          <StorefrontIcon />
        </IconButton>
        <p>加入我们</p>
      </MenuItem>
      <MenuItem component={Link} to="/graphqlTesting" onClick={handleMenuClose}>
        <IconButton>
          <StorefrontIcon />
        </IconButton>
        <p>GraphQLTesting</p>
      </MenuItem>
      {isAuthenticated ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      ) : (
        <MenuItem component={Link} to="/signIn" onClick={handleMenuClose}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>登陆</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawer} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer} />
          </Drawer>
          <img
            src={uwcssaLogo}
            alt="uwcssaLogo"
            className={classes.uwcssaLogo}
          />
          <Typography
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}
            className={classes.title2}
            variant="h5"
            noWrap
          >
            UWCSSA
          </Typography>
          <Typography
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer", fontSize: "25px" }}
            className={classes.title}
            // variant="h6"
            noWrap
          >
            温莎大学中国学生学者联谊会
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="text"
              style={{ color: "#FFF", fontSize: "23px", marginInline: "1rem" }}
              component={Link}
              to="/article"
            >
              文章
            </Button>
            <Button
              variant="text"
              style={{ color: "#FFF", fontSize: "23px", marginInline: "1rem" }}
              component={Link}
              to="/career"
            >
              加入我们
            </Button>
            <Button
              variant="text"
              style={{ color: "#FFF", fontSize: "23px", marginInline: "1rem" }}
              component={Link}
              to="/graphqlTesting"
            >
              GraphQLTesting
            </Button>
            {isAuthenticated ? (
              ""
            ) : (
              <Button
                component={Link}
                to="/signIn"
                variant="text"
                style={{
                  color: "#FFF",
                  fontSize: "23px",
                  marginInline: "1rem",
                }}
              >
                登陆
              </Button>
            )}
            {isAuthenticated ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle fontSize={"large"} />
              </IconButton>
            ) : (
              ""
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {redirect ? <Redirect to="/" /> : <div></div>}
    </div>
  );
}
