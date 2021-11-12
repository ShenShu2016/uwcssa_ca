import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { postLike, putLike, removeLike } from "../redux/reducers/generalSlice";
import { useDispatch, useSelector } from "react-redux";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function LikeButtonGroup({ item }) {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userAuth.user.username);
  const { id } = item;
  //   console.log("我是item", item);
  const [likesDetail, setLikesDetail] = useState({
    like: 0,
    disLike: 0,
    likeUp: false,
    disLikeUp: false,
  });
  //   console.log(likesDetail);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      setLikesDetail({
        like: item.likes.items.filter((x) => x.like === true).length,
        disLike: item.likes.items.filter((x) => x.like === false).length,
        likeUp:
          item.likes.items.filter((x) => x.like === true && x.owner === userID)
            .length >= 1,
        disLikeUp:
          item.likes.items.filter((x) => x.like === false && x.owner === userID)
            .length >= 1,
      });
    }
  }, [item, userID]);

  const handleLikeBTNClick = async (event) => {
    const itemID = id;
    const isLike = true;
    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      setLikesDetail({
        ...likesDetail,
        like: likesDetail.like + 1,
        likeUp: true,
        disLikeUp: false,
      });
      const response = await dispatch(postLike({ itemID, userID, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        console.log(response);
        // Do something later
      }
    } else if (likesDetail.likeUp === true) {
      setLikesDetail({
        ...likesDetail,
        like: likesDetail.like - 1,
        likeUp: false,
        disLikeUp: false,
      });
      const response = await dispatch(removeLike({ itemID, userID }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    } else if (likesDetail.likeUp === false && likesDetail.disLikeUp === true) {
      setLikesDetail({
        ...likesDetail,
        like: likesDetail.like + 1,
        disLike: likesDetail.disLike - 1,
        likeUp: true,
        disLikeUp: false,
      });
      const response = await dispatch(putLike({ itemID, userID, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    }
  };
  const handleDisLikeBTNClick = async (event) => {
    const itemID = id;
    const isLike = false;

    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      setLikesDetail({
        ...likesDetail,
        disLike: likesDetail.disLike + 1,
        likeUp: false,
        disLikeUp: true,
      });
      const response = await dispatch(postLike({ itemID, userID, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    } else if (likesDetail.disLikeUp === true) {
      setLikesDetail({
        ...likesDetail,
        disLike: likesDetail.disLike - 1,
        likeUp: false,
        disLikeUp: false,
      });
      const response = await dispatch(removeLike({ itemID, userID }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    } else if (likesDetail.likeUp === true && likesDetail.disLikeUp === false) {
      setLikesDetail({
        like: likesDetail.like - 1,
        disLike: likesDetail.disLike + 1,
        likeUp: false,
        disLikeUp: true,
      });
      const response = await dispatch(putLike({ itemID, userID, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    }
  };

  return (
    <Box>
      <Button
        size="small"
        color="primary"
        startIcon={
          likesDetail.likeUp ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />
        }
        onClick={handleLikeBTNClick}
      >
        {likesDetail.like}
      </Button>
      <Button
        size="small"
        color="primary"
        startIcon={
          likesDetail.disLikeUp ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />
        }
        onClick={handleDisLikeBTNClick}
      >
        {likesDetail.disLike}
      </Button>
    </Box>
  );
}
