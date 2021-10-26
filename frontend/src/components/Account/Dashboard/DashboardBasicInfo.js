import {
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
    top: "-160px",
    float: "right",
  },
  info: {
    minHeight: "150px",
  },
  outer: {
    height: "90px",
  },
});

export default function DashboardBasicInfo({ userProfile }) {
  const classes = useStyles();
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(userProfile.avatarImgPath, {
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
    if (userProfile.avatarImgPath) {
      getImage();
    }
  }, [userProfile]);

  return (
    <div>
      <div className={classes.root}>
        <Card elevation={0} className={classes.header}>
          <CardActionArea>
            <S3Image
              S3Key={userProfile.backGroundImgPath}
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
              <Avatar
                alt="avatar"
                src={avatarURL}
                sx={{ width: 150, height: 150 }}
                className={classes.avatar}
              />
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
