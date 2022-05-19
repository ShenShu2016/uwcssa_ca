/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-19 11:11:03
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/Home/Home.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import ArticleContainer from 'components/ArticleContainer';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import UserCardGrid from 'components/UserCardGrid';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import WorkIcon from '@mui/icons-material/Work';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

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
          <Card sx={{ margin: '0px 4px'}}>
            <UserCardGrid/>
          </Card>
          <Card sx={{ margin: '8px 4px' }}>
            <Button fullWidth>新生必读</Button>
          </Card>
          <Card sx={{ margin: '8px 4px', padding: '12px', display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <Card 
                sx={{ 
                  width: '65px',
                  height: '65px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <HomeIcon color="primary" fontSize='large'/>
              </Card>
              <Typography align='center' fontSize={12} p={1}>租房</Typography>
            </Box>
            <Box>
              <Card 
                sx={{ 
                  width: '65px',
                  height: '65px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocalActivityIcon color="primary" fontSize='large'/>
              </Card>
              <Typography align='center' fontSize={12} p={1}>活动</Typography>
            </Box>
            <Box>
              <Card 
                sx={{ 
                  width: '65px',
                  height: '65px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SellIcon color="primary" fontSize='large'/>
              </Card>
              <Typography align='center' fontSize={12} p={1}>二手交易</Typography>
            </Box>
            <Box>
              <Card sx={{ 
                width: '65px',
                height: '65px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <WorkIcon color="primary" fontSize='large'/>
              </Card>
              <Typography align='center' fontSize={12} p={1}>工作机会</Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;