import React, { component} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  confirm: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

export default function EmailConfirm() {
  const classes = useStyles();

  // 这里还需要fetch邮箱地址


  return (
    <div className={classes.confirm}>
      <h1>
        Email has been confirmed
      </h1>
      <Button
        variant="outlined"
        component={Link}
        to="/resetpassword"
      >
        返回
      </Button>
    </div>
  )
}
