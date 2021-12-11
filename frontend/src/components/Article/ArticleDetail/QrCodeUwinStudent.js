import { Box, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));
export default function QrCodeUwinStudent({ qrCodeImgURL, id }) {
  const classes = useStyles();
  const { userAuth } = useSelector((state) => state);

  return (
    <Box my={2} className={classes.root}>
      {qrCodeImgURL ? (
        userAuth.userProfile.badges.includes("uwindsor") ? (
          <Box>
            <Typography
              variant="h5"
              sx={{ my: 1, fontWeight: 900 }}
              color="error"
            >
              添加小助手验证时提供专属口令或直接发送口令给小助手，即可直接入群！
            </Typography>
            <Box></Box>
            <img
              src={qrCodeImgURL}
              style={{ maxWidth: "300px" }}
              alt="qrCodeImgURL"
            />
            <Typography variant="h6" color="red">
              专属口令: {id.slice(0, 3)}-{userAuth.user.username}-
              {userAuth.user.username.length + 3}
            </Typography>
          </Box>
        ) : userAuth.isAuthenticated === true ? (
          <Typography variant="h5">
            此福利只提供给 xxx@uwindsor.ca 邮箱，请用其他邮箱登录。
          </Typography>
        ) : (
          <div>
            <Box my={1}>
              <Typography variant="h5">QrCode 已被隐藏 登录后查看</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/auth/signIn"
            >
              登录后查看内容！
            </Button>
          </div>
        )
      ) : (
        ""
      )}
    </Box>
  );
}
