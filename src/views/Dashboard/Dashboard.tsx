/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-06-13 18:05:46
 * @LastEditors: 李佳修
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
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import ArticleContainer from 'components/ArticleContainer';
import Entries from './components/Entries';
import EventContainer from 'components/EventContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from './components/Section';
import UserCardGrid from 'components/UserCardGrid';
import { fetchArticleList } from 'redux/article/articleSlice';
import { fetchEventList } from 'redux/event/eventSlice';
import { getAuthState } from 'redux/auth/authSlice';

const StickyAccordion = styled(AccordionSummary)(() => ({
  position: 'sticky',
  top: '58px',
  zIndex: 100,
  background: '#ffffff',
}));

const Dashboard = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState); //看一下Auth的选项他有可能会返回null 或者false 现在前面没有load 好user 就不让你进了，所以有可能不需要 ！==null的判断了
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);
  const { fetchEventListStatus } = useAppSelector((state) => state.event);

  useEffect(() => {
    if (fetchArticleListStatus === 'idle') {
      dispatch(
        fetchArticleList({
          isAuth,
        }),
      );
    }
  }, [fetchArticleListStatus]);

  useEffect(() => {
    if (fetchEventListStatus === 'idle') {
      dispatch(fetchEventList({ isAuth }));
    }
  }, [fetchEventListStatus]);

  return (
    <>
      {/* PC端显示界面 */}
      <Box
        sx={{
          padding: '24px 10%',
        }}
      >
        <Section
          title="活动"
          sx={{
            height: 'auto',
          }}
        >
          <EventContainer />
        </Section>
        <Box
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
          }}
        >
          {/* <Section
            title="新闻"
            hasPadding={false}
            component={Box}
            sx={{
              flex: 1,
            }}
          >
            <ArticleContainer />
          </Section> */}
          <Section
            title="新闻"
            hasPadding={false}
            component={Box}
            sx={{
              flex: 2,
            }}
          >
            <ArticleContainer />
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
