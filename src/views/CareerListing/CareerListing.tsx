/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:27:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:49:59
 * @FilePath: /uwcssa_ca/src/views/CareerListing/CareerListing.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import Container from "components/Container";
import Divider from "@mui/material/Divider";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { About, CompanyValues, Hero, Jobs, Newsletter } from "./components";

function CareerListing(): JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Hero />
        <Container>
          <CompanyValues />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          <About />
        </Container>
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </Box>
      </Box>
      <Box bgcolor="alternate.main">
        <Container maxWidth={1000}>
          <Jobs />
        </Container>
        <Container paddingTop="0 !important">
          <Newsletter />
        </Container>
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          />
        </Box>
      </Box>
    </>
  );
}

export default CareerListing;
