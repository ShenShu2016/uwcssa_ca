import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import Edit from "./Info/Edit";
import EditIcon from "@mui/icons-material/Edit";
import S3Image from "../../S3/S3Image";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../../../Hooks/usePermit";

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

export default function BasicInfo({ user, ownerID }) {
  const classes = useStyles();
  const [editOpen, setEditOpen] = useState(false);

  const isPermit = usePermit(ownerID, "admin");

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(user.avatarImgPath, {
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
    if (user.avatarImgPath) {
      getImage();
    }
  }, [user]);
  return (
    <div>
      <div className={classes.root}>
        <Card elevation={0} className={classes.header}>
          <CardActionArea>
            <S3Image
              S3Key={user.backGroundImgPath}
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
              {isPermit && (
                <Button
                  variant="contained"
                  endIcon={<EditIcon />}
                  color="primary"
                  className={classes.edit}
                  onClick={() => handleEditClickOpen()}
                >
                  点击编辑
                </Button>
              )}
            </div>
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              sx={{ fontWeight: "700" }}
            >
              {user.username}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              sx={{ fontWeight: "700" }}
            >
              {user.lastName} {user.firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.intro}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Edit editOpen={editOpen} user={user} handleEditClose={handleEditClose} />
    </div>
  );
}
