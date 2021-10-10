import { Card, CardContent, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "350px",
    marginBlock: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "92vw",
    },
  },
}));

export default function MyEssencePosts() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            我的精华贴
          </Typography>
          <Typography variant="h5" component="div">
            我的精华贴
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
