/*
 * @Author: 李佳修
 * @Date: 2022-05-21 15:30:41
 * @LastEditTime: 2022-05-22 16:20:53
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/components/AddCoverPic.tsx
 */

import React, { useState } from 'react';

import API from '@aws-amplify/api';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Storage from '@aws-amplify/storage';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// import Button from '@mui/material/Button';

const Input = styled('input')({
  display: 'none',
});

const AddCoverPic = () => {
  const [imgFile, setImgFile] = useState('');

  const handleImgUpload = async (e) => {
    console.log(e.target.files[0]);
    const storageResult = await Storage.put(
      'what/test.png',
      e.target.files[0],
      {
        // level: 'protected',
        contentType: 'image/png',
      },
    );
    console.log(storageResult);
    setImgFile(URL.createObjectURL(e.target.files[0]));
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
            accept="image/*"
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
            {imgFile ? (
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
