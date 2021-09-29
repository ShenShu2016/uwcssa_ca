import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import TempLinkBar from '../../../components/Account/TempLinkBar'
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
const Staff = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TempLinkBar/>
      <Typography variant="h4">Staff</Typography>
      <Button
        variant="contained"
        component={Link}
        to="/account/staff/article/postArticle"
      >
        Go Create Article
      </Button>
    </div>
  );
};

export default Staff;
