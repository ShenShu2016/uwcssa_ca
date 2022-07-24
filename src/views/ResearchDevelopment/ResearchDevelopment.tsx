/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:04:01
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/ResearchDevelopment.tsx
 * @Description:
 *
 */

import { Box, Divider } from "@mui/material";

import Container from "components/Container";
import React from "react";
import { Work } from "@mui/icons-material";
import Hero from "./components/Hero/Hero";

import Features from "./components/Features/Features";
import Partners from "./components/Partners/Partners";
import Story from "./components/Story/Story";
import DevelopTeam from "./components/Team/DevelopTeam";

function ResearchDevelopment(): JSX.Element {
  return (
    <Box>
      <Hero />
      {/* <Container>
        <Headline />
      </Container> */}

      <Container>
        <Story />
      </Container>
      <Box bgcolor="primary.main">
        <Container paddingX="0 !important" maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Container maxWidth="800px !important">
        <Divider />
      </Container>
      <Container>
        <Work />
      </Container>
      <Container maxWidth="800px !important">
        <Divider />
      </Container>
      <Container>
        <DevelopTeam />
      </Container>
    </Box>
  );
}

export default ResearchDevelopment;
