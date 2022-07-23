/*
 * @Author: Shikai Jin
 * @Date: 2022-06-02 20:53:01
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-02 21:21:45
 * @FilePath: /uwcssa_ca/src/views/About/About.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import Container from "components/Container";
import Divider from "@mui/material/Divider";
import React from "react";
import { Application, Gallery, Hero, Story, Team } from "./components";

function About(): JSX.Element {
  return (
    <>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container maxWidth={800} paddingY="0 !important">
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>

      <Container>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingTop="0 !important">
        <Application />
      </Container>
    </>
  );
}

export default About;
