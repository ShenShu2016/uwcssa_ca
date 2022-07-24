/*
 * @Author: Shen Shu
 * @Date: 2022-05-18 15:31:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 16:17:34
 * @FilePath: /uwcssa_ca/src/views/Authorization/ForgotPassWordSubmit/ForgotPassWordSubmit.tsx
 * @Description:
 *
 */

import { Box, Grid, useTheme } from "@mui/material";

import Container from "components/Container";
import React from "react";
import Form from "./components/Form/Form";
import Headline from "./components/Headline/Headline";

function ForgotPassWordSubmit(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      minHeight={300}
      height="auto"
      position="relative"
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          "url(https://assets.maccarianagency.com/backgrounds/img19.jpg) no-repeat center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: "0.8",
          zIndex: 1,
        }}
      />
      <Container position="relative" zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Headline />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Form />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ForgotPassWordSubmit;
