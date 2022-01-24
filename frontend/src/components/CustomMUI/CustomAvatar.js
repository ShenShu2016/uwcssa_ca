import { Avatar, Badge } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import uwcssa_logo from "../../static/uwcssa_logo.svg";
import uwindsor from "../../static/svg icons/uwindsor.svg";

const useStyles = makeStyles({
  avatar: {
    textDecoration: "none",
  },
});

function stringToColor(string) {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.slice(0, 1)}`,
  };
}
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
export default function CustomAvatar({ user, variant, sx, link }) {
  const classes = useStyles();
  return (
    <div>
      {user && user.username ? (
        <div>
          <Badge
            invisible={!user.badges.includes("top100")}
            overlap="circular"
            // anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <Avatar
                alt="top100"
                src={
                  "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/AvatarIcons/top100.png"
                }
                sx={{
                  width: 58,
                  height: 58,
                  top: "4px",
                  right: "-21px",
                  borderRadius: "0",
                }}
              />
            }
            sx={{
              "& .MuiBadge-anchorOriginTopRightCircular": {
                transform: "translate(0, 0)",
              },
            }} // 直接找到他所对应的className，修改位置
          >
            <Badge
              invisible={!user.badges.includes("uwindsor")}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar
                  alt="uwindsor"
                  src={user.badges.includes("cssa") ? uwcssa_logo : uwindsor}
                />
              }
            >
              {user.avatarImgURL ? (
                <Avatar
                  component={link === true ? Link : ""}
                  to={link === true ? `/account/profile/${user.username}` : ""}
                  src={user.avatarImgURL}
                  variant={variant}
                  className={classes.avatar}
                  style={sx}
                />
              ) : (
                <Avatar
                  component={link === true ? Link : ""}
                  to={link === true ? `/account/profile/${user.username}` : ""}
                  variant={variant}
                  className={classes.avatar}
                  style={sx}
                  {...stringAvatar(user.username.toUpperCase())}
                />
              )}
            </Badge>
          </Badge>
        </div>
      ) : (
        <Avatar variant={variant} className={classes.avatar} style={sx} />
      )}
    </div>
  );
}
