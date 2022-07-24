/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 16:25:03
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/components/Work/Work.tsx
 * @Description:
 *
 */
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import React from "react";

const mock = [
  {
    title: "Your brand platform",
    description:
      "Monetize your website and manage all guest interactions with your own brand, logo and domains.",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration4.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration4--dark.svg",
    id: 1,
  },
  {
    title: "Mobile compatible platform",
    description:
      "Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration1.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg",
    id: 2,
  },
  {
    label: "Client portal access",
    title: "Simple customer dashboards",
    description:
      "Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.",
    illustration:
      "https://assets.maccarianagency.com/svg/illustrations/illustration2.svg",
    illustrationDark:
      "https://assets.maccarianagency.com/svg/illustrations/illustration2--dark.svg",
    id: 3,
  },
];

function Work(): JSX.Element {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color="text.secondary"
          align="center"
        >
          Our work
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }} align="center">
          We are a small agency of talented designers & developers
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align="center"
        >
          Unlike teams from big agencies, we will treat your project as ours. We
          will walk you through our smooth and simple process.
        </Typography>
        <Box marginTop={2} display="flex" justifyContent="center">
          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            onClick={() => window.open("mailto:uwincssa.it@gmail.com")}
          >
            Contact us
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={item.id}
            item
            container
            xs={12}
            spacing={4}
            direction={i % 2 === 1 ? "row-reverse" : "row"}
          >
            <Grid item container alignItems="center" xs={12} sm={6}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
                <Button
                  size="large"
                  sx={{ marginTop: 2 }}
                  endIcon={
                    <Box
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Learn more
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              xs={12}
              sm={6}
            >
              <Box
                component="img"
                src={`${
                  theme.palette.mode === "light"
                    ? item.illustration
                    : item.illustrationDark
                }`}
                alt={item.title}
                width={1}
                maxWidth="80%"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Work;
