/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-07 19:49:27
 * @FilePath: /uwcssa_ca/src/views/Developers/Developers.tsx
 * @Description:
 *
 */

import { Headline, Hero, Partners, Story, Team, Work } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import React from 'react';

const Developers = (): JSX.Element => {
  return (
    <Box>
      <Hero />
      {/* <Container>
        <Headline />
      </Container> */}
      {/* <Container maxWidth={'800px !important'}>
        <Divider />
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

export default Developers;
