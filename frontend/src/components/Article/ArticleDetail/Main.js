import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import LikeButtonGroup from "../../LikeButtonGroup";
import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "1rem",
    width: "100%",
  },
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  buttonGroup: {
    marginBlock: "2rem",
  },
}));

export default function Main({ article }) {
  const classes = useStyles();
  // console.log("Main", article);
  const { content, imgS3Keys, tags, topic, createdAt, user, owner } = article;
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  useEffect(() => {
    const getImage = async () => {
      try {
        setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Array.from(imgS3Keys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        setImgKeyFromServer((url) => url.concat(imageAccessURL));
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);
  console.log("imgKeyFromServer", imgKeyFromServer);
  return (
    <div className={classes.root}>
      {article.active !== true ? (
        <LinearProgress />
      ) : (
        <Box className={classes.main}>
          {imgKeyFromServer[0] ? (
            <img
              src={imgKeyFromServer[0]}
              alt="sss"
              style={{ width: "100%" }}
            />
          ) : (
            <Skeleton variant="rectangular" height={300} />
          )}
          <CardActions sx={{ px: 0 }}>
            <Button size="small" color="primary">
              Topic: {topic.name}
            </Button>
          </CardActions>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={<CustomAvatar user={user} link={true} />}
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          {tags.map((data) => {
            return <Chip key={data} label={data} />;
          })}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              className={classes.content}
              component="span"
              style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              {content}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.buttonGroup}>
            <LikeButtonGroup item={article} />
          </Box>
        </Box>
      )}
    </div>
  );
}
