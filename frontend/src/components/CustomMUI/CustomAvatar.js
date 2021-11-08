import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Storage from "@aws-amplify/storage";
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

export default function CustomAvatar({ user, variant, sx, link }) {
  const classes = useStyles();
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    const getAvatarImage = async () => {
      try {
        const imageAccessURL = await Storage.get(user.avatarImgS3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setAvatarURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setAvatarURL(null);
      }
    };
    if (user.avatarImgS3Key) {
      getAvatarImage();
    }
  }, [user]);
  console.log("user", user);
  console.log("user", user);

  return (
    <div>
      {user.username ? (
        <div>
          {user.avatarImgS3Key ? (
            <Avatar
              component={link === true ? Link : ""}
              to={link === true ? `/account/profile/${user.username}` : ""}
              src={avatarURL}
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
        </div>
      ) : (
        <Avatar variant={variant} className={classes.avatar} style={sx} />
      )}
    </div>
  );
}
