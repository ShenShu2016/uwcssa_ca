import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import S3Image from "../../S3/S3Image";
import Storage from "@aws-amplify/storage";
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
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(userProfile.avatarImgS3Key, {
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
    if (userProfile.avatarImgS3Key) {
      getImage();
    }
  }, [userProfile]);

  return (
    <div>
      <div className={classes.root}>
        <Card elevation={0} className={classes.header}>
          <CardActionArea
            onClick={() => {
              history.push(`/account/profile/${userProfile.username}`);
            }}
          >
            <S3Image
              S3Key={userProfile.backGroundImgS3Key}
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
                  src={avatarURL}
                  sx={{ width: 150, height: 150, cursor: "pointer" }}
                  className={classes.avatar}
                />
              </Badge>
              <Button
                variant="contained"
                endIcon={<EditIcon />}
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
