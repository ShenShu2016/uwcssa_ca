import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import React from "react";
function TempLinkBar() {
  return (
    <div>
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
      </ButtonGroup>
    </div>
  );
}

export default TempLinkBar;
