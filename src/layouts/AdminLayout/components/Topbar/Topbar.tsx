/*
 * @Author: Shen Shu
 * @Date: 2022-05-28 16:04:31
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 20:06:33
 * @FilePath: /uwcssa_ca/src/layouts/AdminLayout/components/Topbar/Topbar.tsx
 * @Description:
 *
 */

import { Link as MUILink, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import { AccountMenu } from 'layouts/Main/components/Topbar/components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { ThemeModeToggler } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={Link}
        to="/"
        title="UWCSSA"
        width={{ xs: 100, md: 120 }}
        sx={{
          textDecoration: 'none',
          color: mode === 'light' ? 'black' : 'white',
        }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? '/assets/images/uwcssa_logo.svg'
              : '/assets/images/uwcssa_logo.svg'
          }
          height={{ xs: 24, md: 29 }}
        />
        <Typography variant="h5" sx={{ ml: '1rem', fontWeight: '700' }}>
          UWCSSA
        </Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={3} sx={{ textDecoration: 'none' }}>
          <AccountMenu />
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://shushengacademy.com/en/"
          >
            Love Me Now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <AccountMenu />
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
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
