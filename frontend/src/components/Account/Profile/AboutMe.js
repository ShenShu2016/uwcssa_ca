import { Box, Card, CardContent, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    marginBlock: "1rem",
  },
}));

function AboutMe({ user }) {
  const classes = useStyles();
  return (
    <Card>
      <Box className={classes.title}>
        <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
          About Me
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
          专业: {user.major}
        </Typography>
        <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
          LinkedIn: {user.linkedin}
        </Typography>
        <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
          GitHub: {user.github}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
