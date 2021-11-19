import { Box, Button, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { postLike, putLike, removeLike } from "../redux/reducers/generalSlice";
import { useDispatch, useSelector } from "react-redux";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Tooltip from "@mui/material/Tooltip";
import { useHistory } from "react-router";

export default function LikeButtonGroup({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
  const { id } = item;
  const [likesDetail, setLikesDetail] = useState({
    like: 0,
    likeUserName: "",
    disLike: 0,
    dislikeUserName: "",
    likeUp: false,
    disLikeUp: false,
  });
  //   console.log(likesDetail);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      const likeTrue = item.likes.items.filter((x) => x.like === true);
      const LikeFalse = item.likes.items.filter((x) => x.like === false);
      // console.log(likeTrue);
      setLikesDetail({
        like: likeTrue.length,
        disLike: LikeFalse.length,
        likeUp: likeTrue.filter((x) => x.owner === username).length >= 1,
        disLikeUp: LikeFalse.filter((x) => x.owner === username).length >= 1,
        likeUserName: likeTrue.map((x) => x.owner).join(),
        dislikeUserName: LikeFalse.map((x) => x.owner).join(),
      });
    }
  }, [item, username]);
  // console.log("likesDetail", likesDetail);
  const handleLikeBTNClick = async (event) => {
    if (!isAuthenticated) {
      history.push("/auth/signIn");
      return;
    }
    const itemID = id;
    const isLike = true;
    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      setLikesDetail({
        ...likesDetail,
        like: likesDetail.like + 1,
        likeUp: true,
        disLikeUp: false,
      });

      const response = await dispatch(postLike({ itemID, username, isLike }));
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
      const response = await dispatch(removeLike({ itemID, username }));
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
      const response = await dispatch(putLike({ itemID, username, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    }
  };
  const handleDisLikeBTNClick = async (event) => {
    if (!isAuthenticated) {
      history.push("/auth/signIn");
      return;
    }
    const itemID = id;
    const isLike = false;

    if (likesDetail.likeUp === false && likesDetail.disLikeUp === false) {
      setLikesDetail({
        ...likesDetail,
        disLike: likesDetail.disLike + 1,
        likeUp: false,
        disLikeUp: true,
      });
      const response = await dispatch(postLike({ itemID, username, isLike }));
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
      const response = await dispatch(removeLike({ itemID, username }));
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
      const response = await dispatch(putLike({ itemID, username, isLike }));
      console.log(response);

      if (response.meta.requestStatus === "fulfilled") {
        // Do something later
      }
    }
  };

  return (
    <Box>
      <Tooltip
        title={
          isAuthenticated
            ? `${likesDetail.likeUserName}`
            : `点击登录，登录后查看点赞者`
        }
        TransitionComponent={Zoom}
        arrow
        leaveDelay={200}
      >
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
      </Tooltip>
      <Tooltip
        title={
          isAuthenticated
            ? `${likesDetail.dislikeUserName}`
            : `点击登录，登录后查看点赞者`
        }
        TransitionComponent={Zoom}
        arrow
        leaveDelay={200}
      >
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
      </Tooltip>
    </Box>
  );
}
