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
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button component={Link} to="/account/dashboard">
          Dashboard
        </Button>
        <Button component={Link} to="/account/profile">
          Profile
        </Button>
        <Button component={Link} to="/account/myAccount">
          My Account
        </Button>
        <Button component={Link} to="/account/staff">
          Staff Only
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TempLinkBar;
