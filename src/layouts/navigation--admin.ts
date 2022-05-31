/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-30 20:29:51
 * @FilePath: /uwcssa_ca/src/layouts/navigation--admin.ts
 * @Description:
 *
 */

const pages = [
  {
    groupTitle: 'Getting Started',
    id: 'getting-started',
    pages: [
      {
        title: 'Dashboard',
        href: '/admin',
      },
    ],
  },
  {
    groupTitle: '新闻 & 文章管理',
    id: 'Article',
    pages: [
      {
        title: '发布文章',
        href: '/admin/article-publish',
      },
      {
        title: '编辑文章',
        href: '/admin/article-edit',
      },
    ],
  },
  {
    groupTitle: 'UWCSSA Department',
    id: 'uwcssa-department',
    pages: [
      {
        title: 'Department',
        href: '/admin/uwcssa-department',
      },
    ],
  },
  {
    groupTitle: 'UWCSSA Research & Development',
    id: 'uwcssa-research-development',
    pages: [
      {
        title: 'Research & Development',
        href: '/admin/uwcssa-research-development',
      },
    ],
  },
];

export default pages;
