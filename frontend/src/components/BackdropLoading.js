import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

import React from "react";
import { red } from "@mui/material/colors";
import uwcssa from "../static/uwcssa_logo.svg";

export default function BackdropLoading() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box
        sx={{
          position: "absolute",
          display: "inline-flex",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        <CircularProgress
          size={175}
          thickness={2}
          sx={{
            color: red[200],
          }}
        />
        <Box
          component="img"
          src={uwcssa}
          maxHeight="150px"
          maxWidth="150px"
          sx={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: `translate(-50%,0)`,
        }}
      >
        <Typography variant="h4">温莎大学中国学生学者联谊会</Typography>
      </Box>
    </Backdrop>
  );
}
