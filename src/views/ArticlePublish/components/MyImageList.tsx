/* eslint-disable react/prop-types */
/*
 * @Author: Shen Shu
 * @Date: 2022-05-23 13:50:22
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-28 15:29:25
 * @FilePath: /uwcssa_ca/src/views/ArticlePublish/components/MyImageList.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import {
  fetchUserImageList,
  selectAllUserImages,
} from 'redux/userImage/userImageSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import moment from 'moment';

function MyImageList({ useImgFromRecent }) {
  const dispatch = useAppDispatch();
  const userImages = useAppSelector(selectAllUserImages);
  const { fetchUserImageListStatus } = useAppSelector(
    (state) => state.userImage,
  );
  useEffect(() => {
    if (fetchUserImageListStatus === 'idle') {
      dispatch(fetchUserImageList());
    }
  }, []);

  const handleUseImg = (item) => {
    useImgFromRecent(item);
  };

  return (
    <Box sx={{ margin: '8px 0px' }}>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        color="#9e9e9e"
      >
        近期上传图片
      </Typography>
      <Card>
        <ImageList sx={{ width: '100%', height: 450, margin: 0 }}>
          {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Recent Images</ListSubheader>
      </ImageListItem> */}
          {userImages.map((item) => (
            <ImageListItem
              key={item.id}
              style={{ cursor: 'pointer' }}
              title="点击使用图片"
              onClick={() => handleUseImg(item)}
            >
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
                alt={''}
                loading="lazy"
              />

              <ImageListItemBar
                title={item.objectCompressedURL || item.objectURL}
                // subtitle={item.type}
                actionIcon={
                  <IconButton
                    sx={{
                      color: 'rgba(255, 255, 255, 0.54)',
                    }}
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
      </Card>
    </Box>
  );
}

export default MyImageList;
