/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:46:40
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:46:48
 * @FilePath: \uwcssa_ca\frontend\src\views\CareerOpening\CareerOpening.tsx
 * @Description:
 *
 */

import { Application, Main as MainSection, Newsletter } from './components';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Main from 'layouts/Main';
import React from 'react';

const CareerOpening = (): JSX.Element => {
  return (
    <Main>
      <Container>
        <MainSection />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default CareerOpening;
