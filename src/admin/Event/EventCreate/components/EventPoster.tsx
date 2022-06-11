/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-10 20:20:45
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventPoster.tsx
 */

import { Box, Button, LinearProgress, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { postUserImage } from 'redux/userImage/userImageSlice';
import { setPosterImage } from 'redux/form/formSlice';
import useMessage from 'hooks/useMessage';
import { useSwiper } from 'swiper/react';

const Input = styled('input')({
  display: 'none',
});

const EventPoster: React.FC = () => {
  const swiper = useSwiper();
  const message = useMessage();
  const dispatch = useAppDispatch();
  const [uploadImgLoading, setUploadImgLoading] = useState<boolean>(false);
  // const [imgFile, setImgFile] = useState<string>('');
  const posterImage = useAppSelector(
    (state) => state.form.createData.posterImage,
  );
  const authUser = useAppSelector((state) => state.auth.user);

  const handleImgUpload = async (e) => {
    // input点击取消之后 change事件仍有可能触发
    // 这个如果value = '' 就是点击取消以后触发的 需要阻止后续动作 不然会弹上传错误的提示
    if (!e.target.value) return;

    const targetTable = 'Article';
    const file = e.target.files[0];
    setUploadImgLoading(true);
    const response = await dispatch(
      postUserImage({ targetTable, file, authUser, compressedWidth: 1920 }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      dispatch(
        setPosterImage(
          response.payload.objectURL || response.payload.objectCompressedURL,
        ),
      );
      // setImgFile(
      //   response.payload.objectURL || response.payload.objectCompressedURL,
      // );
      // setOriginImg(response.payload.objectURL);
      message.success('图片上传成功');
    } else {
      message.error('图片上传失败');
    }
    setUploadImgLoading(false);
  };

  const handleRemovePic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(setPosterImage(''));
  };

  return (
    <Box p={'2px'}>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
          填写活动信息
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => swiper.slideNext()}
        >
          配置报名表单
        </Button>
      </Box>
      <Box height={'110vh'} padding="2% 5%">
        <Box width={'100%'} height="100px">
          <Box
            sx={{
              width: '100%',
              height: '100%',
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
                <AddAPhotoIcon style={{ fontSize: 40, color: '#9e9e9e' }} />
              </Box>
            </label>
          </Box>
        </Box>
        <Box
          sx={{
            border: '1px dotted #bdbdbd',
            borderRadius: '12px',
            height: 'calc(100% - 120px)',
            mt: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
          ) : posterImage ? (
            <div
              style={{
                position: 'relative',
                backgroundImage: `url(${posterImage})`,
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
            <>
              <InsertPhotoIcon style={{ fontSize: 120, color: '#9e9e9e' }} />
              <Typography
                fontSize={14}
                marginTop={1}
                component="div"
                color="#9e9e9e"
              >
                还没有上传海报
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EventPoster;
