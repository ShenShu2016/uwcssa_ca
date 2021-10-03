import React from "react";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
function PostUwcssaJob() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Post UwcssaJob</Typography>
    </div>
  );
}

export default connect(null, {})(PostUwcssaJob);
