/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-05-27 17:38:07
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/Home/components/Section.tsx
 */

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  hasPadding?: boolean;
  component?: any
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const Container = ({ children, title, hasPadding=true, component=Card, ...rest }: Props): JSX.Element => (
  <Box
    {...rest}
    margin={'8px'}
  >
    <Typography
      color="text.secondary"
      sx={{ fontSize: 14, marginBottom: '4px' }}
    >
      {title}
    </Typography>
    <Box
      component={component}
      sx={{
        p: hasPadding ? '8px' : '0px',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Container;
