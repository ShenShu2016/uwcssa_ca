/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-21 23:42:03
 * @FilePath: /uwcssa_ca/src/views/ViewRoutes.tsx
 * @Description:
 *
 */

import {
  About as AboutView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountProfile as AccountProfileView,
  AccountSecurity as AccountSecurityView,
  ArticleCover as ArticleCoverView,
  CareerListing as CareerListingView,
  CareerOpening as CareerOpeningView,
  CompanyTerms as CompanyTermsView,
  ContactPage as ContactPageView,
  Dashboard as DashboardView,
  EventList as EventListView,
  EmailConfirmationCover as EmailConfirmationCoverView,
  EventDetail as EventDetailView,
  EventSignUpSuccessfully as EventSignUpSuccessfullyView,
  ForgotPassWordSubmit as ForgotPassWordSubmitView,
  Home as HomeView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetCover as PasswordResetCoverView,
  PreSignUpResetPassWord as PreSignUpResetPassWordView,
  ResearchDevelopment as ResearchDevelopmentView,
  SigninCover as SigninCoverView,
  SignupCover as SignupCoverView,
  UWindsorEmailVerify as UWindsorEmailVerifyView,
} from 'views';
import { getAuthState, getIsAdmin } from 'redux/auth/authSlice';

import React from 'react';
import { useAppSelector } from 'redux/hooks';

//console.log(isAuth, isAdmin);
function ViewRoutes(): Array<{
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderer: Function;
  isAllowed: boolean | void;
  redirectPath: string | undefined;
  colorInvert?: boolean;
}> {
  const isAuth = useAppSelector(getAuthState);
  const isAdmin = useAppSelector(getIsAdmin);

  return [
    {
      path: '/',
      renderer: (params = {}): JSX.Element => <HomeView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/dashboard',
      renderer: (): JSX.Element => <DashboardView />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/history-events',
      renderer: (): JSX.Element => <EventListView />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/career',
      renderer: (params = {}): JSX.Element => <CareerListingView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/career/:id',
      renderer: (params = {}): JSX.Element => <CareerOpeningView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/terms',
      renderer: (params = {}): JSX.Element => <CompanyTermsView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/about',
      renderer: (params = {}): JSX.Element => <AboutView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: '/research-development-team',
      renderer: (params = {}): JSX.Element => (
        <ResearchDevelopmentView {...params} />
      ),
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    {
      path: '/contactUs',
      renderer: (params = {}): JSX.Element => <ContactPageView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/article/:articleId',
      renderer: (params = {}): JSX.Element => <ArticleCoverView {...params} />,
      isAllowed: true,
      redirectPath: '/',
      colorInvert: true,
    },
    {
      path: '/event/:eventId',
      renderer: (params = {}): JSX.Element => <EventDetailView {...params} />,
      isAllowed: true,
      redirectPath: '/',
      colorInvert: true,
    },
    {
      path: '/event/eventSignUpSuccessfully/:eventId',
      renderer: (params = {}): JSX.Element => (
        <EventSignUpSuccessfullyView {...params} />
      ),
      isAllowed: true,
      redirectPath: '/',
    }, //!! 这里会碰到问题 比如每个人都会进去

    {
      path: '/auth/passwordReset',
      renderer: (params = {}): JSX.Element => (
        <PasswordResetCoverView {...params} />
      ),
      isAllowed: true,
      redirectPath: '/',
    },
    {
      path: '/auth/passWordResetSubmit/:username',
      renderer: (params = {}): JSX.Element => (
        <ForgotPassWordSubmitView {...params} />
      ),
      isAllowed: true,
      redirectPath: '/',
    },
    {
      path: '/auth/PreSignUpResetPassWord',
      renderer: (params = {}): JSX.Element => (
        <PreSignUpResetPassWordView {...params} />
      ),
      isAllowed: true,
      redirectPath: '/',
    },

    {
      path: '/auth/signIn',
      renderer: (params = {}): JSX.Element => <SigninCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: '/dashboard',
    },

    {
      path: '/auth/signUp',
      renderer: (params = {}): JSX.Element => <SignupCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: '/settings/general',
    },
    {
      path: '/auth/emailConfirmation', //!! 这里也不知道怎么处理，如果username 不存在，会报错
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCoverView {...params} />
      ),
      isAllowed: !isAuth,
      redirectPath: '/settings/general',
    },
    {
      path: '/auth/emailConfirmation/:username', // username is the email
      renderer: (params = {}): JSX.Element => (
        <EmailConfirmationCoverView {...params} />
      ),
      isAllowed: !isAuth,
      redirectPath: '/settings/general',
    },
    {
      path: '/settings',
      renderer: (params = {}): JSX.Element => (
        <AccountGeneralView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/settings/general',
    },
    {
      path: '/settings/general',
      renderer: (params = {}): JSX.Element => (
        <AccountGeneralView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/settings/profile',
      renderer: (params = {}): JSX.Element => (
        <AccountProfileView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/settings/uwindsorVerify',
      renderer: (params = {}): JSX.Element => (
        <UWindsorEmailVerifyView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/settings/notifications',
      renderer: (params = {}): JSX.Element => (
        <AccountNotificationsView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/settings/security',
      renderer: (params = {}): JSX.Element => (
        <AccountSecurityView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/settings/billing',
      renderer: (params = {}): JSX.Element => (
        <AccountBillingView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/404',
      renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
  ];
}

export default ViewRoutes;
