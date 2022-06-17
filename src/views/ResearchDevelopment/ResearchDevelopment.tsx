/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-12 14:21:00
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/ResearchDevelopment.tsx
 * @Description:
 *
 */

import { Box, Divider } from '@mui/material';
import { Features, Hero, Partners, Story, Team } from './components';

import Container from 'components/Container';
import React from 'react';
import { Work } from '@mui/icons-material';

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
