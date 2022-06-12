/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-06-11 16:32:38
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/views/Dashboard/Dashboard.tsx
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Typography,
  styled,
} from '@mui/material';

import ArticleContainer from 'components/ArticleContainer';
import Entries from './components/Entries';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Section from './components/Section';
import EventContainer from 'components/EventContainer';
import UserCardGrid from 'components/UserCardGrid';

const StickyAccordion = styled(AccordionSummary)(() => ({
  position: 'sticky',
  top: '58px',
  zIndex: 100,
  background: '#ffffff',
}));

const Dashboard = (): React.ReactElement => {
  return (
    <>
      {/* PC端显示界面 */}
      <Box
        sx={{
          display: {
            md: 'flex',
            xs: 'none',
          },
          padding: '24px 5%',
        }}
      >
        <Section
          title="新闻"
          hasPadding={false}
          component={Box}
          sx={{
            flex: 1,
          }}
        >
          <ArticleContainer />
        </Section>

        <Section
          title="活动"
          sx={{
            flex: 2,
            height: 'auto'
          }}
        >
          <EventContainer />
        </Section>

        <Box
          sx={{ flex: 1 }}
          position="sticky"
          top="80px"
          alignSelf="flex-start"
        >
          <Section title="个人信息" hasPadding={false}>
            <UserCardGrid />
          </Section>

          <Card sx={{ margin: '12px 8px' }}>
            <Button fullWidth>新生必读</Button>
          </Card>

          <Section title="功能入口" hasPadding={false} component={Box}>
            <Entries />
          </Section>
        </Box>
      </Box>
      {/* 移动端显示界面 */}
      <Box
        sx={{
          display: {
            md: 'none',
            xs: 'block',
          },
          padding: '8px',
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
          <AccordionDetails sx={{ padding: 0 }}>
            <Section
              title="新闻"
              showTitle={false}
              hasPadding={false}
              component={Box}
              sx={{
                flex: 1,
                minHeight: {
                  xs: 'unset',
                  md: '100vh',
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
          <AccordionDetails sx={{ padding: 0 }}>
            <Section
              title="活动"
              showTitle={false}
              sx={{
                flex: 2,
                minHeight: {
                  xs: 'unset',
                  md: '100vh',
                },
              }}
            >
              {''}
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
          <AccordionDetails sx={{ padding: 0 }}>
            <Section title="个人信息" showTitle={false} hasPadding={false}>
              <UserCardGrid />
            </Section>

            <Card sx={{ margin: '12px 8px' }}>
              <Button fullWidth>新生必读</Button>
            </Card>

            <Section
              title="功能入口"
              hasPadding={false}
              showTitle={false}
              component={Box}
            >
              <Entries />
            </Section>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Dashboard;
