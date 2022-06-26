/*
 * @Author: 李佳修
 * @Date: 2022-05-30 10:43:28
 * @LastEditTime: 2022-05-30 20:27:36
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticleManagement/ArticleManagement.tsx
 */

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  fetchArticleList,
  selectAllArticles,
} from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { Link } from 'react-router-dom';
import { getAuthState } from 'redux/auth/authSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ArticleManagement = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    const getArticles = async () => {
      if (isAuth !== null && fetchArticleListStatus === 'idle') {
        await dispatch(
          fetchArticleList({
            isAuth,
          }),
        );
      }
    };
    getArticles();
  }, [isAuth, fetchArticleListStatus]);

  return (
    <Container>
      <Grid container spacing={isMd ? 4 : 2} direction="column" padding={4}>
        {articles.map((item, index) => (
          <Grid
            item
            xs={12}
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              display={'flex'}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <CardMedia
                title={item.title}
                image={
                  item.coverPageImgURL ||
                  'https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user/BackGround/6d328ddc-08d7-4f7d-8527-2173349796a7.jpg'
                }
                sx={{
                  height: { xs: 240, sm: 'auto' },
                  width: { xs: 1, sm: 300 },
                }}
              />
              <CardContent sx={{ width: { xs: '100%', sm: '60%' } }}>
                <Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    className="article-list-text"
                  >
                    {item.coverPageDescription}
                  </Typography>
                </Box>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button
                    component={Link}
                    to={`/admin/article-edit/${item.id}`}
                  >
                    编辑
                  </Button>
                  <Button component={Link} to={`/article/${item.id}`}>
                    查看详情
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleManagement;
