/*
 * @Author: 李佳修
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 23:21:09
 * @FilePath: /uwcssa_ca/frontend/src/components/BlogWithLargeImage/BlogWithLargeImage.tsx
 * @Description:
 *
 */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */

import './index.css';

import * as htmlparser2 from 'htmlparser2';

import React, { useEffect } from 'react';
import { fetchArticles, selectAllArticles } from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getAuthState } from 'redux/auth/authSlice';
import { useTheme } from '@mui/material/styles';

// import Container from 'components/Container';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
];

const BlogWithLargeImage = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState); //看一下Auth的选项他有可能会返回null 或者false
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法
  console.log('articles', articles);

  useEffect(() => {
    const getArticles = async () => {
      if (isAuth !== null) {
        await dispatch(
          fetchArticles({
            isAuth,
          }),
        );
      }
    };
    getArticles();
  }, [isAuth]);

  return (
    <Box>
      <Grid container>
        {articles.length // 这里我不太明白你想做啥，稍微解释一下
          ? articles.map((item) => {
              // let contentStr = '';
              // const parser = new htmlparser2.Parser({
              //   ontext(text) {
              //     contentStr += text;
              //   },
              // });
              // parser.write(item.content);
              // parser.end();
              return (
                // 用index javascript react 会经常有毛病，key最好用id
                <Grid key={item.id} item width={'100%'}>
                  <Box
                    component={Card}
                    width={'100%'}
                    height={1}
                    borderRadius={0}
                    boxShadow={0}
                    display={'flex'}
                    padding={'12px'}
                    sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
                  >
                    <CardContent
                      sx={{
                        padding: 0,
                        paddingRight: 3,
                        width: { xs: 1, md: '70%' },
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box>
                        {item?.tags
                          ? item?.tags?.items.map((tag) => (
                              <Chip
                                key={tag.tagID}
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
                      <Typography
                        // variant={'h6'}
                        marginTop={1}
                        fontWeight={400}
                        // sx={{ textTransform: 'uppercase' }}
                      >
                        {item.title}
                      </Typography>
                      <Box marginY={1}>
                        <Typography
                          variant={'caption'}
                          color={'text.secondary'}
                          component={'i'}
                        >
                          {item.user.name} - {item.createdAt}
                        </Typography>
                      </Box>
                      <Typography
                        color="text.secondary"
                        sx={{ fontSize: 12 }}
                        className="article-list-text"
                      >
                        {item.coverPageDescription}
                      </Typography>
                    </CardContent>

                    <Box
                      sx={{
                        width: { md: '30%', height: 'auto' },
                      }}
                    >
                      <Box
                        component={'img'}
                        height={1}
                        width={1}
                        src={
                          item.coverPageImgURL ||
                          'https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user/BackGround/92f5ce89-2045-408b-9193-0c2ae95dab3b.jpeg'
                        }
                        alt="..."
                        sx={{
                          objectFit: 'cover',
                          maxHeight: 150,
                          borderRadius: '12px',
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                      <Button
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                </Grid>
              );
            })
          : null}
      </Grid>
    </Box>
  );
};

export default BlogWithLargeImage;
