/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 22:58:47
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-07 23:11:41
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/ResearchDevelopment.tsx
 * @Description:
 *
 */

import { Process, Reviews } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import React from 'react';

const ResearchDevelopment = (): JSX.Element => {
  return (
    <>
      {/* <Hero /> */}
      {/* <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box> */}

      <Container>
        <Process />
      </Container>
      {/* <Container>
        <Work />
      </Container> */}
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
      {/* <Container>
        <Team />
      </Container> */}
    </>
  );
};

export default ResearchDevelopment;
