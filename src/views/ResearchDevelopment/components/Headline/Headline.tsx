/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 18:07:29
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-04 18:51:17
 * @FilePath: /uwcssa_ca/src/views/Developers/components/Headline/Headline.tsx
 * @Description:
 *
 */
import { alpha, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

function Headline(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography fontWeight={600} variant="h2" gutterBottom align="center">
          Engineering at UWCSSA
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          We Work Together toward a Common Vision
        </Typography>
      </Box>
    </Box>
  );
}

export default Headline;
