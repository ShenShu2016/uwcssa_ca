import { Box, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import S3Image from "../../S3/S3Image";
import { useSelector } from "react-redux";

export default function QrCodeUwinStudent({ qrCodeImgS3Key }) {
  const { badges } = useSelector((state) => state.userAuth.userProfile);
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  return (
    <Box my={2}>
      {qrCodeImgS3Key ? (
        badges.includes("uwindsor_shield") ? (
          <S3Image S3Key={qrCodeImgS3Key} style={{ maxWidth: "300px" }} />
        ) : isAuthenticated === true ? (
          <Typography variant="h5">
            您用的不是 xxx@uwindsor.ca 邮箱注册所以没有权限。
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
