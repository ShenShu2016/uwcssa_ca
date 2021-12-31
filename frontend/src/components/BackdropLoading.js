import { Backdrop, Box, CircularProgress } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";
import uwcssa from "../static/uwcssa_logo.svg";

const useStyles = makeStyles((theme) => ({
  typo: {
    fontSize: "2.125rem",
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: `translate(-50%,0)`,
    [theme.breakpoints.down("md")]: {
      width: "56%",
      top: "65%",
      fontSize: "1rem",
    },
  },
}));

export default function BackdropLoading({ open = true }) {
  const classes = useStyles();

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
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
      <Box className={classes.typo}>温莎大学中国学生学者联谊会</Box>
    </Backdrop>
  );
}
