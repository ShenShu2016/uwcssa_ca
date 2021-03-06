/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-06-12 11:59:17
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/Home/Home.tsx
 * @Description:
 *
 */

import {
  AboutBottom,
  Features,
  Hero,
  Integrations,
  Jobs,
  News,
  Reviews,
  Team,
  Video,
} from './components';
import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import React from 'react';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={3}>
          <Hero />
        </Box>
      </Box>
      {/* <Container>
        <Trucking />
      </Container> */}
      {/* <About /> */}
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <News />
        </Container>
      </Box>
      <Container>
        <Team />
      </Container>
      <Video />
      <Box bgcolor={'#11092d'}>
        <Container>
          <Integrations />
        </Container>
      </Box>
      {/* <Container>
        <Pricings />
      </Container> */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Jobs />
        </Container>
      </Box>
      <Container>
        <AboutBottom />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
    </>
  );
};

export default Home;
