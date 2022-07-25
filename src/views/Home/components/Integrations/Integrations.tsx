/*
 * @Author: Shikai Jin
 * @Date: 2022-05-17 22:50:55
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:44:33
 * @FilePath: /uwcssa_ca/src/views/Home/components/Integrations/Integrations.tsx
 * @Description:
 *
 */

import { Avatar, Box, Grid, Typography } from "@mui/material";

import React from "react";

// 暂时先这样，之后再细改
const mock = [
  {
    title: "Github",
    subtitle: "Contribute to our project and help our community!",
    icon: "https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg",
    link: "https://github.com/ShenShu2016/uwcssa_ca",
  },
  {
    title: "WeChat",
    subtitle: "Join our WeChat community and let’s get to know each other.",
    icon: "https://www.logo.wine/a/logo/WeChat/WeChat-Icon-Logo.wine.svg",
  },
  {
    title: "Facebook",
    subtitle: "Follow us on Facebook and keep up-to-date with our latest news.",
    icon: "https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg",
    link: "https://www.facebook.com/uwincssa",
  },
];

function Integrations(): JSX.Element {
  return (
    <Box>
      {/* <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700, color: 'common.white' }}
        >
          Join our community
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          sx={{ color: 'common.white' }}
        >
          Since UWCSSA is an open source project, we want to continue this
          movement too.
        </Typography>
      </Box> */}
      <Grid container spacing={2}>
        {mock.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                onClick={() => window.open(item.link)}
                component={Avatar}
                width={{ xs: 60, md: 80 }}
                height={{ xs: 60, md: 80 }}
                marginBottom={2}
                src={item.icon}
                sx={{
                  position: "relative",
                  top: "0",
                  transition: "top ease 0.3s",
                  "&:hover": { top: "-5px" },
                }}
              />
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                sx={{ fontWeight: 600, color: "common.white" }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "common.white" }} align="center">
                {item.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Integrations;
