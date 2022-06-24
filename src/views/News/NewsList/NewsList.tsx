import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Chip,
  Typography,
} from '@mui/material';
import {
  fetchArticleList,
  selectAllArticles,
} from 'redux/article/articleSlice';
import moment from 'moment';
import { getAuthState } from 'redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
const NewsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法
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

  return (
    <Container>
      <Grid container spacing={2} direction="column" padding={4}>
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
              <CardContent sx={{ width: { xs: '100%', sm: '60%' }, ml: 4 }}>
                <Box mb={1}>
                  {item?.tags
                    ? item?.tags?.items.map((tag, i) => (
                      <Chip
                        key={tag.tagID + i} // 为啥有两个一样的tag
                        label={tag.tagID}
                        component={Link} //用react router
                        to="" //用react router
                        clickable
                        size={'small'}
                        color={'primary'}
                        sx={{ marginRight: 1, fontSize: '12px' }}
                      />
                    ))
                    : null}
                </Box>
                <Box mb={1}>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    {item.title}
                  </Typography>
                  <Box mb={1}>
                    <Typography
                      variant={'caption'}
                      color={'#616161'}
                      component={'i'}
                    >
                      {item.user.name} - {moment(item.createdAt).fromNow()}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    className="article-list-text"
                  >
                    {item.coverPageDescription}
                  </Typography>
                </Box>
                <Button component={Link} to={`/article/${item.id}`}>
                    查看详情
                </Button>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsList;