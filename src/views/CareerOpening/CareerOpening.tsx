/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:46:40
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:39:38
 * @FilePath: /uwcssa_ca/src/views/CareerOpening/CareerOpening.tsx
 * @Description:
 *
 */

import { Box } from "@mui/material";
import Container from "components/Container";
import React from "react";
import Application from "./components/Application/Application";
import Main from "./components/Main/Main";
import Newsletter from "./components/Newsletter/Newsletter";

function CareerOpening(): JSX.Element {
  return (
    <>
      <Container>
        <Main />
      </Container>
      <Box bgcolor="alternate.main">
        <Container>
          <Application />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </>
  );
}

export default CareerOpening;
