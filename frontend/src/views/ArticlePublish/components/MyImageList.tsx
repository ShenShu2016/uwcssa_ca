/*
 * @Author: Shen Shu
 * @Date: 2022-05-23 13:50:22
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-23 14:04:19
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/components/MyImageList.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import {
  fetchUserImages,
  selectAllUserImages,
} from 'redux/userImage/userImageSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

function MyImageList() {
  const dispatch = useAppDispatch();
  const userImages = useAppSelector(selectAllUserImages);
  useEffect(() => {
    dispatch(fetchUserImages());
  }, []);
  return (
    <ImageList sx={{ width: '100%', height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {userImages.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.objectURL}`}
            srcSet={`${item.objectURL}`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.type}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
                onClick={() => navigator.clipboard.writeText(item.objectURL)}
              >
                <ContentCopyIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default MyImageList;
