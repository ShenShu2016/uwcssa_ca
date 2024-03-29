/*
 * @Author: Shikai Jin
 * @Date: 2022-05-29 23:50:40
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 22:57:36
 * @FilePath: /uwcssa_ca/src/components/Cropper/CropperDialog.tsx
 * @Description:
 *
 */

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import Cropper from "react-easy-crop";
import { PhotoCamera } from "@mui/icons-material";
import { getOwnerUserName } from "redux/auth/authSlice";
import { grey } from "@mui/material/colors";
import { postUserImage } from "redux/userImage/userImageSlice";
import { updateUserProfileData } from "redux/userProfile/userProfileSlice";
import { v4 as uuid } from "uuid";
import getCroppedImg from "./conponents/CropperDialogContent/canvasUtils";
import { dataURLtoFile } from "./conponents/CropperDialogContent/dataURLtoFile";

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default function CropperDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const ownerUsername = useAppSelector(getOwnerUserName);
  const myUserProfile = useAppSelector(
    (state) => state.userProfile.myUserProfile,
  );
  // console.log('myUserProfile', myUserProfile);
  const [loading, setLoading] = useState(false);
  const [avatarImgURL, setAvatarImgURL] = useState<string | undefined>(
    myUserProfile.avatarURL?.objectURL,
  );
  const inputAvatarRef = useRef<HTMLInputElement>(null);
  const triggerAvatarFileSelectPopup = () => inputAvatarRef.current.click();
  const [avatarImageSrc, setAvatarImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [finish, setFinish] = useState(false);
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.user);
  const onAvatarImgFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
      const imageDataUrl = await readFile(file);
      setAvatarImageSrc(imageDataUrl);
      setFinish(false);
    }
  };

  const uploadAvatarImg = async () => {
    setLoading(true);
    const canvas = await getCroppedImg(avatarImageSrc, croppedArea);
    console.log(canvas);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    // console.log(canvasDataUrl);
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      `croppedAvatarImg-${uuid()}.jpeg`,
    );
    console.log(convertedUrlToFile);

    const targetTable = "userProfile";
    const response = await dispatch(
      postUserImage({
        targetTable,
        file: convertedUrlToFile,
        authUser,
        compressedWidth: 144,
        thumbnailWidth: 50,
      }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setAvatarImgURL(response.payload.objectURL);
      setLoading(false);
      setZoom(1);
      setAvatarImageSrc(null);
      setFinish(true);
    }

    const updateUserProfileInput = {
      id: ownerUsername,
      userProfileAvatarURLId: response.payload.id,
    };
    const response2 = await dispatch(
      updateUserProfileData(updateUserProfileInput),
    );
    setLoading(false);
    handleClose();
  };

  const noChange = () => {
    setAvatarImageSrc(null);
    setAvatarImgURL(myUserProfile.avatarURL?.objectURL);
    setFinish(false);
    setZoom(1);
    handleClose();
  };
  return (
    <div>
      <Box position="absolute" right={0} top="70%" sx={{ zIndex: 1 }}>
        <IconButton
          sx={{
            backgroundColor: grey[300],
            "&:hover, &.Mui-focusVisible": {
              backgroundColor: grey[400],
            },
          }}
          onClick={handleClickOpen}
        >
          <PhotoCamera />
        </IconButton>
      </Box>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <DialogTitle>编辑 头像</DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBlock: "2.5rem" }} />
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: isSm ? 400 : 200,
              background: "#333",
            }}
          >
            <Cropper
              image={avatarImageSrc || avatarImgURL}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flex: "1",
                alignItems: "center",
                flexDirection: isSm ? null : "column",
                margin: "1rem 0",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  minWidth: isSm ? 25 : 65,
                  color: "white",
                }}
              >
                缩放
              </Typography>
              <Slider
                style={{
                  color: "#ffff",
                  padding: "22px 0px",
                  marginLeft: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "0 16px",
                  minWidth: isSm ? "500px" : "200px",
                }}
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(Number(zoom))}
                disabled={!avatarImageSrc}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={noChange}>
            取消
          </Button>

          {avatarImageSrc ? (
            <Button
              type="submit"
              variant="contained"
              disabled={!avatarImageSrc}
              onClick={uploadAvatarImg}
            >
              保存头像
            </Button>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                ref={inputAvatarRef}
                onChange={onAvatarImgFileChange}
                style={{ display: "none" }}
              />
              <Button variant="text" onClick={triggerAvatarFileSelectPopup}>
                上传头像
                {/* {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-0.75rem',
                      marginLeft: '-0.75rem',
                    }}
                  />
                )} */}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
