import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import uwindsor from "../../../static/svg icons/uwindsor.svg";

const useStyles = makeStyles({
  root: {
    // marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
  },
  banner: {
    minHeight: "200px",
  },
  avatar: {
    top: "-75px",
    marginLeft: "1rem",
  },
  edit: {
    float: "right",
  },
  info: {
    minHeight: "150px",
  },
  outer: {
    height: "90px",
  },
});
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  border: `2px solid ${theme.palette.background.paper}`,
}));
export default function DashboardBasicInfo({ userProfile }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.root}>
        <Card elevation={0} className={classes.header}>
          <CardActionArea
            onClick={() => {
              history.push(`/account/profile/${userProfile.username}`);
            }}
          >
            <img
              src={
                userProfile.backGroundImgURL
                  ? userProfile.backGroundImgURL
                  : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user_backGround.png"
              }
              alt="backGroundImgURL"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: 5,
              }}
            />
          </CardActionArea>
          <CardContent className={classes.info}>
            <div className={classes.outer}>
              <Badge
                invisible={!userProfile.badges.includes("uwindsor")}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="uwindsor"
                    src={uwindsor}
                    sx={{ top: "-75px", right: "10px", marginLeft: "1rem" }}
                  />
                }
              >
                <Avatar
                  onClick={() => {
                    history.push(`/account/profile/${userProfile.username}`);
                  }}
                  alt="avatar"
                  src={
                    userProfile.avatarImgURL
                      ? userProfile.avatarImgURL
                      : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user_backGround.png"
                  }
                  sx={{ width: 150, height: 150, cursor: "pointer" }}
                  className={classes.avatar}
                />
              </Badge>
              <Button
                variant="contained"
                endIcon={<InfoIcon />}
                color="primary"
                className={classes.edit}
                component={Link}
                to={`/account/profile/${userProfile.username}`}
              >
                查看我的信息
              </Button>
            </div>
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              sx={{ fontWeight: "700" }}
            >
              {userProfile.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              待定
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
