/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 21:16:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:41:51
 * @FilePath: /uwcssa_ca/src/views/ContactPage/ContactPage.tsx
 * @Description:
 *
 */

import { Box, useTheme } from "@mui/material";
import Container from "components/Container";
import React from "react";

import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Newsletter from "./components/Newsletter/Newsletter";
import Form from "./components/Form/Form";

function ContactPage(): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
      <Contact />
      <Box bgcolor="alternate.main">
        <Container>
          <Form />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </>
  );
}

export default ContactPage;
