/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-19 09:19:47
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/Home/Home.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import ArticleContainer from 'components/ArticleContainer';

const Home = (): React.ReactElement => {
  return (
    <Main>
      {/* 暂时定格局 样式先内联写死 之后再修改 */}
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ 
          flex: 1,
          minHeight: '100vh',
          borderRadius: '12px',
          margin: '0px 4px',
          backgroundColor: '#ffffff'  }}>123</Box>
        
        <Box sx={{ 
          flex: 2,
          minHeight: '100vh',
          borderRadius: '12px',
          margin: '0px 4px',
          backgroundColor: '#ffffff'  }}>
          <ArticleContainer />
        </Box>

        <Box sx={{flex: 1}}>
          <Box sx={{ 
            height: '30%',
            borderRadius: '12px',
            margin: '0px 4px',
            backgroundColor: '#ffffff'  }}>123</Box>
          <Box sx={{ 
            height: '50%',
            borderRadius: '12px',
            margin: '8px 4px',
            backgroundColor: '#ffffff'  }}>123</Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;