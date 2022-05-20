/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-19 20:29:00
 * @FilePath: /uwcssa_ca/frontend/src/layouts/Main/components/Topbar/Topbar.tsx
 * @Description:
 *
 */

import { AccountMenu, NavItem } from './components';
import { Link, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { getAuthState } from 'redux/auth/authSlice';
import { useAppSelector } from 'redux/hooks';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    dashboard: Array<PageItem> | PageItem;
    UWCSSA: Array<PageItem> | PageItem;
    freshman: Array<PageItem> | PageItem;
    house: Array<PageItem> | PageItem;
    jobs: Array<PageItem> | PageItem;
    about: Array<PageItem> | PageItem;
    activity: Array<PageItem> | PageItem;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    UWCSSA: UWCSSAPages,
    dashboard: dashboardPages,
    freshman: freshmanPages,
    house: housePages,
    activity: activityPages,
    jobs: jobsPages,
    about: aboutPages,
  } = pages;

  const isAuth = useAppSelector(getAuthState);

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="UWCSSA"
        height={{ xs: 24, md: 29 }}
        sx={{ textDecoration: 'none' }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/assets/images/uwcssa_logo.svg'
              : '/assets/images/uwcssa_logo.svg'
          }
          height={1}
          width={1}
        />
        <Typography variant="h5" sx={{ ml: '1rem' }}>
          UWCSSA
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'UWCSSA'}
            id={'UWCSSA-pages'}
            items={UWCSSAPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'首页'}
            id={'dashboard-pages'}
            items={dashboardPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'新生手册'}
            id={'freshman-pages'}
            items={freshmanPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'租房'}
            id={'house-pages'}
            items={housePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'活动'}
            id={'activity-pages'}
            items={activityPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'工作机会'}
            id={'jobs-pages'}
            items={jobsPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'关于'}
            id={'about-pages'}
            items={aboutPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          {isAuth ? (
            <AccountMenu />
          ) : (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              //target="blank"
              href="/auth/signIn"
              size="large"
            >
              Sign in
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        {isAuth ? (
          <AccountMenu />
        ) : (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            //target="blank"
            href="/auth/signIn"
            size="small"
            sx={{ mr: '1rem' }}
          >
            Sign in
          </Button>
        )}
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
