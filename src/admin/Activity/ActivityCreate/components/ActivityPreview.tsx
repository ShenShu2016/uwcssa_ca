/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-01 14:07:55
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/ActivityPreview.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSwiper } from 'swiper/react';

const ActivityPreview: React.FC = () => {
  const swiper = useSwiper();

  return (
    <Box height='80vh'>
      <Box>
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
            配置报名表单
        </Button>
      </Box>
    </Box>
  );
};

export default ActivityPreview;