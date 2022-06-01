/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-01 14:06:36
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/ActivityPoster.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSwiper } from 'swiper/react';

const ActivityPoster: React.FC = () => {
  const swiper = useSwiper();

  return (
    <Box height='80vh'>
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
    </Box>
  );
};

export default ActivityPoster;