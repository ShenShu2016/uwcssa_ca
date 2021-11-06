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
import {
  postLike,
  putLike,
  removeLike,
} from "../../../redux/reducers/generalSlice";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import S3Image from "../../S3/S3Image";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";

// import {
//   changeLike,
//   removeLike,
//   setLike,
// } from "../../../redux/actions/generalAction";

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
  const [likesDetail, setLikesDetail] = useState({
    like: 0,
    disLike: 0,
    likeUp: false,
    disLikeUp: false,
  });
  console.log(likesDetail);
  const userID = useSelector((state) => state.userAuth.user.username);
  const { id, content, imgS3Keys, tags, topic, createdAt, user, owner } =
    article;

  useEffect(() => {
    if (Object.keys(article).length !== 0) {
      setLikesDetail({
        like: article.likes.items.filter((x) => x.like === true).length,
        disLike: article.likes.items.filter((x) => x.like === false).length,
        likeUp:
          article.likes.items.filter(
            (x) => x.like === true && x.owner === userID
          ).length >= 1,
        disLikeUp:
          article.likes.items.filter(
            (x) => x.like === false && x.owner === userID
          ).length >= 1,
      });
    }
  }, [article, userID]);

  const handleLikeBTNClick = async (event) => {
    const itemID = id;
    const isLike = true;
    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      const response = await dispatch(postLike({ itemID, userID, isLike }));
      if (response.meta.requestStatus === "fulfilled") {
        console.log(response);
        setLikesDetail({
          ...likesDetail,
          like: likesDetail.like + 1,
          likeUp: true,
          disLikeUp: false,
        });
      }
    } else if (likesDetail.likeUp === true) {
      const response = await dispatch(removeLike({ itemID, userID }));
      if (response.meta.requestStatus === "fulfilled") {
        setLikesDetail({
          ...likesDetail,
          like: likesDetail.like - 1,
          likeUp: false,
          disLikeUp: false,
        });
      }
    } else if (likesDetail.likeUp === false && likesDetail.disLikeUp === true) {
      const response = await dispatch(putLike({ itemID, userID, isLike }));
      if (response.meta.requestStatus === "fulfilled") {
        setLikesDetail({
          ...likesDetail,
          like: likesDetail.like + 1,
          disLike: likesDetail.disLike - 1,
          likeUp: true,
          disLikeUp: false,
        });
      }
    }
  };

  const handleDisLikeBTNClick = async (event) => {
    const itemID = id;
    const isLike = false;

    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      const response = await dispatch(postLike({ itemID, userID, isLike }));
      if (response.meta.requestStatus === "fulfilled") {
        setLikesDetail({
          ...likesDetail,
          disLike: likesDetail.disLike + 1,
          likeUp: false,
          disLikeUp: true,
        });
      }
    } else if (likesDetail.disLikeUp === true) {
      const response = await dispatch(removeLike({ itemID, userID }));
      if (response.meta.requestStatus === "fulfilled") {
        setLikesDetail({
          ...likesDetail,
          disLike: likesDetail.disLike - 1,
          likeUp: false,
          disLikeUp: false,
        });
      }
    } else if (likesDetail.likeUp === true && likesDetail.disLikeUp === false) {
      const response = await dispatch(putLike({ itemID, userID, isLike }));
      if (response.meta.requestStatus === "fulfilled") {
        setLikesDetail({
          like: likesDetail.like - 1,
          disLike: likesDetail.disLike + 1,
          likeUp: false,
          disLikeUp: true,
        });
      }
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
          <S3Image S3Key={imgS3Keys[0]} style={{ width: "100%" }} />

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
            <Button
              size="small"
              color="primary"
              startIcon={
                likesDetail.likeUp ? (
                  <ThumbUpIcon />
                ) : (
                  <ThumbUpAltOutlinedIcon />
                )
              }
              onClick={handleLikeBTNClick}
            >
              {likesDetail.like}
            </Button>
            <Button
              size="small"
              color="primary"
              startIcon={
                likesDetail.disLikeUp ? (
                  <ThumbDownIcon />
                ) : (
                  <ThumbDownOutlinedIcon />
                )
              }
              onClick={handleDisLikeBTNClick}
            >
              {likesDetail.disLike}
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}
