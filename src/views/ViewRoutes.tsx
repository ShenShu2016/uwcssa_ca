/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 16:13:48
 * @FilePath: /uwcssa_ca/src/views/ViewRoutes.tsx
 * @Description:
 *
 */

import React from "react";
import { getAuthState } from "redux/auth/authSlice";
import { useAppSelector } from "redux/hooks";
import UWindsorEmailVerify from "./Settings/UWindsorEmailVerify/UWindsorEmailVerify";
import Security from "./Settings/Security/Security";
import Profile from "./Settings/Profile/Profile";
import Notifications from "./Settings/Notifications/Notifications";
import General from "./Settings/General/General";
import Billing from "./Settings/Billing/Billing";
import ResearchDevelopment from "./ResearchDevelopment/ResearchDevelopment";
import NotFoundCover from "./NotFoundCover/NotFoundCover";
import NewsList from "./News/NewsList/NewsList";
import About from "./About/About";
import CareerListing from "./CareerListing/CareerListing";
import CareerOpening from "./CareerOpening/CareerOpening";
import CompanyTerms from "./CompanyTerms/CompanyTerms";
import ContactPage from "./ContactPage/ContactPage";
import EventDetail from "./Event/EventDetail/EventDetail";
import EventList from "./Event/EventList/EventList";
import EventSignUpSuccessfully from "./Event/EventSignUpSuccessfully/EventSignUpSuccessfully";
import ArticleCover from "./ArticleCover/ArticleCover";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import PasswordResetCover from "./Authorization/PasswordResetCover/PasswordResetCover";
import ForgotPassWordSubmit from "./Authorization/ForgotPassWordSubmit/ForgotPassWordSubmit";
import PreSignUpResetPassWord from "./Authorization/PreSignUpResetPassWord/PreSignUpResetPassWord";
import SigninCover from "./Authorization/SigninCover/SigninCover";
import SignupCover from "./Authorization/SignupCover/SignupCover";
import EmailConfirmationCover from "./Authorization/EmailConfirmationCover/EmailConfirmationCover";

function ViewRoutes(): Array<{
  path: string;
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
      renderer: (params = {}): JSX.Element => <Home {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/dashboard",
      renderer: (): JSX.Element => <Dashboard />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/news",
      renderer: (): JSX.Element => <NewsList />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/history-events",
      renderer: (): JSX.Element => <EventList />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/career",
      renderer: (params = {}): JSX.Element => <CareerListing {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/career/:id",
      renderer: (params = {}): JSX.Element => <CareerOpening {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/terms",
      renderer: (params = {}): JSX.Element => <CompanyTerms {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/about",
      renderer: (params = {}): JSX.Element => <About {...params} />,
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: "/research-development-team",
      renderer: (params = {}): JSX.Element => (
        <ResearchDevelopment {...params} />
      ),
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: "/contactUs",
      renderer: (params = {}): JSX.Element => <ContactPage {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: "/article/:articleId",
      renderer: (params = {}): JSX.Element => <ArticleCover {...params} />,
      isAllowed: true,
      redirectPath: "/",
      colorInvert: true,
    },
    {
      path: "/event/:eventId",
      renderer: (params = {}): JSX.Element => <EventDetail {...params} />,
      isAllowed: true,
      redirectPath: "/",
      colorInvert: true,
    },
    {
      path: "/event/eventSignUpSuccessfully/:eventId",
      renderer: (params = {}): JSX.Element => (
        <EventSignUpSuccessfully {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    }, //! ! 这里会碰到问题 比如每个人都会进去

    {
      path: "/auth/passwordReset",
      renderer: (params = {}): JSX.Element => (
        <PasswordResetCover {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },
    {
      path: "/auth/passWordResetSubmit/:username",
      renderer: (params = {}): JSX.Element => (
        <ForgotPassWordSubmit {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },
    {
      path: "/auth/PreSignUpResetPassWord",
      renderer: (params = {}): JSX.Element => (
        <PreSignUpResetPassWord {...params} />
      ),
      isAllowed: true,
      redirectPath: "/",
    },

    {
      path: "/auth/signIn",
      renderer: (params = {}): JSX.Element => <SigninCover {...params} />,
      isAllowed: !isAuth,
      redirectPath: "/dashboard",
    },

    {
      path: "/auth/signUp",
      renderer: (params = {}): JSX.Element => <SignupCover {...params} />,
      isAllowed: !isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/auth/emailConfirmation", //! ! 这里也不知道怎么处理，如果username 不存在，会报错
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCover {...params} />
      ),
      isAllowed: !isAuth,
      redirectPath: "/settings/general",
    },
    {
      path: "/auth/emailConfirmation/:username", // username is the email
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCover {...params} />
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
      renderer: (params = {}): JSX.Element => <NotFoundCover {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
  ];
}

export default ViewRoutes;
