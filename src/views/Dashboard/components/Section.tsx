/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-06-11 16:33:38
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/views/Dashboard/components/Section.tsx
 */

import { Box, Card, Typography } from "@mui/material";

import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  showTitle?: boolean;
  hasPadding?: boolean;
  component?: any;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

function Container({
  children,
  title,
  hasPadding = true,
  showTitle = true,
  component = Card,
  ...rest
}: Props): JSX.Element {
  return (
    <Box {...rest} margin="8px">
      <Typography
        display={showTitle ? "block" : "none"}
        color="text.secondary"
        sx={{ fontSize: 14, marginBottom: "4px" }}
      >
        {title}
      </Typography>
      <Box
        component={component}
        sx={{
          p: hasPadding ? "8px" : "0px",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Container;
