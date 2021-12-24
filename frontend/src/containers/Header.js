import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/system";
import CustomAvatar from "../components/CustomMUI/CustomAvatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DrawerList from "../components/Drawer/DrawerList";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from "@mui/icons-material/Forum";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import ShopIcon from "@mui/icons-material/Shop";
import WorkIcon from "@mui/icons-material/Work";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { signOut } from "../redux/slice/authSlice";
import { switchTheme } from "../redux/slice/generalSlice";
import { useSwitch } from "@mui/base/SwitchUnstyled";
import uwcssaLogo from "../static/uwcssa_logo.svg";

const blue = {
  700: "#0059B2",
};

const grey = {
  400: "#BFC7CF",
  800: "#2F3A45",
};

const SwitchRoot = styled("span")`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled("span")`
  position: absolute;
  display: block;
  background-color: ${blue[700]};
  width: 30px;
  height: 30px;
  border-radius: 8px;
  top: 3px;
  left: 4px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')
      center center no-repeat;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
    }
  }
`;

const SwitchTrack = styled("span")(
  ({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[400]};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: block;
`
);

function MUISwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}
const StyledAppBar = styled((props) => <AppBar {...props} />)(({ theme }) => ({
  // "& .MuiPaper-root": {
  //   "& .MuiAppBar-root": {
  //     boxShadow: "none",
  //   },
  // },
}));

const StyledToolBar = styled((props) => <Toolbar {...props} />)(
  ({ theme }) => ({
    // "& .MuiToolbar-root": {
    //   height: "56px",
    // },
  })
);

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
    marginInline: "1rem",
  },

  sectionDesktop: {
    display: "none",
    marginInline: "1rem",
    [theme.breakpoints.up("1300")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("1300")]: {
      display: "none",
    },
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  appBarRoot: {
    root: { boxShadow: "none" },
  },
}));
export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const userAuth = useSelector((state) => state.userAuth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [drawer, setDrawer] = useState(false);
  // const [lightOrDark, setLightOrDark] = useState(true);

  const handleChangeTheme = (event) => {
    console.log("switchTheme");
    dispatch(switchTheme());
  };
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

  const signOut_user = async () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      history.push("/");
    }
  };

  const menuId = "primary-search-account-menu";
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
      <Box className={classes.title}>
        <MenuItem sx={{ justifyContent: "center" }}>
          <MUISwitch onChange={handleChangeTheme} />
        </MenuItem>
      </Box>
      <MenuItem onClick={signOut_user}>
        <LogoutIcon />
        注销
      </MenuItem>
    </StyledMenu>
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
      sx={{ maxWidth: "300px" }}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <p>左上角有功能键哦</p>
      </MenuItem>
      <Box className={classes.title2}>
        <MenuItem sx={{ justifyContent: "center" }}>
          <MUISwitch onChange={handleChangeTheme} />
        </MenuItem>
      </Box>
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
          <p>{userAuth.user.username}</p>
        </MenuItem>
      ) : (
        <MenuItem component={Link} to="/auth/signIn" onClick={handleMenuClose}>
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
      <CssBaseline />
      <StyledAppBar color="inherit" elevation={0} variant="outlined">
        <StyledToolBar>
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
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/article"
              startIcon={<ArticleIcon />}
            >
              近期新闻
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/event"
              startIcon={<EventIcon />}
            >
              活动
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/forum"
              startIcon={<ForumIcon />}
            >
              论坛
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/market"
              startIcon={<ShopIcon />}
            >
              商城
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/career"
              startIcon={<WorkIcon />}
            >
              加入我们
            </Button>
            {isAuthenticated ? (
              ""
            ) : (
              <Button
                component={Link}
                to="/auth/signIn"
                variant="text"
                style={{
                  fontSize: "20px",
                  marginInline: "1rem",
                }}
                startIcon={<LoginIcon />}
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
                {/* <AccountCircle fontSize={"large"} /> */}
                <CustomAvatar
                  user={userAuth.userProfile}
                  sx={{ width: 35, height: 35 }}
                />
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
        </StyledToolBar>
      </StyledAppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
