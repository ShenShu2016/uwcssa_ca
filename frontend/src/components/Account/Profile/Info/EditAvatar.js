import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Slide,
  Slider,
  //   TextField,
  //   Tooltip,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { putUserProfile } from "../../../../redux/slice/profileSlice";
// import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import getCroppedImg from "./canvasUtils";
import Cropper from "react-easy-crop";
import { dataURLtoFile } from "./dataURLtoFile";
import { v4 as uuid } from "uuid";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CropRoundedIcon from "@mui/icons-material/CropRounded";

// const Input = styled("input")({
//   display: "none",
// });
const useStyles = makeStyles((theme) => ({
  root: {},
  splitter: {
    marginBlock: "2.5rem",
  },
  starEndDate: {
    display: "flex",
    justifyContent: "space-between",
  },
  cropContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    background: "#333",
    [theme.breakpoints.up("sm")]: {
      height: 400,
    },
  },
  cropButton: {
    flexShrink: 0,
  },
  //   controls: {
  //     padding: 16,
  //     display: "flex",

  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  sliderContainer: {
    display: "flex",
    flex: "1",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: { flexDirection: "column" },
    margin: "1rem 0",
  },
  sliderLabel: {
    minWidth: 25,

    [theme.breakpoints.down("xs")]: {
      minWidth: 65,
    },
  },
  slider: {
    padding: "22px 0px",
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    margin: "0 16px",
    minWidth: "500px",

    [theme.breakpoints.down("sm")]: { minWidth: "200px" },
  },
  imgContainer: {
    position: "relative",
    flex: 1,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditAvatar({
  user,
  editAvatarOpen,
  handleEditAvatarClose,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [avatarImgURL, setAvatarImgURL] = useState(user.avatarImgURL);
  //   const [backGroundImgURL, setBackGroundImgURL] = useState(
  //     user.backGroundImgURL
  //   );
  const inputAvatarRef = useRef();
  //   const inputRef = useRef();
  const triggerAvatarFileSelectPopup = () => inputAvatarRef.current.click();

  //   const triggerFileSelectPopup = () => inputRef.current.click();
  const [avatarImageSrc, setAvatarImageSrc] = useState(null);
  //   const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const {
    handleSubmit,
    // control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      id: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      intro: user.intro,
      major: user.major,
      linkedIn: user.linkedIn,
      github: user.github,
    },
  });

  const onSubmit = async (data) => {
    const updateUserInput = {
      ...data,
      avatarImgURL: avatarImgURL,
      //   backGroundImgURL: backGroundImgURL,
    };
    setLoading(true);
    const response = await dispatch(putUserProfile({ updateUserInput }));
    handleEditAvatarClose();
    if (response) {
      setLoading(false);
    }
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAvatarImgFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setAvatarImageSrc(imageDataUrl);
    }
  };

  //   const onAvatarImgClear = () => {
  //     setAvatarImageSrc(null);
  //   };

  const uploadAvatarImg = async (e) => {
    setLoading(true);

    const canvas = await getCroppedImg(avatarImageSrc, croppedArea);

    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    // console.log(canvasDataUrl);

    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      `croppedAvatarImg${uuid()}.jpeg`
    );
    // console.log(convertedUrlToFile);

    const files = [convertedUrlToFile];
    const fileInputFiles = new FileListItems(files);
    console.log(fileInputFiles);

    const imageData = fileInputFiles;
    const imageLocation = "user/Avatar";
    const maxPixel = 300;
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation, maxPixel })
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setAvatarImgURL(response.payload);
      setLoading(false);
      setAvatarImageSrc(null);
    }
  };

  const noChange = () => {
    setAvatarImageSrc(null);
    // setBackgroundImageSrc(null);
    handleEditAvatarClose();
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog
          fullScreen
          open={editAvatarOpen}
          onClose={handleEditAvatarClose}
          TransitionComponent={Transition}
        >
          <DialogTitle>编辑 个人信息</DialogTitle>
          <Divider light />
          <Container maxWidth="md">
            <DialogContent>
              <div className={classes.splitter} />

              {/* {avatarImageSrc ? ( */}
              <React.Fragment>
                <Box className={classes.cropContainer}>
                  <Cropper
                    image={avatarImageSrc ? avatarImageSrc : avatarImgURL}
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
                <Box className={classes.controls}>
                  <Box className={classes.sliderContainer}>
                    <Typography
                      variant="overline"
                      className={classes.sliderLabel}
                    >
                      缩放
                    </Typography>
                    <Slider
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      aria-labelledby="Zoom"
                      className={classes.slider}
                      onChange={(e, zoom) => setZoom(zoom)}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      "& > *": {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup variant="text" size="large">
                      <input
                        type="file"
                        accept="image/*"
                        ref={inputAvatarRef}
                        onChange={onAvatarImgFileChange}
                        style={{ display: "none" }}
                      />
                      <Button
                        //   variant="outlined"
                        onClick={triggerAvatarFileSelectPopup}
                        disabled={loading}
                        startIcon={<AddAPhotoRoundedIcon />}
                      >
                        上传头像
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: green[500],
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-0.75rem",
                              marginLeft: "-0.75rem",
                            }}
                          />
                        )}
                      </Button>
                      {/* <Button
                        onClick={onAvatarImgClear}
                        //   variant="outlined"
                        //   color="error"
                        //   sx={{ margin: "1rem 0 1rem 1rem" }}
                        // disabled={!avatarImageSrc}
                        startIcon={<DeleteRoundedIcon />}
                      >
                        清除
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: green[500],
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-0.75rem",
                              marginLeft: "-0.75rem",
                            }}
                          />
                        )}
                      </Button> */}

                      {/* <Tooltip title="点击完成裁剪" placement="top"> */}
                      <Button
                        onClick={uploadAvatarImg}
                        //   variant="contained"
                        //   color="success"
                        //   sx={{ margin: "1rem" }}
                        //   disabled={!avatarImageSrc}
                        startIcon={<CropRoundedIcon />}
                      >
                        确认裁剪
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: green[500],
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-0.75rem",
                              marginLeft: "-0.75rem",
                            }}
                          />
                        )}
                      </Button>
                      {/* </Tooltip> */}
                    </ButtonGroup>
                  </Box>
                </Box>
              </React.Fragment>
              {/*) : (
                <div>
                  <Box sx={{ textAlign: "center" }}>
                    <img
                      src={avatarImgURL}
                      alt="avatarImgURL"
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <input
                    type="file"
                    accept="image/*"
                    ref={inputAvatarRef}
                    onChange={onAvatarImgFileChange}
                    style={{ display: "none" }}
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    onClick={triggerAvatarFileSelectPopup}
                    disabled={loading}
                    fullWidth
                    sx={{ margin: "1rem 0rem 2rem 0rem" }}
                  >
                    上传头像
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-0.75rem",
                          marginLeft: "-0.75rem",
                        }}
                      />
                    )}
                  </Button>
                </div>
              )} */}
            </DialogContent>
          </Container>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
            elevation={3}
          >
            <DialogActions>
              <Button
                onClick={noChange}
                size="large"
                variant="outlined"
                color="error"
              >
                取消
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                size="large"
                disabled={loading}
              >
                保存头像
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-0.75rem",
                      marginLeft: "-0.75rem",
                    }}
                  />
                )}
              </Button>
            </DialogActions>
          </Paper>
        </Dialog>
      </form>
    </div>
  );
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

function FileListItems(files) {
  var b = new ClipboardEvent("").clipboardData || new DataTransfer();
  for (var i = 0, len = files.length; i < len; i++) b.items.add(files[i]);
  return b.files;
}
