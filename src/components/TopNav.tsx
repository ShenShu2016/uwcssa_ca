/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-06-21 01:27:42
 * @LastEditors: Shikai Jin
 * @FilePath: /uwcssa_ca/src/components/TopNav.tsx
 */

import { Button, IconButton } from '@mui/material';

import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import React from 'react';
import ThemeModeToggler from 'components/ThemeModeToggler';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

interface Props {
  colorInvert?: boolean;
}

const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <IconButton
          size="small"
          onClick={() =>
            window.open('https://github.com/ShenShu2016/uwcssa_ca')
          }
          sx={{
            color: colorInvert ? blue[50] : blue[700],
            border: '1px solid #bdbdbd',
            borderRadius: '10px',
          }}
        >
          <GitHubIcon
            fontSize="small"
            sx={{
              height: '20px',
              width: '20px',
            }}
          />
        </IconButton>
      </Box>
      {/* <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/https://github.com/ShenShu2016/uwcssa_cademos"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
        <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              new
            </Typography>
          </Box> 
        </Link> 
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="https://github.com/ShenShu2016/uwcssa_ca/issues"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Issues
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/docs/introduction"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          Docs
        </Link>
      </Box> */}
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

export default TopNav;
