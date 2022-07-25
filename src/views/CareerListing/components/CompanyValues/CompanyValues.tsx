/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:27:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 17:36:25
 * @FilePath: /uwcssa_ca/src/views/CareerListing/components/CompanyValues/CompanyValues.tsx
 * @Description:
 *
 */

import { Box, Grid, Typography } from "@mui/material";

import React from "react";

const mock = [
  {
    title: "Dynamic teams",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Great teammates",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Open communication",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Autonomy and attitude",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Support and win",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Teamwork makes the dream work",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

function CompanyValues(): JSX.Element {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align="center"
          color="text.secondary"
          sx={{ textTransform: "uppercase" }}
          variant="subtitle2"
          fontWeight={600}
        >
          Company values
        </Typography>
        <Typography fontWeight={700} variant="h4" align="center">
          Our company culture
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CompanyValues;
