/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:46:40
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:50:05
 * @FilePath: /uwcssa_ca/src/views/CareerOpening/CareerOpening.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import Container from "components/Container";
import React from "react";
import { Application, Main as MainSection, Newsletter } from "./components";

function CareerOpening(): JSX.Element {
  return (
    <>
      <Container>
        <MainSection />
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
