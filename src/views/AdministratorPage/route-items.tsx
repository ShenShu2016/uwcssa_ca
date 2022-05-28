/*
 * @Author: 李佳修
 * @Date: 2022-05-28 16:58:31
 * @LastEditTime: 2022-05-28 17:24:21
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/AdministratorPage/route-items.tsx
 */
import React from 'react';
import AdminDashboard from 'views/AdminDashboard';
import ArticlePublish from 'views/ArticlePublish';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ArticleIcon from '@mui/icons-material/Article';

export default [
  {
    path: 'dashboard',
    component: <AdminDashboard />,
    key: 'dashboard',
    label: '总览',
    icon: <DomainVerificationIcon />
  },{
    path: 'article-publish',
    component: <ArticlePublish />,
    key: 'article-publish',
    label: '发布文章',
    icon: <ArticleIcon />
  }
];