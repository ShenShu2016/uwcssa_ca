import { Typography, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "3rem",
  },
  title: {
    marginTop: "10rem",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",
  },
}));

export default function Success() {
  const classes = useStyles();
  return (
    <Container size="lg">
      <Box className={classes.box}>
        <Typography variant="h2" align="center" gutterBottom>
          报名成功！
        </Typography>
        <Typography component="h6" align="center" className={classes.title}>
          你已成功报名参加本次活动！
          我们将在活动开始前一周内以微信形式通知你，请你耐心等候！
        </Typography>
      </Box>
      <Box className={classes.icon}>
        <CheckCircleIcon sx={{ fontSize: 100, color: green[500] }} />
      </Box>
    </Container>
  );
}
