/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-07 19:54:14
 * @FilePath: /uwcssa_ca/src/layouts/navigation--main.ts
 * @Description:
 *
 */
// 如果每个分类下是数组 那么就有下拉菜单 如果是对象 就是点击直接跳转
const pages = {
  UWCSSA: [
    // {
    //   title: 'Mobile App',
    //   href: '/mobile-app',
    // },
    // {
    //   title: 'Desktop App',
    //   href: '/desktop-app',
    // },
    // {
    //   title: 'Startup',
    //   href: '/startup',
    // },
    // {
    //   title: 'Expo',
    //   href: '/expo',
    // },
    {
      title: 'Home',
      href: '/',
    },
    {
      title: '后台管理系统',
      href: '/admin',
    },
    // {
    //   title: 'Service',
    //   href: '/service',
    // },
    // {
    //   title: 'Enterprise',
    //   href: '/enterprise',
    // },
    // {
    //   title: 'Cloud Hosting',
    //   href: '/cloud-hosting',
    // },
    // {
    //   title: 'Design Company',
    //   href: '/design-company',
    // },
    // {
    //   title: 'Web Basic',
    //   href: '/web-basic',
    // },
    // {
    //   title: 'Overview',
    //   href: '/home',
    // },
    // {
    //   title: 'Agency',
    //   href: '/agency',
    // },
    // {
    //   title: 'E-Learning',
    //   href: '/e-learning',
    // },
    // {
    //   title: 'Coworking',
    //   href: '/coworking',
    // },
    // {
    //   title: 'Rental',
    //   href: '/rental',
    // },
    // {
    //   title: 'Job Listing',
    //   href: '/job-listing',
    // },
    // {
    //   title: 'Logistics',
    //   href: '/logistics',
    // },
    // {
    //   title: 'E-commerce',
    //   href: '/e-commerce',
    // },
  ],
  dashboard: {
    title: 'dashboard',
    href: '/dashboard',
  },
  freshman: {
    title: 'terms',
    href: '/terms',
  },
  house: [
    // {
    //   title: 'General Settings',
    //   href: '/account-general',
    // },
    // {
    //   title: 'Security Settings',
    //   href: '/account-security',
    // },
    // {
    //   title: 'Notifications Options',
    //   href: '/account-notifications',
    // },
    // {
    //   title: 'Billing Options',
    //   href: '/account-billing',
    // },
    // {
    //   title: 'Sign up: Simple',
    //   href: '/signup-simple',
    // },
    {
      title: '正在构建中...',
      href: '',
    },
    // {
    //   title: 'Sign in: Simple',
    //   href: '/signin-simple',
    // },
    // {
    //   title: 'Sign in: Cover',
    //   href: '/auth/signIn',
    // },
    // {
    //   title: 'Password: Simple',
    //   href: '/password-reset-simple',
    // },
    // {
    //   title: 'Password Reset: Cover',
    //   href: '/auth/passwordReset',
    // },
    // {
    //   title: 'Forgot PassWord Submit',
    //   href: '/auth/forgotPassWordSubmit',
    // },
  ],
  activity: [
    // {
    //   title: 'Help Center: Overview',
    //   href: '/help-center',
    // },
    // {
    //   title: 'Help Center: Article',
    //   href: '/help-center-article',
    // },
    // {
    //   title: 'FAQ',
    //   href: '/faq',
    // },
    // {
    //   title: 'Error 404: Simple',
    //   href: '/not-found',
    // },
    {
      title: '正在构件中...',
      href: '',
    },
    // {
    //   title: 'Career Page Minimal',
    //   href: '/career-listing-minimal',
    // },
  ],
  jobs: {
    title: 'careerOpening',
    href: '/careerOpening',
  },
  about: [
    {
      title: '关于我们',
      href: '/about',
    },
    {
      title: '合作伙伴',
      href: '/partners',
    },
    {
      title: 'Research & Development Team',
      href: '/research-development-team',
    },
  ],

  contact: {
    title: 'contact Us',
    href: '/contactUs',
  },
};

export default pages;
