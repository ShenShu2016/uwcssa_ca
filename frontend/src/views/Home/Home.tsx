/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-19 10:01:42
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/Home/Home.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import ArticleContainer from 'components/ArticleContainer';
import Card from '@mui/material/Card';
import UserCardGrid from 'components/UserCardGrid';
const Home = (): React.ReactElement => {
  return (
    <Main>
      {/* 暂时定格局 样式先内联写死 之后再修改 */}
      <Box sx={{ display: 'flex' }}>
        <Card sx={{ 
          flex: 1,
          minHeight: '100vh',
          margin: '0px 4px',
        }}>123</Card>
        
        <Card sx={{ 
          flex: 3,
          minHeight: '100vh',
          margin: '0px 4px',
        }}>
          <ArticleContainer />
        </Card>

        <Box sx={{flex: 1}}>
          <Card sx={{ 
            flex: 1,
            margin: '0px 4px',
          }}>
            <UserCardGrid/>
          </Card>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;