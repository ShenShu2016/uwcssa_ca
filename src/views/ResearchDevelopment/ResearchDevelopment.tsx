/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 17:39:39
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/ResearchDevelopment.tsx
 * @Description:
 *
 */

import { Features, Hero, Partners, Story, Team, Work } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import React from 'react';

const ResearchDevelopment = (): JSX.Element => {
  return (
    <Box>
      <Hero />
      {/* <Container>
        <Headline />
      </Container> */}

      <Container>
        <Story />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Container maxWidth={'800px !important'}>
        <Divider />
      </Container>
      <Container>
        <Work />
      </Container>
      <Container maxWidth={'800px !important'}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>
    </Box>
  );
};

export default ResearchDevelopment;
