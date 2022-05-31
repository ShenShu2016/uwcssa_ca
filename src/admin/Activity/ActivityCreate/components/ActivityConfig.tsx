import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ActivityConfig: React.FC = () => {
  return (
    <Box height='80vh'>
      <Box mb={2} display='flex' justifyContent='space-between'>
        <Button variant="contained" endIcon={<ArrowBackIcon />}>
           配置报名表单
        </Button>
        <Button variant="contained" endIcon={<ArrowForwardIcon />}>
           完成活动创建
        </Button>
      </Box>
    </Box>
  );
};

export default ActivityConfig;