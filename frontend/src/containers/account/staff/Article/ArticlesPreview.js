import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
const ArticlesPreview = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">ArticlesPreview</Typography>
    </div>
  );
};

export default ArticlesPreview;
