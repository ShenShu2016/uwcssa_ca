/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:32:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-20 21:43:57
 * @FilePath: /uwcssa_ca/src/layouts/Main/components/Topbar/components/AccountMenu/AccountMenu.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { blue } from "@mui/material/colors";
import { removeMyUserProfile } from "redux/userProfile/userProfileSlice";
import { signOut } from "redux/auth/authSlice";
import { stringAvatar } from "components/Avatar/AvatarFunction";

export default function AccountMenu() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { myUserProfile } = useAppSelector((state) => state.userProfile);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      dispatch(removeMyUserProfile());
      navigate("/", { replace: true });
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src={myUserProfile.avatarURL?.objectThumbnailURL}
              {...stringAvatar(myUserProfile.name, {
                width: 32,
                height: 32,
                transition: "all .2s ease-in-out",
                "&:hover": {
                  borderColor: theme.palette.secondary.light,
                  background: `${theme.palette.secondary.light}!important`,
                  color: theme.palette.primary.light,
                  "& svg": {
                    stroke: blue[100],
                  },
                },
              })}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem >
          <Avatar /> My account
        </MenuItem> */}
        {/* <Divider /> */}
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem component={Link} to="/settings/general">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem component={Link} to="/settings/profile">
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InsertEmoticonIcon fontSize="small" />
          </ListItemIcon>
          更多功能敬请期待
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
