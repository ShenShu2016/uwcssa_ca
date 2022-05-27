/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-05-27 10:15:41
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/Container.tsx
 */
import Box from '@mui/material/Box';
import React from 'react';

interface Props {
  children: React.ReactNode;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const Container = ({ children, ...rest }: Props): JSX.Element => (
  <Box
    // maxWidth={{ sm: 720, md: 1236 }}
    // width={1}
    // margin={'0 auto'}
    boxSizing={'border-box'}
    paddingX='5%'

    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
