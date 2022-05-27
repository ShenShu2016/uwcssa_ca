/*
 * @Author: Shen Shu
 * @Date: 2022-05-27 13:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-27 17:22:37
 * @FilePath: /uwcssa_ca/src/components/Comment/CommentOverview/components/CommentGroupButton.tsx
 * @Description:
 *
 */

import { IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

//import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   iconButton: {},
// });
function CommentGroupButton() {
  //const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isThumbDown, setIsThumbDown] = useState(false);
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
    >
      <IconButton
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: '#e91e63' }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
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
      <Button>回复</Button>
    </Stack>
  );
}

export default CommentGroupButton;
