/*
 * @Author: Shikai Jin
 * @Date: 2022-06-01 00:01:32
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-25 22:18:35
 * @FilePath: /uwcssa_ca/src/views/ContactPage/components/Hero/Hero.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Hero(): JSX.Element {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems="center" xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              联系我们
            </Typography>
          </Box>
          <Box>
            {/* <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              theFront will make your product look modern and professional while
              saving you precious time.
            </Typography> */}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component="img"
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Hero;
