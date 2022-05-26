/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 21:16:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-19 21:38:27
 * @FilePath: /uwcssa_ca/frontend/src/views/ContactPage/ContactPage.tsx
 * @Description:
 *
 */
import { Contact, Form, Hero, Newsletter } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const ContactPage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
      <Contact />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Form />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default ContactPage;
