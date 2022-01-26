import { Typography, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  useEffect(() => {
    setTimeout(function () {
      history.replace("/event");
    }, 5000);
  }, [history]);

  return (
    <Container size="lg">
      <Box className={classes.box}>
        <Typography variant="h2" align="center" gutterBottom>
          报名成功！
        </Typography>
        <Typography component="h6" align="center" className={classes.title}>
          你已成功报名参加本次活动！请查看邮箱！有任何问题请随时联系我们
          uwincssa.it@gmail.com
        </Typography>
      </Box>
      <Box className={classes.icon}>
        <CheckCircleIcon sx={{ fontSize: 100, color: green[500] }} />
      </Box>
    </Container>
  );
}
