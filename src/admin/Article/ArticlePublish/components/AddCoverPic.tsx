/* eslint-disable react/prop-types */
/*
 * @Author: 李佳修
 * @Date: 2022-05-21 15:30:41
 * @LastEditTime: 2022-06-11 18:26:33
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticlePublish/components/AddCoverPic.tsx
 */

import { Box, Card, LinearProgress, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { postUserImage } from 'redux/userImage/userImageSlice';
import { useSnackbar } from 'notistack';

// import Button from '@mui/material/Button';

const Input = styled('input')({
  display: 'none',
});
// 直接使用父组件记录的图片url 这样可以直接使用recent list里面的图片 两个组件使用单一数据源
const AddCoverPic = ({
  setImgFile,
  imgFile,
}: {
  setImgFile: React.Dispatch<React.SetStateAction<string>>;
  imgFile: string;
}) => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const authUser = useAppSelector((state) => state.auth.user);
  // const [originImg, setOriginImg] = useState<string>();
  const [uploadImgLoading, setUploadIngLoading] = useState<boolean>(false);
  const handleImgUpload = async (e) => {
    // input点击取消之后 change事件仍有可能触发
    // 这个如果value = '' 就是点击取消以后触发的 需要阻止后续动作 不然会弹上传错误的提示
    if (!e.target.value) return;

    const targetTable = 'Article';
    const file = e.target.files[0];
    setUploadIngLoading(true);
    const response = await dispatch(
      postUserImage({ targetTable, file, authUser, compressedWidth: 1920 }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      setImgFile(
        response.payload.objectURL || response.payload.objectCompressedURL,
      );
      // setOriginImg(response.payload.objectURL);
      enqueueSnackbar('图片上传成功', { variant: 'success' });
    } else {
      enqueueSnackbar('图片上传失败', { variant: 'error' });
    }
    setUploadIngLoading(false);
  };

  const handleRemovePic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setImgFile('');
  };

  return (
    <Card
      sx={{
        height: '45vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        color="#9e9e9e"
      >
        {imgFile ? '封面图片' : '添加封面图片'}
      </Typography>
      <Box
        sx={{
          width: '80%',
          height: '80%',
        }}
      >
        <label htmlFor="contained-button-file">
          <Input
            accept="image/jpeg,image/jpg, image/png, image/webp,  image/svg" //目前不支持gif
            id="contained-button-file"
            type="file"
            disabled={uploadImgLoading}
            onChange={(e) => handleImgUpload(e)}
          />
          <Box
            sx={{
              width: '100%',
              height: '100%',
              border: '1px dotted #bdbdbd',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {uploadImgLoading ? (
              <Box sx={{ width: '50%', textAlign: 'center' }}>
                <LinearProgress />
                <Typography
                  fontSize={14}
                  marginTop={1}
                  component="div"
                  color="#9e9e9e"
                >
                  uploading...
                </Typography>
              </Box>
            ) : imgFile ? (
              <div
                style={{
                  position: 'relative',
                  backgroundImage: `url(${imgFile})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                  boxSizing: 'border-box',
                  padding: '8px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    right: '8px',
                  }}
                  onClick={(e) => handleRemovePic(e)}
                >
                  <RemoveCircleIcon style={{ color: '#e57373' }} />
                </div>
              </div>
            ) : (
              <AddAPhotoIcon style={{ fontSize: 40, color: '#9e9e9e' }} />
            )}
          </Box>
        </label>
      </Box>
    </Card>
  );
};

export default AddCoverPic;
