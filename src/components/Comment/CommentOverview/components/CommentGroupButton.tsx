/*
 * @Author: Shen Shu
 * @Date: 2022-05-27 13:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-08 19:24:41
 * @FilePath: /uwcssa_ca/src/components/Comment/CommentOverview/components/CommentGroupButton.tsx
 * @Description:
 *
 */

import { IconButton, Stack, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { postLike, removeLike } from 'redux/like/likeSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { Count } from 'redux/count/countSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { getOwnerUserName } from 'redux/auth/authSlice';

function CommentGroupButton({ count, likes }: { count: Count; likes: any }) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(
    likes?.items?.length > 0 || false,
  );
  const [isThumbDown, setIsThumbDown] = useState(false);
  const [likeCount, setLikeCount] = useState(count?.like);
  const ownerUserName = useAppSelector(getOwnerUserName);

  async function handleFavoriteClick() {
    if (isFavorite === false) {
      setIsFavorite(true);
      const createLikeInput = {
        id: ownerUserName + '_' + count.id,
        articleLikesId: count.countArticleId || undefined,
        commentLikesId: count.countCommentId || undefined,
        eventLikesId: count.countEventId || undefined,
        likeCountId: count.id,
        owner: ownerUserName,
      };
      const response = await dispatch(postLike({ createLikeInput }));
      console.log(response);
      if (response.meta.requestStatus === 'fulfilled') {
        setLikeCount(likeCount + 1);
      }
    } else if (isFavorite === true) {
      setIsFavorite(false);
      const response = await dispatch(
        removeLike({ id: ownerUserName + '_' + count.id }),
      );
      console.log(response);
      if (response.meta.requestStatus === 'fulfilled') {
        setLikeCount(likeCount - 1);
      }
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
      {/* <Button>回复</Button> */}
    </Stack>
  );
}

export default CommentGroupButton;
