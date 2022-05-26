/*
 * @Author: 李佳修
 * @Date: 2022-05-21 15:30:41
 * @LastEditTime: 2022-05-25 21:16:16
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/components/AddCoverPic.tsx
 */

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Typography from '@mui/material/Typography';
import { postUserImage } from 'redux/userImage/userImageSlice';
import { styled } from '@mui/material/styles';

// import Button from '@mui/material/Button';

const Input = styled('input')({
  display: 'none',
});

const AddCoverPic = ({
  setImgFile,
}: {
  setImgFile: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.user);
  const [originImg, setOriginImg] = useState<string>();
  //console.log('originImg', originImg);
  const handleImgUpload = async (e) => {
    const targetTable = 'Article';
    const file = e.target.files[0];
    const response = await dispatch(
      postUserImage({ targetTable, file, authUser }),
    );

    if (response.meta.requestStatus === 'fulfilled') {
      setImgFile(response.payload.objectCompressedURL);
      setOriginImg(response.payload.objectURL);
    }
  };

  const handleRemovePic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOriginImg('');
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
        {originImg ? '封面图片' : '添加封面图片'}
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
            {originImg ? (
              <div
                style={{
                  position: 'relative',
                  backgroundImage: `url(${originImg})`,
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
