/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:45:55
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-21 00:18:04
 * @FilePath: /uwcssa_ca/frontend/src/views/Demo/articleAPI.tsx
 * @Description:
 *
 */

import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchArticles, selectAllArticles } from 'redux/article/articleSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { getAuthState } from 'redux/auth/authSlice';

const ArticleAPI = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  useEffect(() => {
    if (isAuth !== null) {
      dispatch(fetchArticles({ isAuth }));
    }
  }, [isAuth]);

  const articles = useAppSelector(selectAllArticles);

  return (
    <div>
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
    </div>
  );
};

export default ArticleAPI;
