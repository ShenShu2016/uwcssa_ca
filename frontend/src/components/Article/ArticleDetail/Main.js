import "./Main.css";

import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Storage from "@aws-amplify/storage";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  buttonGroup: {
    marginBlock: "2rem",
  },
});

export default function Main({ article }) {
  const classes = useStyles();
  const [imageURL, setImageURL] = useState("");
  const {
    title,
    content,
    imagePath,
    owner,
    topic,
    type,
    // updatedAt,
    createdAt,
    like,
    unlike,
  } = article.article;
  console.log("imageURL", imageURL);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imagePath, {
          level: "public",
          expires: 120,
          download: false,
        });
        console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL("");
      }
    };
    getImage();
  }, [imagePath]);

  return (
    <div>
      {Object.keys(article.article).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box className={classes.main}>
          <Typography
            variant="h4"
            className={classes.title}
            sx={{ fontWeight: 700, my: 2 }}
          >
            {title}
          </Typography>
          <CardActions sx={{ px: 0 }}>
            <Button size="small" color="primary">
              Type: {type.name}
            </Button>
            <Button size="small" color="primary">
              Topic: {topic.name}
            </Button>
          </CardActions>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={
              <Avatar
                aria-label="recipe"
                className={classes.avatar}
                component={Link}
                to={`/account/profile/${owner}`}
              ></Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          <CardMedia component="img" image={imageURL} />

          <Divider />
          <Box sx={{ my: 2 }}>
            <Typography
              variant="body1"
              className={classes.content}
              component="span"
              style={{ whiteSpace: "pre" }}
            >
              {content}
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.buttonGroup}>
            <Button size="small" color="primary" startIcon={<ThumbUpIcon />}>
              {like.length}
            </Button>
            <Button size="small" color="primary" startIcon={<ThumbDownIcon />}>
              {unlike.length}
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}
