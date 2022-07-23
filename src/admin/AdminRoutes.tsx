/*
 * @Author: 李佳修
 * @Date: 2022-05-28 16:58:31
 * @LastEditTime: 2022-07-21 23:08:54
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/AdminRoutes.tsx
 */

import {
  AdminDashboard as AdminDashboardView,
  ArticleEdit as ArticleEditView,
  ArticleManagement as ArticleManagementView,
  ArticlePublish as ArticlePublishView,
  DepartmentDashboard as DepartmentDashboardView,
  EventCreate as EventCreateView,
  EventManagement as EventManagementView,
  FormTest as FormTestView,
  ResearchDevelopmentTeamDashboard as ResearchDevelopmentTeamDashboardView,
  UserProfileDashboard as UserProfileDashboardView,
  UwcssaMemberDashboard as UwcssaMemberDashboardView,
} from "admin";

import React from "react";
import { getIsAdmin } from "redux/auth/authSlice";
import { useAppSelector } from "redux/hooks";

function AdminRoutes(): Array<{
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderer: Function;
  isAllowed: boolean | void;
  redirectPath: string | undefined;
}> {
  // const isAuth = useAppSelector(getAuthState);
  const isAdmin = useAppSelector(getIsAdmin);

  return [
    // {
    //   path: '/admin',
    //   renderer: (params = {}): JSX.Element => (
    //     <AdminDashboardView {...params} />
    //   ),
    //   isAllowed: isAdmin,
    //   redirectPath: '/404',
    // },
    {
      path: "/admin/users",
      renderer: (params = {}): JSX.Element => (
        <UserProfileDashboardView {...params} />
      ),
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-publish",
      renderer: (): JSX.Element => <ArticlePublishView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-edit",
      renderer: (): JSX.Element => <ArticleManagementView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-edit/:id",
      renderer: (): JSX.Element => <ArticleEditView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/event",
      renderer: (): JSX.Element => <EventManagementView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/activity-create",
      renderer: (): JSX.Element => <EventCreateView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/activity-form-test",
      renderer: (): JSX.Element => <FormTestView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-department",
      renderer: (): JSX.Element => <DepartmentDashboardView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-member",
      renderer: (): JSX.Element => <UwcssaMemberDashboardView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-research-development",
      renderer: (): JSX.Element => <ResearchDevelopmentTeamDashboardView />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
  ];
}

export default AdminRoutes;
