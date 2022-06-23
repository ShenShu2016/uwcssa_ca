/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 23:42:24
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
  freshman:  {
    title: '新生手册',
    href: '/career',
  },
  news: {
    title: '新闻',
    href: '/news',
  },
  // house: [
  //   // {
  //   //   title: 'General Settings',
  //   //   href: '/account-general',
  //   // },
  //   // {
  //   //   title: 'Security Settings',
  //   //   href: '/account-security',
  //   // },
  //   // {
  //   //   title: 'Notifications Options',
  //   //   href: '/account-notifications',
  //   // },
  //   // {
  //   //   title: 'Billing Options',
  //   //   href: '/account-billing',
  //   // },
  //   // {
  //   //   title: 'Sign up: Simple',
  //   //   href: '/signup-simple',
  //   // },
  //   {
  //     title: '正在构建中...',
  //     href: '',
  //   },
  //   // {
  //   //   title: 'Sign in: Simple',
  //   //   href: '/signin-simple',
  //   // },
  //   // {
  //   //   title: 'Sign in: Cover',
  //   //   href: '/auth/signIn',
  //   // },
  //   // {
  //   //   title: 'Password: Simple',
  //   //   href: '/password-reset-simple',
  //   // },
  //   // {
  //   //   title: 'Password Reset: Cover',
  //   //   href: '/auth/passwordReset',
  //   // },
  //   // {
  //   //   title: 'Forgot PassWord Submit',
  //   //   href: '/auth/forgotPassWordSubmit',
  //   // },
  // ],
  activity: {
    title: '活动列表',
    href: '/history-events',
  },
  jobs: [
    {
      title: 'Careers',
      href: '/career',
    },
    {
      title: '某一个职位',
      href: '/career/6566',
    },
  ],
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
