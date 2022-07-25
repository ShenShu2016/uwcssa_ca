/*
 * @Author: 李佳修
 * @Date: 2022-05-28 16:58:31
 * @LastEditTime: 2022-07-24 14:56:42
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/AdminRoutes.tsx
 */

import React from "react";
import { getIsAdmin } from "redux/auth/authSlice";
import { useAppSelector } from "redux/hooks";
import ArticleEdit from "./Article/ArticleEdit/ArticleEdit";
import ArticleManagement from "./Article/ArticleManagement/ArticleManagement";
import ArticlePublish from "./Article/ArticlePublish/ArticlePublish";
import DepartmentDashboard from "./Department/DepartmentDashboard/DepartmentDashboard";
import EventCreate from "./Event/EventCreate/EventCreate";
import EventManagement from "./Event/EventManagement/EventManagement";
import FormTest from "./Event/Form/FormTest";
import ResearchDevelopmentTeamDashboard from "./ResearchDevelopmentTeam/ResearchDevelopmentTeamDashboard/ResearchDevelopmentTeamDashboard";
import UserProfileDashboard from "./UserProfile/UserProfileDashboard";
import UwcssaMemberDashboard from "./UwcssaMember/UwcssaMemberDashboard/UwcssaMemberDashboard";

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
        <UserProfileDashboard {...params} />
      ),
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-publish",
      renderer: (): JSX.Element => <ArticlePublish />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-edit",
      renderer: (): JSX.Element => <ArticleManagement />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/article-edit/:id",
      renderer: (): JSX.Element => <ArticleEdit />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/event",
      renderer: (): JSX.Element => <EventManagement />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/activity-create",
      renderer: (): JSX.Element => <EventCreate />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/activity-form-test",
      renderer: (): JSX.Element => <FormTest />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-department",
      renderer: (): JSX.Element => <DepartmentDashboard />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-member",
      renderer: (): JSX.Element => <UwcssaMemberDashboard />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
    {
      path: "/admin/uwcssa-research-development",
      renderer: (): JSX.Element => <ResearchDevelopmentTeamDashboard />,
      isAllowed: isAdmin,
      redirectPath: "/404",
    },
  ];
}

export default AdminRoutes;
