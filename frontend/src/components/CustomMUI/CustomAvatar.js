import { Avatar, Badge } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import king from "../../static/avatarIcons/king.png";
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
const CrownAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  // border: `2px solid ${theme.palette.background.paper}`,
  top: "-8px",
  right: "-8px",
  // transform: `rotate(45deg)`,
}));
export default function CustomAvatar({ user, variant, sx, link }) {
  const classes = useStyles();

  return (
    <div>
      {user.username ? (
        <div>
          <Badge
            invisible={!user.badges.includes("king")}
            overlap="circular"
            // anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={<CrownAvatar alt="king" src={king} />}
            sx={{
              "& .MuiBadge-anchorOriginTopRightCircular": {
                transform: "translate(0, -50%)",
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
              {user.avatarImgS3Key ? (
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
