import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import S3Image from "../../S3/S3Image";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";
import { setLike } from "../../../redux/actions/generalAction";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const [likesCount, setLikesCount] = useState({ like: 0, disLike: 0 });

  const { id, content, imgS3Keys, tags, topic, createdAt, user, userID } =
    article;

  useEffect(() => {
    if (Object.keys(article).length !== 0) {
      setLikesCount({
        like: article.likes.items.filter((x) => x.like === true).length,
        disLike: article.likes.items.filter((x) => x.like === false).length,
      });
    }
  }, [article]);

  const handleLikeBTNClick = (event) => {
    const itemID = id;
    const isLike = true;
    const response = dispatch(setLike(itemID, userID, isLike));
    if (response) {
      setLikesCount({ ...likesCount, like: likesCount.like + 1 });
    }
  };

  const handleDisLikeBTNClick = (event) => {
    const itemID = id;
    const isLike = false;
    const response = dispatch(setLike(itemID, userID, isLike));
    if (response) {
      setLikesCount({ ...likesCount, disLike: likesCount.disLike + 1 });
    }
  };
  return (
    <div className={classes.root}>
      {Object.keys(article).length === 0 ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Box className={classes.main}>
          <S3Image S3Key={imgS3Keys[0]} />

          <CardActions sx={{ px: 0 }}>
            <Button size="small" color="primary">
              Topic: {topic.name}
            </Button>
          </CardActions>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={<CustomAvatar user={user} link={true} />}
            title={userID}
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
            <Button
              size="small"
              color="primary"
              startIcon={<ThumbUpIcon />}
              onClick={handleLikeBTNClick}
            >
              {likesCount.like}
            </Button>
            <Button
              size="small"
              color="primary"
              startIcon={<ThumbDownIcon />}
              onClick={handleDisLikeBTNClick}
            >
              {likesCount.disLike}
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}
