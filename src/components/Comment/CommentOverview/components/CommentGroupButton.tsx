/*
 * @Author: Shen Shu
 * @Date: 2022-05-27 13:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 00:36:33
 * @FilePath: /uwcssa_ca/src/components/Comment/CommentOverview/components/CommentGroupButton.tsx
 * @Description:
 *
 */

import { IconButton, Stack, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Button from '@mui/material/Button';
import { Count } from 'redux/count/countSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postLike } from 'redux/like/likeSlice';

function CommentGroupButton({ count }: { count: Count }) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isThumbDown, setIsThumbDown] = useState(false);
  const [likeCount, setLikeCount] = useState(count.like);
  const ownerUserName = useAppSelector(getOwnerUserName);

  async function handleFavoriteClick() {
    const createLikeInput = {
      id: ownerUserName + '_' + count.id,
      commentLikesId: count.countCommentId,
      likeCountId: count.id,
      owner: ownerUserName,
    };
    const response = await dispatch(postLike({ createLikeInput }));
    console.log(response);
    if (response.meta.requestStatus === 'fulfilled') {
      setIsFavorite(true);
      setLikeCount(likeCount + 1);
    }
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <IconButton
        onClick={() => {
          handleFavoriteClick();
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: '#e91e63' }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      {likeCount}
      <Tooltip title="点了也没用，功能还没做呢">
        <IconButton
          onClick={() => {
            setIsThumbDown(!isThumbDown);
          }}
        >
          {isThumbDown ? (
            <ThumbDownIcon color="secondary" />
          ) : (
            <ThumbDownOffAltIcon />
          )}
        </IconButton>
      </Tooltip>
      <Button>回复</Button>
    </Stack>
  );
}

export default CommentGroupButton;
