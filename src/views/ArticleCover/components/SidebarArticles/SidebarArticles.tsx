/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-28 01:00:22
 * @FilePath: /uwcssa_ca/src/views/ArticleCover/components/SidebarArticles/SidebarArticles.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import {
  fetchArticleList,
  selectAllArticles,
} from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getAuthState } from 'redux/auth/authSlice';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const SidebarArticles = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const { articleId } = useParams();
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);
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
  const articles = useAppSelector(selectAllArticles);
  const articlesWhereIdNotEqualToArticleId = articles
    .filter((article) => article.id !== articleId)
    .slice(0, 5);
  return (
    <Box component={Card} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Upcoming updates
      </Typography>
      <Grid container spacing={2}>
        {articlesWhereIdNotEqualToArticleId.map((item, index) => (
          <Grid
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-offset={100}
            data-aos-duration={600}
            item
            xs={12}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  // width: { xs: 1, md: '50%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  height={'100px'}
                  width={'150px'}
                  src={item.coverPageImgURL}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    // maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  flex: 1,
                  padding: '0px 8px',
                  '&:last-child': { paddingBottom: 0 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography fontSize={14} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.user.name} -{' '}
                    {moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  to={`/article/${item.id}`}
                  size={'small'}
                  sx={{
                    width: 'fit-content',
                    padding: 0,
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarArticles;
