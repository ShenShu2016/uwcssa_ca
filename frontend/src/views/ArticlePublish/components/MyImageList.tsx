/*
 * @Author: Shen Shu
 * @Date: 2022-05-23 13:50:22
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-25 17:43:19
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/components/MyImageList.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import {
  fetchUserImageList,
  selectAllUserImages,
} from 'redux/userImage/userImageSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import moment from 'moment';

function MyImageList() {
  const dispatch = useAppDispatch();
  const userImages = useAppSelector(selectAllUserImages);
  useEffect(() => {
    dispatch(fetchUserImageList());
  }, []);

  return (
    <ImageList sx={{ width: '100%', height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Recent Images</ListSubheader>
      </ImageListItem>
      {userImages.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={
              moment().diff(item.createdAt, 'seconds') > 100 //100秒够运行了，最多也就5秒，25秒就会报错
                ? item.objectThumbnailURL || item.objectURL
                : item.objectURL
            } //这边的意思是，如果是刚上传的，这个照片压缩还需要时间，所以用原图。 如果这个图片没有thumbnail 的话就还是用原图，下面也一样
            srcSet={
              moment().diff(item.createdAt, 'seconds') > 100
                ? item.objectThumbnailURL || item.objectURL
                : item.objectURL
            }
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
                onClick={() =>
                  navigator.clipboard.writeText(
                    item.objectCompressedURL || item.objectURL,
                  )
                }
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
