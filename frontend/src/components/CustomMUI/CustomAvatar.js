import { Avatar, Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getImage, selectImageById } from "../../redux/reducers/imageSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import king from "../../static/avatarIcons/king.png";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import uwcssa_logo from "../../static/uwcssa_logo.svg";
import uwindsor_shield from "../../static/avatarIcons/uwindsor_shield.svg";

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
const SmallAvatarCssaLogo = styled(Avatar)(({ theme }) => ({
  width: 23,
  height: 23,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const CrownAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  // border: `2px solid ${theme.palette.background.paper}`,
  top: "-8px",
  right: "-8px",
  transform: `rotate(45deg)`,
}));
export default function CustomAvatar({ user, variant, sx, link }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null);
  const id = user.avatarImgS3Key;
  const imgKeys = useSelector((state) => selectImageById(state, id));

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await dispatch(
          getImage({ url: [user.avatarImgS3Key], id })
        );
        setImageURL(response.payload.imgUrl);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (user.avatarImgS3Key && imgKeys === undefined) {
      getImages();
    } else if (user.avatarImgS3Key && imgKeys !== undefined) {
      setImageURL(Object.values(imgKeys.images));
    }
  }, [user, imgKeys, dispatch, id]);

  return (
    <div>
      {user.username ? (
        <div>
          <Badge
            invisible={!user.badges.includes("staff")}
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            badgeContent={
              <SmallAvatarCssaLogo alt="cssa_log" src={uwcssa_logo} />
            }
          >
            <Badge
              invisible={!user.badges.includes("king")}
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={<CrownAvatar alt="uwindsor_shield" src={king} />}
            >
              <Badge
                invisible={!user.badges.includes("uwindsor_shield")}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar alt="uwindsor_shield" src={uwindsor_shield} />
                }
              >
                {user.avatarImgS3Key ? (
                  <Avatar
                    component={link === true ? Link : ""}
                    to={
                      link === true ? `/account/profile/${user.username}` : ""
                    }
                    src={imageURL}
                    variant={variant}
                    className={classes.avatar}
                    style={sx}
                  />
                ) : (
                  <Avatar
                    component={link === true ? Link : ""}
                    to={
                      link === true ? `/account/profile/${user.username}` : ""
                    }
                    variant={variant}
                    className={classes.avatar}
                    style={sx}
                    {...stringAvatar(user.username.toUpperCase())}
                  />
                )}
              </Badge>
            </Badge>
          </Badge>
        </div>
      ) : (
        <Avatar variant={variant} className={classes.avatar} style={sx} />
      )}
    </div>
  );
}
