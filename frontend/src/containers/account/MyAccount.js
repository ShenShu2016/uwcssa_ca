import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    maxWidth: "960px",
    margin: "auto",
    paddingInline: "1rem",
  },
});

export default function MyAccount() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">My Account</Typography>
    </div>
  );
}
