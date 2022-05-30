/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-30 09:29:07
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
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StickyAccordion = styled(AccordionSummary)(() => ({
  position: 'sticky',
  top: '58px',
  zIndex: 100,
  background: '#ffffff'
}));

const Home = (): React.ReactElement => {
  return (
    <Main>
      {/* PC端显示界面 */}
      <Box
        sx={{
          display: {
            md: 'flex',
            xs: 'none'
          }, 
          padding: '24px 5%'
        }}
      >
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
      {/* 移动端显示界面 */}
      <Box
        sx={{
          display: {
            md: 'none',
            xs: 'block'
          }, 
          padding: '8px'
        }}
      >
        <Accordion defaultExpanded>
          <StickyAccordion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>新闻</Typography>
          </StickyAccordion>
          <AccordionDetails sx={{padding: 0}}>
            <Section 
              title='新闻'
              showTitle={false}
              hasPadding={false}
              component={Box}
              sx={{ 
                flex: 1,
                minHeight: {
                  xs: 'unset',
                  md: '100vh'
                },
              }}
            >
              <ArticleContainer />
            </Section>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <StickyAccordion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>活动</Typography>
          </StickyAccordion>
          <AccordionDetails sx={{padding: 0}}>
            <Section
              title='活动'
              showTitle={false}
              sx={{
                flex: 2,
                minHeight: {
                  xs: 'unset',
                  md: '100vh'
                },
              }}
            >
            </Section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <StickyAccordion
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>个人信息 & 活动入口</Typography>
          </StickyAccordion>
          <AccordionDetails sx={{padding: 0}}>
            <Section
              title='个人信息'
              showTitle={false}
              hasPadding={false}
            >
              <UserCardGrid/>
            </Section>

            <Card sx={{ margin: '12px 8px' }}>
              <Button fullWidth>新生必读</Button>
            </Card>
          
            <Section
              title='功能入口'
              hasPadding={false}
              showTitle={false}
              component={Box}
            >
              <Entries/>
            </Section>
          </AccordionDetails>
        </Accordion>
      </Box>
    
    </Main>
  );
};

export default Home;