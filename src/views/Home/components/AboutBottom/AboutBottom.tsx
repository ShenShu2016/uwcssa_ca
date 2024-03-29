/*
 * @Author: Shikai Jin
 * @Date: 2022-05-26 22:30:04
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-25 22:35:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 22:13:52
 * @FilePath: /uwcssa_ca/src/views/Home/components/AboutBottom/AboutBottom.tsx
 * @Description:
 *
 */

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

/* eslint-disable react/no-unescaped-entities */

function AboutBottom(): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Box
            component={LazyLoadImage}
            effect="blur"
            src="https://uwcssats232508-production.s3.us-east-2.amazonaws.com/uwincssa_pictures/nightStar.jpg"
            width={1}
            height={1}
            maxWidth={400}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos="fade-up"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              支持我们
            </Typography>
            <Typography variant="h6" data-aos="fade-up">
              贡献一份力量，帮助我们提高错误修复、网页改进和功能开发的速度。
            </Typography>
            <Box display="flex" justifyContent="left" marginTop={2}>
              <Button variant="contained" color="primary" size="large">
                捐款
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutBottom;
