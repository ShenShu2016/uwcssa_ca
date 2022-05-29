/*
 * @Author: 李佳修
 * @Date: 2022-05-29 09:53:49
 * @LastEditTime: 2022-05-29 10:11:48
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/FullScreenLoading/FullScreenLoading.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const FullScreenLoading: React.FC<{ 
    message?: string;
    loading: boolean;
}> = ({ message='Loading...', loading }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        background: 'rgba(0, 0, 0, 0.6)',
        display: loading ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 10000
      }}>
      <Box width={'30%'}>
        <LinearProgress />
      </Box>
      <Typography
        color="#eeeeee"
        padding={2}
        className="article-list-text"
      >
        {message}
      </Typography>
    </Box>
  );
};

export default FullScreenLoading;