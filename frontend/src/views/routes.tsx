/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:33:03
 * @FilePath: \uwcssa_ca\frontend\src\views\routes.tsx
 * @Description:
 *
 */

import {
  CareerListing as CareerListingView,
  CompanyTerms as CompanyTermsView,
  Home as HomeView,
  Logistics as LogisticsView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetCover as PasswordResetCoverView,
  SigninCover as SigninCoverView,
  SignupCover as SignupCoverView,
} from 'views';

import React from 'react';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <LogisticsView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}): JSX.Element => <HomeView {...params} />,
  },
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
  },
  // {
  //   path: '/career-listing-minimal',
  //   renderer: (params = {}): JSX.Element => (
  //     <CareerListingMinimalView {...params} />
  //   ),
  // },
  // {
  //   path: '/career-opening',
  //   renderer: (params = {}): JSX.Element => <CareerOpeningView {...params} />,
  // },
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
  // {
  //   path: '/startup',
  //   renderer: (params = {}): JSX.Element => <StartupView {...params} />,
  // },
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
  },
  // {
  //   path: '/contact-sidebar-map',
  //   renderer: (params = {}): JSX.Element => (
  //     <ContactPageSidebarMapView {...params} />
  //   ),
  // },
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
  // {
  //   path: '/blog-article',
  //   renderer: (params = {}): JSX.Element => <BlogArticleView {...params} />,
  // },
  // {
  //   path: '/blog-reach-view',
  //   renderer: (params = {}): JSX.Element => <BlogReachViewView {...params} />,
  // },
  {
    path: '/passwordReset',
    renderer: (params = {}): JSX.Element => (
      <PasswordResetCoverView {...params} />
    ),
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
  },
  // {
  //   path: '/signup-simple',
  //   renderer: (params = {}): JSX.Element => <SignupSimpleView {...params} />,
  // },
  {
    path: '/auth/signUp',
    renderer: (params = {}): JSX.Element => <SignupCoverView {...params} />,
  },
  // {
  //   path: '/account-billing',
  //   renderer: (params = {}): JSX.Element => <AccountBillingView {...params} />,
  // },
  // {
  //   path: '/account-general',
  //   renderer: (params = {}): JSX.Element => <AccountGeneralView {...params} />,
  // },
  // {
  //   path: '/account-notifications',
  //   renderer: (params = {}): JSX.Element => (
  //     <AccountNotificationsView {...params} />
  //   ),
  // },
  // {
  //   path: '/account-security',
  //   renderer: (params = {}): JSX.Element => <AccountSecurityView {...params} />,
  // },
  // {
  //   path: '/not-found',
  //   renderer: (params = {}): JSX.Element => <NotFoundView {...params} />,
  // },
  {
    path: '/404',
    renderer: (params = {}): JSX.Element => <NotFoundCoverView {...params} />,
  },
];

export default routes;
