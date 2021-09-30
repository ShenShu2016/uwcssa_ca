import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
}));

const TempLinkBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button component={Link} to="/account/dashboard" variant="contained">
        Dashboard
      </Button>
      <Button component={Link} to="/account/profile" variant="contained">
        Profile
      </Button>
      <Button component={Link} to="/account/myAccount" variant="contained">
        My Account
      </Button>
      <Button component={Link} to="/account/staff" variant="contained">
        Staff Only
      </Button>
    </div>
  );
};

export default TempLinkBar;
