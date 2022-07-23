/* eslint-disable react/prop-types */
/*
 * @Author: Shen Shu
 * @Date: 2022-05-23 13:50:22
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 18:26:13
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticlePublish/components/MyImageList.tsx
 * @Description:
 *
 */

import {
  Box,
  Button,
  Card,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchUserImageList,
  getNextToken,
  moreUserImageList,
  selectAllUserImages,
} from "redux/userImage/userImageSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import moment from "moment";
import { useSnackbar } from "notistack";

// import ListSubheader from '@mui/material/ListSubheader';

function MyImageList({ useImgFromRecent }) {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const userImages = useAppSelector(selectAllUserImages);
  const nextToken = useAppSelector(getNextToken);
  const { fetchUserImageListStatus } = useAppSelector(
    (state) => state.userImage,
  );
  useEffect(() => {
    if (fetchUserImageListStatus === "idle") {
      dispatch(fetchUserImageList());
    }
  }, []);

  const handleUseImg = (item) => {
    useImgFromRecent(item);
  };

  return (
    <Box sx={{ margin: "8px 0px" }}>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        color="#9e9e9e"
      >
        近期上传图片
      </Typography>
      <Card>
        <ImageList sx={{ width: "100%", height: 450, margin: 0 }}>
          {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Recent Images</ListSubheader>
      </ImageListItem> */}
          {userImages.map((item) => (
            <ImageListItem
              key={item.id}
              style={{ cursor: "pointer" }}
              title="点击使用图片"
              onClick={() => handleUseImg(item)}
            >
              <img
                src={
                  moment().diff(item.createdAt, "seconds") > 100 // 100秒够运行了，最多也就5秒，25秒就会报错
                    ? item.objectThumbnailURL || item.objectURL
                    : item.objectURL
                } // 这边的意思是，如果是刚上传的，这个照片压缩还需要时间，所以用原图。 如果这个图片没有thumbnail 的话就还是用原图，下面也一样
                srcSet={
                  moment().diff(item.createdAt, "seconds") > 100
                    ? item.objectThumbnailURL || item.objectURL
                    : item.objectURL
                }
                alt=""
                loading="lazy"
              />

              <ImageListItemBar
                title={item.name}
                // subtitle={item.type}
                actionIcon={
                  <Tooltip title="复制链接" placement="top" arrow>
                    <IconButton
                      sx={{
                        color: "rgba(255, 255, 255, 0.54)",
                      }}
                      aria-label={`info about ${item.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        try {
                          navigator.clipboard.writeText(
                            item.objectCompressedURL || item.objectURL,
                          );
                          enqueueSnackbar("链接已复制", { variant: "success" });
                        } catch (err) {
                          console.error(err);
                          enqueueSnackbar("复制有误", { variant: "error" });
                        }
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        {nextToken ? (
          <Button
            variant="contained"
            fullWidth
            sx={{ my: "1rem" }}
            onClick={() => {
              dispatch(moreUserImageList(nextToken));
            }}
          >
            Load More
          </Button>
        ) : (
          <Typography> 没有更多了</Typography>
        )}
      </Card>
    </Box>
  );
}

export default MyImageList;
