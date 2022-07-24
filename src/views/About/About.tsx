/*
 * @Author: Shikai Jin
 * @Date: 2022-06-02 20:53:01
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:36:39
 * @FilePath: /uwcssa_ca/src/views/About/About.tsx
 * @Description:
 *
 */

import Container from "components/Container";
import { Divider } from "@mui/material";
import React from "react";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Team from "./components/Team/Team";
import Gallery from "./components/Gallery/Gallery";
import Application from "./components/Application/Application";

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
