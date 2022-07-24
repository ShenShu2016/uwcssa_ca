/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 01:37:44
 * @FilePath: /uwcssa_ca/src/views/About/components/Application/Application.tsx
 * @Description:
 *
 */
import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Application(): JSX.Element {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          <Typography fontWeight={700} variant="h5" gutterBottom>
            Interested in joining our team?
          </Typography>
          <Typography>Hit us up and we'll get in touch with you.</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button variant="contained" color="primary" size="large">
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Application;
