import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import TempLinkBar from "../../../components/Account/TempLinkBar";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    display: "block",
  },
});
const Staff = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TempLinkBar />
      <Typography variant="h4">Staff</Typography>
      <Box>
        <Button
          variant="contained"
          component={Link}
          to="/account/staff/article/postArticle"
        >
          Go Create Article
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          component={Link}
          to="/account/staff/uwcssaJob/postUwcssaJob"
        >
          Go Create UwcssaJob
        </Button>
      </Box>
      <Box>
        <Link to="/account/staff/article">Article Preview</Link>
        <div></div>
        <Link to="/account/staff/uwcssaJob">UwcssaJob Preview</Link>
      </Box>
    </div>
  );
};

export default Staff;
