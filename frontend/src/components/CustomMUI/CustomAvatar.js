import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";

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

export default function CustomAvatar({ username, variant, sx, link }) {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        component={link === true ? Link : ""}
        to={link === true ? `/account/profile/${username}` : ""}
        variant={variant}
        className={classes.avatar}
        style={sx}
        {...stringAvatar(username.toUpperCase())}
      />
    </div>
  );
}
