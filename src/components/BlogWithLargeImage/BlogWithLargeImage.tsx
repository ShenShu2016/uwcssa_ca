/*
 * @Author: 李佳修
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-05-30 10:04:15
 * @FilePath: /uwcssa_ca/src/components/BlogWithLargeImage/BlogWithLargeImage.tsx
 * @Description:
 *
 */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */

import './index.css';
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
import Chip from '@mui/material/Chip';
// import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getAuthState } from 'redux/auth/authSlice';
import moment from 'moment';
// import { useTheme } from '@mui/material/styles';

// import Container from 'components/Container';

const BlogWithLargeImage = (): JSX.Element => {
  // const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState); //看一下Auth的选项他有可能会返回null 或者false 现在前面没有load 好user 就不让你进了，所以有可能不需要 ！==null的判断了
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法
  const { fetchArticleListStatus } = useAppSelector((state) => state.article);
  console.log('articles', articles);

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
    <Box>
      <Grid container>
        {articles.length // 这里我不太明白你想做啥，稍微解释一下
          ? articles.map((item, index) => {
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
                <Grid
                  key={item.id}
                  item
                  width={'100%'}
                  mb="8px"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box
                    component={Card}
                    width={'100%'}
                    height={'auto'}
                    position="relative"
                    // borderRadius={0}
                    // boxShadow={0}
                    // display={'flex'}
                    padding={'8px'}
                    sx={{
                      backgroundImage: 'none',
                      bgcolor: 'transparent',
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: 0,
                        // paddingRight: 3,
                        width: 1,
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
                        color={'#ffffff'}
                        marginTop={1}
                        fontWeight={600}
                        // sx={{ textTransform: 'uppercase' }}
                      >
                        {item.title}
                      </Typography>
                      <Box marginY={1}>
                        <Typography
                          variant={'caption'}
                          color={'#eeeeee'}
                          component={'i'}
                        >
                          {item.user.name} - {moment(item.createdAt).fromNow()}
                        </Typography>
                      </Box>
                      <Box minHeight={'60px'}>
                        <Typography
                          color="#eeeeee"
                          sx={{ fontSize: 12 }}
                          className="article-list-text"
                        >
                          {item.coverPageDescription}
                          {/* { contentStr } */}
                        </Typography>
                      </Box>
                      <Button
                        component={Link}
                        color={'primary'}
                        to={`/article/${item.id}`}
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
                        sx={{
                          justifyContent: 'flex-start',
                          padding: '8px 0px 0px 0px',
                          marginTop: 'auto',
                          width: 'fit-content',
                        }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                    <Box
                      position={'absolute'}
                      left="0"
                      top="0"
                      component={'img'}
                      height={'100%'}
                      width={'100%'}
                      zIndex={-2}
                      src={
                        item.coverPageImgURL ||
                        'https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/user/BackGround/92f5ce89-2045-408b-9193-0c2ae95dab3b.jpeg'
                      }
                      alt="..."
                      sx={{
                        objectFit: 'cover',
                        // height: 150,
                        filter: 'blur(3px)',
                      }}
                    />
                    {/* 半透明蒙层 */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        background: 'rgba(0, 0, 0, 0.5)',
                      }}
                    ></Box>
                    {/* <Box
                      sx={{
                        width: { md: '30%', height: 'auto'},
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
                          height: 150,
                          borderRadius: '12px',
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                    </Box> */}
                  </Box>
                  {/* <Divider /> */}
                </Grid>
              );
            })
          : null}
      </Grid>
    </Box>
  );
};

export default BlogWithLargeImage;
