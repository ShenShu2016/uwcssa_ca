import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import Storage from "@aws-amplify/storage";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
});

export default function Main({ article }) {
  const classes = useStyles();
  const [imageURL, setImageURL] = useState(null);
  const {
    // title,
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
  // console.log("imageURL", imageURL);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(imagePath, {
          level: "public",
          expires: 120,
          download: false,
        });
        // console.log("imageAccessURL", imageAccessURL);
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (imagePath) {
      getImage();
    }
  }, [imagePath]);

  return (
    <div className={classes.root}>
      {Object.keys(article.article).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Box className={classes.main}>
          {/* <Typography
            variant="h4"
            className={classes.title}
            sx={{ fontWeight: 700, my: 2 }}
          >
            {title}
          </Typography> */}

          <CardActionArea
            onClick={() => {
              window.open(imageURL);
            }}
          >
            <CardMedia component="img" image={imageURL} />
          </CardActionArea>
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
            avatar={<CustomAvatar username={owner} link={true} />}
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
          />
          <Divider />
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
