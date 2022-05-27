/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-27 17:50:05
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/Home/Home.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import ArticleContainer from 'components/ArticleContainer';
import Card from '@mui/material/Card';
import UserCardGrid from 'components/UserCardGrid';
import Button from '@mui/material/Button';
import Section from './components/Section';
import Entries from './components/Entries';

const Home = (): React.ReactElement => {
  return (
    <Main>
      <Box sx={{ display: 'flex', padding: '24px 5%' }}>

        <Section 
          title='新闻'
          hasPadding={false}
          component={Box}
          sx={{ 
            flex: 1,
            minHeight: '100vh',
          }}
        >
          <ArticleContainer />
        </Section>
        
        <Section
          title='活动'
          sx={{ 
            flex: 2,
            minHeight: '100vh',
          }}
        >
        </Section>

        <Box sx={{flex: 1}} position='sticky' top='80px' alignSelf='flex-start'>
          <Section title='个人信息' hasPadding={false}>
            <UserCardGrid/>
          </Section>

          <Card sx={{ margin: '12px 8px' }}>
            <Button fullWidth>新生必读</Button>
          </Card>
          
          <Section
            title='功能入口'
            hasPadding={false}
            component={Box}
          >
            <Entries/>
          </Section>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;