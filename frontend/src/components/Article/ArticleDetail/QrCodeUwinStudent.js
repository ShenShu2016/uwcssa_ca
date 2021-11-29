import { Box, Button, Typography } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import React from "react";
import S3Image from "../../S3/S3Image";
import { useSelector } from "react-redux";

export default function QrCodeUwinStudent({ qrCodeImgS3Key, id }) {
  const { userAuth } = useSelector((state) => state);
  return (
    <Box my={2}>
      {qrCodeImgS3Key ? (
        userAuth.userProfile.badges.includes("uwindsor_shield") ? (
          <Box>
            <Typography variant="h5" sx={{ my: 1 }}>
              扫描一下二维码：
            </Typography>
            {[...Array(10)].map((x) => (
              <ArrowDownwardIcon size="large" sx={{ color: "primary.main" }} />
            ))}
            <Box></Box>
            <S3Image S3Key={qrCodeImgS3Key} style={{ maxWidth: "300px" }} />
            <Typography variant="h6" color="red">
              口令: {id.slice(0, 3)}-{userAuth.user.username}
            </Typography>
            {[...Array(10)].map((x) => (
              <ArrowUpwardIcon size="large" sx={{ color: "primary.main" }} />
            ))}
          </Box>
        ) : userAuth.isAuthenticated === true ? (
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
