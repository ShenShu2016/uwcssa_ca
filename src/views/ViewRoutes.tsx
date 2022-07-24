/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:40:15
 * @FilePath: /uwcssa_ca/src/views/ViewRoutes.tsx
 * @Description:
 *
 */

import {
  About as AboutView,
  ArticleCover as ArticleCoverView,
  CareerListing as CareerListingView,
  CareerOpening as CareerOpeningView,
  CompanyTerms as CompanyTermsView,
  ContactPage as ContactPageView,
  Dashboard as DashboardView,
  EmailConfirmationCover as EmailConfirmationCoverView,
  EventDetail as EventDetailView,
  EventList as EventListView,
  EventSignUpSuccessfully as EventSignUpSuccessfullyView,
  ForgotPassWordSubmit as ForgotPassWordSubmitView,
  Home as HomeView,
  NewsList as NewsListView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetCover as PasswordResetCoverView,
  PreSignUpResetPassWord as PreSignUpResetPassWordView,
  ResearchDevelopment as ResearchDevelopmentView,
  SigninCover as SigninCoverView,
  SignupCover as SignupCoverView,
} from "views";

import React from "react";
import { getAuthState } from "redux/auth/authSlice";
import { useAppSelector } from "redux/hooks";
import UWindsorEmailVerify from "./Settings/UWindsorEmailVerify/UWindsorEmailVerify";
import Security from "./Settings/Security/Security";
import Profile from "./Settings/Profile/Profile";
import Notifications from "./Settings/Notifications/Notifications";
import General from "./Settings/General/General";
import Billing from "./Settings/Billing/Billing";

// console.log(isAuth, isAdmin);
function ViewRoutes(): Array<{
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderer: Function;
  isAllowed: boolean | void;
  redirectPath: string | undefined;
  colorInvert?: boolean;
}> {
  const isAuth = useAppSelector(getAuthState);
  // const isAdmin = useAppSelector(getIsAdmin);

  return [
    {
      path: "/",
      renderer: (params = {}): JSX.Element => <HomeView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/dashboard",
      renderer: (): JSX.Element => <DashboardView />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/news",
      renderer: (): JSX.Element => <NewsListView />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/history-events",
      renderer: (): JSX.Element => <EventListView />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/career",
      renderer: (params = {}): JSX.Element => <CareerListingView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/career/:id",
      renderer: (params = {}): JSX.Element => <CareerOpeningView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/terms",
      renderer: (params = {}): JSX.Element => <CompanyTermsView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/about",
      renderer: (params = {}): JSX.Element => <AboutView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: "/research-development-team",
      renderer: (params = {}): JSX.Element => (
        <ResearchDevelopmentView {...params} />
      ),
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: "/contactUs",
      renderer: (params = {}): JSX.Element => <ContactPageView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/article/:articleId",
      renderer: (params = {}): JSX.Element => <ArticleCoverView {...params} />,
      isAllowed: true,
      redirectPath: "/",
      colorInvert: true,
    },
    {
      path: "/event/:eventId",
      renderer: (params = {}): JSX.Element => <EventDetailView {...params} />,
      isAllowed: true,
      redirectPath: "/",
      colorInvert: true,
    },
    {
      path: "/event/eventSignUpSuccessfully/:eventId",
      renderer: (params = {}): JSX.Element => (
        <EventSignUpSuccessfullyView {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    }, //! ! 这里会碰到问题 比如每个人都会进去

    {
      path: "/auth/passwordReset",
      renderer: (params = {}): JSX.Element => (
        <PasswordResetCoverView {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },
    {
      path: "/auth/passWordResetSubmit/:username",
      renderer: (params = {}): JSX.Element => (
        <ForgotPassWordSubmitView {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },
    {
      path: "/auth/PreSignUpResetPassWord",
      renderer: (params = {}): JSX.Element => (
        <PreSignUpResetPassWordView {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },

    {
      path: "/auth/signIn",
      renderer: (params = {}): JSX.Element => <SigninCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: "/dashboard",
    },

    {
      path: "/auth/signUp",
      renderer: (params = {}): JSX.Element => <SignupCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/auth/emailConfirmation", //! ! 这里也不知道怎么处理，如果username 不存在，会报错
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCoverView {...params} />
      ),
      isAllowed: !isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/auth/emailConfirmation/:username", // username is the email
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCoverView {...params} />
      ),
      isAllowed: !isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/settings",
      renderer: (params = {}): JSX.Element => <General {...params} />,
      isAllowed: isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/settings/general",
      renderer: (params = {}): JSX.Element => <General {...params} />,
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/settings/profile",
      renderer: (params = {}): JSX.Element => <Profile {...params} />,
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/settings/uwindsorVerify",
      renderer: (params = {}): JSX.Element => (
        <UWindsorEmailVerify {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/settings/notifications",
      renderer: (params = {}): JSX.Element => <Notifications {...params} />,
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/settings/security",
      renderer: (params = {}): JSX.Element => <Security {...params} />,
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/settings/billing",
      renderer: (params = {}): JSX.Element => <Billing {...params} />,
      isAllowed: isAuth,
      redirectPath: "/",
    },
    {
      path: "/404",
      renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
  ];
}

export default ViewRoutes;
