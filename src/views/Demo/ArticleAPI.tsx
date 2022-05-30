/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:45:55
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:50:16
 * @FilePath: /uwcssa_ca/src/views/Demo/ArticleAPI.tsx
 * @Description:
 *
 */

import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  fetchArticleList,
  selectAllArticles,
} from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { getAuthState } from 'redux/auth/authSlice';

const ArticleAPI = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  useEffect(() => {
    if (isAuth !== null) {
      dispatch(fetchArticleList({ isAuth }));
    }
  }, [isAuth]);

  const articles = useAppSelector(selectAllArticles);

  return (
    <>
      {articles.map((article) => {
        return (
          <Box key={article.id}>
            <Typography variant="h1" color="primary">
              title:{article.title}
            </Typography>
            tags:
            {article.tags.items.map((tag) => {
              return <Button key={tag.tagID}>{tag.tagID}</Button>;
            })}
            user: {article.user.name}
            <Typography variant="body1">
              {JSON.stringify(article, null, 4)}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default ArticleAPI;
