/*
 * @Author: 李佳修
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-26 18:31:07
 * @FilePath: /uwcssa_ca/src/components/BlogWithLargeImage/BlogWithLargeImage.tsx
 * @Description:
 *
 */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */

import './index.css';

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
import { selectAllArticles } from 'redux/article/articleSlice';
import { useAppSelector } from 'redux/hooks';

const BlogWithLargeImage: React.FC = (): JSX.Element => {
  const articles = useAppSelector(selectAllArticles); // redux 有这种用法

  return (
    <Box>
      <Grid container>
        {articles.length
          ? articles.map((item, index) => {
              return (
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
                    display={'flex'}
                    flexDirection={{
                      md: 'row',
                      xs: 'column-reverse',
                    }}
                    padding={'8px'}
                    sx={{
                      backgroundImage: 'none',
                      bgcolor: 'transparent',
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: 0,
                        paddingRight: 3,
                        width: {
                          md: '65%',
                          xs: '100%',
                        },
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box>
                        {item?.tags
                          ? item?.tags?.items?.map((tag, i) => (
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
                      <Typography
                        // variant={'h6'}
                        color={'#000'}
                        marginTop={1}
                        fontWeight={600}
                        // sx={{ textTransform: 'uppercase' }}
                      >
                        {item.title}
                      </Typography>
                      <Box marginY={0.5}>
                        <Typography
                          variant={'caption'}
                          color={'#616161'}
                          component={'i'}
                        >
                          {item.user.name} - {moment(item.createdAt).fromNow()}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          color="#000"
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
                      sx={{
                        width: { md: '35%', height: 'auto' },
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
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              );
            })
          : null}
      </Grid>
    </Box>
  );
};

export default BlogWithLargeImage;
