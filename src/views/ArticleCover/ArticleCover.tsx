/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-26 22:27:39
 * @FilePath: /uwcssa_ca/src/views/ArticleCover/ArticleCover.tsx
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
import {
  insertAllComments,
  removeAllComments,
  selectAllComments,
} from 'redux/comment/commentSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import CommentOverview from 'components/Comment/CommentOverview';
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
  const comments = useAppSelector(selectAllComments);
  // console.log('article', article);
  useEffect(() => {
    const getArticle = async () => {
      if (articleId !== null) {
        const response = await dispatch(
          fetchArticle({
            articleId,
            isAuth,
          }),
        );
        //console.log('response', response);
        dispatch(insertAllComments(response.payload.comments.items)); //这种方法不太好
      }
    };
    getArticle();
    return () => {
      dispatch(removeAllComments());
    };
  }, [articleId]);

  return (
    <Main colorInvert={true}>
      <Box>
        {article && <Hero article={article} />}
        <Container style={{ padding: '12px 0px' }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              {article && <Content article={article} />}
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={2}>
                  <SidebarArticles />
                </Box>
              ) : null}
              {!isAuth && <SidebarNewsletter />}
            </Grid>
          </Grid>
          {comments && <CommentOverview comments={comments} />}
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
