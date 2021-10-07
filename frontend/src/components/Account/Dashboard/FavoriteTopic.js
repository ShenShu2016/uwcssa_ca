import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    marginBlock: "1rem",
  },
}));

export default function FavoriteTopic() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: "350px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            喜欢的论坛类别
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
