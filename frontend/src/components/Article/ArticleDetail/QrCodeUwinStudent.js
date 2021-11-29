import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import S3Image from "../../S3/S3Image";
import { useSelector } from "react-redux";
export default function QrCodeUwinStudent({ qrCodeImgS3Key }) {
  const { badges } = useSelector((state) => state.userAuth.userProfile);
  return (
    <div>
      {qrCodeImgS3Key ? (
        badges.includes("uwindsor_shield") ? (
          <S3Image S3Key={qrCodeImgS3Key} style={{ maxWidth: "300px" }} />
        ) : (
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/auth/signIn"
          >
            请先登录!
          </Button>
        )
      ) : (
        ""
      )}
    </div>
  );
}
