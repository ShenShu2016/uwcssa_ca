import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "start",
  },
}));

export default function AlertDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        报名
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Oops！"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className={classes.text}
          >
            需要登录才能报名哦~ 如果你还没有账户，你可以现在就注册一个（免费）。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/SignUp">
            注册
          </Button>
          <Button component={Link} to="/signIn">
            登入
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
