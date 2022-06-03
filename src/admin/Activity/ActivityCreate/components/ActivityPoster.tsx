/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-03 15:42:35
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/ActivityPoster.tsx
 */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSwiper } from 'swiper/react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LinearProgress from '@mui/material/LinearProgress';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

interface ActivityPosterProp {
  posterImage: string;
  setPosterImage: React.Dispatch<React.SetStateAction<string>>
}

const Input = styled('input')({
  display: 'none',
});

const ActivityPoster: React.FC<ActivityPosterProp> = ({ posterImage, setPosterImage }) => {
  const swiper = useSwiper();
  const [uploadImgLoading, setUploadImgLoading] = useState<boolean>(false);

  const handleRemovePic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setPosterImage('');
  };

  return (
    <Box p={'2px'}>
      <Box display='flex' justifyContent='space-between'>
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
      <Box
        height={'110vh'}
        padding='2% 5%'
      >
        <Box width={'100%'} height='100px'>
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
                // onChange={(e) => handleImgUpload(e)}
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
            justifyContent: 'center'
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

export default ActivityPoster;