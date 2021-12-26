import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "110px",
    minWidth: "100px",
    padding: 0,
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#3f50b5",
    color: "#fff",
    marginBottom: "0.5rem",
    borderRadius: "16px 0 0 0",
    background: "#FFFFFF",
    // borderLeft: `3px solid #f44336`,
    fontWeight: "bold",
    padding: "8px 16px",
    // margin: spacing(0.5),
  },
}));

const InsideLeftLineTag = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.tag} sx={{}}>
        Finished
      </Box>
    </div>
  );
};

export default InsideLeftLineTag;
