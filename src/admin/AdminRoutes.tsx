/*
 * @Author: 李佳修
 * @Date: 2022-05-28 16:58:31
 * @LastEditTime: 2022-05-30 20:26:40
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/AdminRoutes.tsx
 */

import {
  AdminDashboard as AdminDashboardView,
  ArticleEdit as ArticleEditView,
  ArticlePublish as ArticlePublishView,
} from 'admin';

import DepartmentDashboard from './Department/DepartmentDashboard';
import React from 'react';
import { getIsAdmin } from 'redux/auth/authSlice';
import { useAppSelector } from 'redux/hooks';

function AdminRoutes(): Array<{
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderer: Function;
  isAllowed: boolean | void;
  redirectPath: string | undefined;
}> {
  //const isAuth = useAppSelector(getAuthState);
  const isAdmin = useAppSelector(getIsAdmin);

  return [
    {
      path: '/admin',
      renderer: (params = {}): JSX.Element => (
        <AdminDashboardView {...params} />
      ),
      isAllowed: isAdmin,
      redirectPath: '/404',
    },
    {
      path: '/admin/article-publish',
      renderer: (): JSX.Element => <ArticlePublishView />,
      isAllowed: isAdmin,
      redirectPath: '/404',
    },
    {
      path: '/admin/article-edit',
      renderer: (): JSX.Element => <ArticleEditView />,
      isAllowed: isAdmin,
      redirectPath: '/404',
    },
    {
      path: '/admin/article-edit/:id',
      renderer: (): JSX.Element => <ArticlePublishView />,
      isAllowed: isAdmin,
      redirectPath: '/404',
    },
    {
      path: '/admin/uwcssa-department',
      renderer: (): JSX.Element => <DepartmentDashboard />,
      isAllowed: isAdmin,
      redirectPath: '/404',
    },
  ];
}

export default AdminRoutes;
