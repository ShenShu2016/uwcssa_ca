/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:08:28
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/components/Story/Story.tsx
 * @Description:
 *
 */

import { Box, Grid, Typography } from "@mui/material";

import React from "react";

function Story(): JSX.Element {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant="h4">
            A Word About Open-source
          </Typography>
          <Typography variant="h6" marginTop={4} sx={{ fontStyle: "italic" }}>
            “It is not our abilities that show what we truly are… it is our
            choices.”
          </Typography>
          <Typography variant="body1">
            — Albus Dumbledore, Harry Potter & the Chamber of Secrets
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="p" color="text.secondary" fontWeight={400}>
            We leverage our tech stack to reflect who we are: a fast-growing
            team committed to integrating with the latest and greatest - when it
            makes sense - in order to offer the best possible experience for our
            students. Our backend is built primarily using AWS Amplify. We use
            TypeScript, React and MUI for our frontend.
            <br />
            <br />
            You can think of our products as open source projects.
          </Typography>
        </Grid>
        {/* 这里放使用的技术工具 */}
        {/* <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
            {[
              'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg',
              'https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg',
              'https://www.logo.wine/a/logo/TypeScript/TypeScript-Logo.wine.svg',
              'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg',
              'https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg',
            ].map((item, i) => (
              <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Story;
