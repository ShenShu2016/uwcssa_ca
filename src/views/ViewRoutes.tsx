/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-04 21:46:51
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
  Developers as DevelopersView,
  EmailConfirmationCover as EmailConfirmationCoverView,
  ForgotPassWordSubmit as ForgotPassWordSubmitView,
  Home,
  Logistics as LogisticsView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetCover as PasswordResetCoverView,
  ReduxCounter as ReduxCounterView,
  ResearchDevelopment as ResearchDevelopmentView,
  SigninCover as SigninCoverView,
  SignupCover as SignupCoverView,
} from 'views';
import { getAuthState, getIsAdmin } from 'redux/auth/authSlice';

import ArticleAPI from './Demo/ArticleAPI';
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
      renderer: (params = {}): JSX.Element => <LogisticsView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/dashboard',
      renderer: (): JSX.Element => <Home />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/reduxCounter',
      renderer: (params = {}): JSX.Element => <ReduxCounterView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    // {
    //   path: '/admin/*',
    //   renderer: (): JSX.Element => <AdministratorPage />,
    //   isAllowed: isAdmin,
    //   redirectPath: '/404',
    // },
    // {
    //   path: '/home',
    //   renderer: (params = {}): JSX.Element => <HomeView {...params} />,
    // },
    // {
    //   path: '/customers',
    //   renderer: (params = {}): JSX.Element => <CustomersView {...params} />,
    // },
    // {
    //   path: '/hire-us',
    //   renderer: (params = {}): JSX.Element => <HireUsView {...params} />,
    // },
    // {
    //   path: '/faq',
    //   renderer: (params = {}): JSX.Element => <FaqView {...params} />,
    // },
    {
      path: '/career',
      renderer: (params = {}): JSX.Element => <CareerListingView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    // {
    //   path: '/career-listing-minimal',
    //   renderer: (params = {}): JSX.Element => (
    //     <CareerListingMinimalView {...params} />
    //   ),
    // },
    {
      path: '/careerOpening',
      renderer: (params = {}): JSX.Element => <CareerOpeningView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    // {
    //   path: '/contact-page',
    //   renderer: (params = {}): JSX.Element => <ContactPageView {...params} />,
    // },
    // {
    //   path: '/coworking',
    //   renderer: (params = {}): JSX.Element => <CoworkingView {...params} />,
    // },
    // {
    //   path: '/e-learning',
    //   renderer: (params = {}): JSX.Element => <ElearningView {...params} />,
    // },
    // {
    //   path: '/enterprise',
    //   renderer: (params = {}): JSX.Element => <EnterpriseView {...params} />,
    // },
    // {
    //   path: '/service',
    //   renderer: (params = {}): JSX.Element => <ServiceView {...params} />,
    // },
    // {
    //   path: '/web-basic',
    //   renderer: (params = {}): JSX.Element => <WebBasicView {...params} />,
    // },
    // {
    //   path: '/desktop-app',
    //   renderer: (params = {}): JSX.Element => <DesktopAppView {...params} />,
    // },
    // {
    //   path: '/expo',
    //   renderer: (params = {}): JSX.Element => <ExpoView {...params} />,
    // },
    // {
    //   path: '/agency',
    //   renderer: (params = {}): JSX.Element => <AgencyView {...params} />,
    // },
    {
      path: '/research-development-team',
      renderer: (params = {}): JSX.Element => (
        <ResearchDevelopmentView {...params} />
      ),
      isAllowed: true,
      redirectPath: undefined,
      colorInvert: true,
    },
    // {
    //   path: '/design-company',
    //   renderer: (params = {}): JSX.Element => <DesignCompanyView {...params} />,
    // },
    // {
    //   path: '/mobile-app',
    //   renderer: (params = {}): JSX.Element => <MobileAppView {...params} />,
    // },
    // {
    //   path: '/job-listing',
    //   renderer: (params = {}): JSX.Element => <JobListingView {...params} />,
    // },
    // {
    //   path: '/rental',
    //   renderer: (params = {}): JSX.Element => <RentalView {...params} />,
    // },
    // {
    //   path: '/cloud-hosting',
    //   renderer: (params = {}): JSX.Element => <CloudHostingView {...params} />,
    // },
    // {
    //   path: '/logistics',
    //   renderer: (params = {}): JSX.Element => <LogisticsView {...params} />,
    // },
    // {
    //   path: '/e-commerce',
    //   renderer: (params = {}): JSX.Element => <EcommerceView {...params} />,
    // },
    // {
    //   path: '/help-center',
    //   renderer: (params = {}): JSX.Element => <HelpCenterView {...params} />,
    // },
    // {
    //   path: '/help-center-article',
    //   renderer: (params = {}): JSX.Element => (
    //     <HelpCenterArticleView {...params} />
    //   ),
    // },
    // {
    //   path: '/portfolio-page',
    //   renderer: (params = {}): JSX.Element => <PortfolioPageView {...params} />,
    // },
    // {
    //   path: '/portfolio-masonry',
    //   renderer: (params = {}): JSX.Element => (
    //     <PortfolioMasonryView {...params} />
    //   ),
    // },
    // {
    //   path: '/portfolio-grid',
    //   renderer: (params = {}): JSX.Element => <PortfolioGridView {...params} />,
    // },
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
      path: '/developers',
      renderer: (params = {}): JSX.Element => <DevelopersView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    {
      path: '/contactUs',
      renderer: (params = {}): JSX.Element => <ContactPageView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
    // {
    //   path: '/contact-page-cover',
    //   renderer: (params = {}): JSX.Element => (
    //     <ContactPageCoverView {...params} />
    //   ),
    // },
    // {
    //   path: '/about',
    //   renderer: (params = {}): JSX.Element => <AboutView {...params} />,
    // },
    // {
    //   path: '/about-side-cover',
    //   renderer: (params = {}): JSX.Element => <AboutSideCoverView {...params} />,
    // },
    // {
    //   path: '/pricing',
    //   renderer: (params = {}): JSX.Element => <PricingView {...params} />,
    // },
    // {
    //   path: '/blog-search',
    //   renderer: (params = {}): JSX.Element => <BlogSearchView {...params} />,
    // },
    // {
    //   path: '/blog-newsroom',
    //   renderer: (params = {}): JSX.Element => <BlogNewsroomView {...params} />,
    // },
    {
      path: '/article/:articleId',
      renderer: (params = {}): JSX.Element => <ArticleCoverView {...params} />,
      isAllowed: true,
      redirectPath: '/',
      colorInvert: true,
    },
    // {
    //   path: '/blog-reach-view',
    //   renderer: (params = {}): JSX.Element => <BlogReachViewView {...params} />,
    // },
    {
      path: '/auth/passwordReset',
      renderer: (params = {}): JSX.Element => (
        <PasswordResetCoverView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    {
      path: '/auth/passWordResetSubmit',
      renderer: (params = {}): JSX.Element => (
        <ForgotPassWordSubmitView {...params} />
      ),
      isAllowed: isAuth,
      redirectPath: '/',
    },
    // {
    //   path: '/password-reset-simple',
    //   renderer: (params = {}): JSX.Element => (
    //     <PasswordResetSimpleView {...params} />
    //   ),
    // },
    // {
    //   path: '/signin-simple',
    //   renderer: (params = {}): JSX.Element => <SigninSimpleView {...params} />,
    // },
    {
      path: '/auth/signIn',
      renderer: (params = {}): JSX.Element => <SigninCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: '/settings/general',
    },
    // {
    //   path: '/signup-simple',
    //   renderer: (params = {}): JSX.Element => <SignupSimpleView {...params} />,
    // },
    {
      path: '/auth/signUp',
      renderer: (params = {}): JSX.Element => <SignupCoverView {...params} />,
      isAllowed: !isAuth,
      redirectPath: '/settings/general',
    },
    {
      path: '/auth/emailConfirmation',
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
    // {
    //   path: '/not-found',
    //   renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
    // },
    {
      path: '/404',
      renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },

    {
      path: '/demo/articleAPI',
      renderer: (params = {}): JSX.Element => <ArticleAPI {...params} />,
      isAllowed: true,
      redirectPath: undefined,
    },
  ];
}

export default ViewRoutes;
