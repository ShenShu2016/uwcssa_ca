/*
 * @Author: Shen Shu
 * @Date: 2022-05-27 13:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 22:43:36
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
import { useSnackbar } from 'notistack';

function CommentGroupButton({ count, likes }: { count: Count; likes: any }) {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
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
      console.log(createLikeInput);
      const response = await dispatch(postLike({ createLikeInput }));
      console.log(response);
      if (response.meta.requestStatus === 'fulfilled') {
        setLikeCount(likeCount + 1);
        enqueueSnackbar('ηΉθ΅ζε', { variant: 'success' });
      } else {
        enqueueSnackbar('ηΉθ΅ε€±θ΄₯', { variant: 'error' });
      }
    } else if (isFavorite === true) {
      setIsFavorite(false);
      const response = await dispatch(
        removeLike({ id: ownerUserName + '_' + count.id }),
      );
      console.log(response);
      if (response.meta.requestStatus === 'fulfilled') {
        setLikeCount(likeCount - 1);
        enqueueSnackbar('εζΆηΉθ΅ζε', { variant: 'info' });
      } else {
        enqueueSnackbar('εζΆηΉθ΅ε€±θ΄₯', { variant: 'error' });
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
      <Tooltip title="ηΉδΊδΉζ²‘η¨οΌεθ½θΏζ²‘εε’">
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
      {/* <Button>εε€</Button> */}
    </Stack>
  );
}

export default CommentGroupButton;
