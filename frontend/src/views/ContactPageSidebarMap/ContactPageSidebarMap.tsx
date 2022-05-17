/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:53:53
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:54:01
 * @FilePath: \uwcssa_ca\frontend\src\views\ContactPageSidebarMap\ContactPageSidebarMap.tsx
 * @Description:
 *
 */

import { Contact, Form } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const ContactPageSidebarMap = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main>
      <Form />
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
          <Contact />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default ContactPageSidebarMap;
