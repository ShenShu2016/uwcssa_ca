/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-05-26 17:30:50
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticleCover/ArticleCover.tsx
 * @Description:
 *
 */
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';
import React, { useEffect } from 'react';
import { fetchArticle, selectArticleById } from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import Main from 'layouts/Main';
import { getAuthState } from 'redux/auth/authSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const ArticleCover = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { articleId } = useParams();
  const article = useAppSelector((state) =>
    selectArticleById(state, articleId),
  );
  // console.log('article', article);
  useEffect(() => {
    const getArticle = async () => {
      if (articleId !== null) {
        await dispatch(
          fetchArticle({
            articleId,
            isAuth,
          }),
        );
      }
    };
    getArticle();
  }, [articleId]);

  return (
    <Main>
      <Box>
        {article && <Hero article={article} />}
        <Container style={{padding: '12px 0px'}}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              {article && <Content article={article} />}
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={4}>
                  <SidebarArticles />
                </Box>
              ) : null}
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <SimilarStories />
        </Container>
        <Container>
          <FooterNewsletter />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default ArticleCover;
