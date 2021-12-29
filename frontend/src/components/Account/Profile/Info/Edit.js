import {
  Box,
  Button,
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
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { putUserProfile } from "../../../../redux/slice/profileSlice";
// import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import getCroppedImg, { generateDownload } from "./canvasUtils";
import Cropper from "react-easy-crop";
import { dataURLtoFile } from "./dataURLtoFile";
import { v4 as uuid } from "uuid";

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

export default function Edit({ user, editOpen, handleEditClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [avatarImgURL, setAvatarImgURL] = useState(user.avatarImgURL);
  const [backGroundImgURL, setBackGroundImgURL] = useState(
    user.backGroundImgURL
  );
  const inputAvatarRef = useRef();
  const inputRef = useRef();
  const triggerAvatarFileSelectPopup = () => inputAvatarRef.current.click();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [avatarImageSrc, setAvatarImageSrc] = useState(null);
  const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
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
      backGroundImgURL: backGroundImgURL,
    };
    setLoading(true);
    const response = await dispatch(putUserProfile({ updateUserInput }));
    handleEditClose();
    if (response) {
      setLoading(false);
    }
  };

  // const uploadBackGroundImgImg = async (e) => {
  //   setLoading(true);
  //   const imageData = e.target.file;
  //   const imageLocation = "user/BackGround";
  //   const response = await dispatch(
  //     postSingleImage({ imageData, imageLocation })
  //   );
  //   if (response.meta.requestStatus === "fulfilled") {
  //     setBackGroundImgURL(response.payload);
  //     console.log("response", response);
  //     setLoading(false);
  //   }
  //   console.log(imageData);
  // };

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

  const onAvatarImgClear = () => {
    setAvatarImageSrc(null);
  };

  const onAvatarImgDownload = () => {
    generateDownload(avatarImageSrc, croppedArea);
  };

  const onBackgroundImgFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setBackgroundImageSrc(imageDataUrl);
    }
  };

  const onBackgroundImgClear = () => {
    setBackgroundImageSrc(null);
  };

  const onBackgroundImgDownload = () => {
    generateDownload(backgroundImageSrc, croppedArea);
  };

  const uploadAvatarImg = async (e) => {
    // setLoading(true);
    // const imageData = e.target.files;
    // console.log(imageData, "image");

    // const imageLocation = "user/Avatar";
    // const maxPixel = 300;
    // const response = await dispatch(
    //   postSingleImage({ imageData, imageLocation, maxPixel })
    // );
    // if (response.meta.requestStatus === "fulfilled") {
    //   console.log("response", response);
    //   setAvatarImgURL(response.payload);
    //   setLoading(false);
    // }
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
    }
  };

  const uploadBackGroundImgImg = async (e) => {
    const canvas = await getCroppedImg(backgroundImageSrc, croppedArea);

    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    // console.log(canvasDataUrl);
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      `croppedImage${uuid()}.jpeg`
    );
    // console.log(convertedUrlToFile);

    const files = [convertedUrlToFile];
    const fileInputFiles = new FileListItems(files);
    console.log(fileInputFiles);

    const imageData = fileInputFiles;

    const imageLocation = "user/BackGround";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setBackGroundImgURL(response.payload);
      console.log("response", response);
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog
          fullScreen
          open={editOpen}
          onClose={handleEditClose}
          TransitionComponent={Transition}
        >
          <DialogTitle>编辑 个人信息</DialogTitle>
          <Divider light />
          <Container maxWidth="md">
            <DialogContent>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="名"
                    variant="outlined"
                    placeholder="张三的三"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.firstName}
                    helperText={errors.firstName ? "不符合" : null}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="姓"
                    variant="outlined"
                    placeholder="张三的张"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.lastName}
                    helperText={errors.lastName ? "不符合" : null}
                  />
                )}
              />
              <div className={classes.splitter} />
              {/* <Box sx={{ textAlign: "center" }}>
         <img
                src={avatarImgURL}
                alt="avatarImgURL"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                }}
              /> 
            </Box> */}
              <Box className={classes.cropContainer}>
                <Cropper
                  image={avatarImageSrc}
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
              {/* <Box my={"2rem"}>
              <label htmlFor="uploadAvatarImg">
                <Input
                  accept="image/*"
                  id="uploadAvatarImg"
                  type="file"
                  onChange={(e) => {
                    // setImgData();
                    uploadAvatarImg(e);
                  }}
                />
                <Button
                  variant="contained"
                  component="span"
                  fullWidth
                  disabled={loading}
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
              </label>
            </Box> */}
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
                  sx={{ margin: "1rem 0 1rem 1rem" }}
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
                <Button
                  onClick={onAvatarImgClear}
                  variant="outlined"
                  color="error"
                  sx={{ margin: "1rem 0 1rem 1rem" }}
                  disabled={!avatarImageSrc}
                >
                  清除头像
                </Button>
                <Button
                  onClick={onAvatarImgDownload}
                  variant="outlined"
                  color="primary"
                  sx={{ margin: "1rem 0rem 1rem 1rem" }}
                  disabled={!avatarImageSrc}
                >
                  下载头像
                </Button>
                <Button
                  onClick={uploadAvatarImg}
                  variant="outlined"
                  color="success"
                  sx={{ margin: "1rem" }}
                  disabled={!avatarImageSrc}
                >
                  确认头像
                </Button>
              </Box>
              {/* <img
              src={backGroundImgURL}
              alt={"background"}
              style={{ width: "100%" }}
            /> */}
              <Box className={classes.cropContainer}>
                <Cropper
                  image={backgroundImageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={960 / 250}
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
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onBackgroundImgFileChange}
                  style={{ display: "none" }}
                />
                <Button
                  variant="outlined"
                  component="span"
                  onClick={triggerFileSelectPopup}
                  disabled={loading}
                  sx={{ margin: "1rem 0 1rem 1rem" }}
                >
                  上传背景
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
                <Button
                  onClick={onBackgroundImgClear}
                  variant="outlined"
                  color="error"
                  sx={{ margin: "1rem 0 1rem 1rem" }}
                  disabled={!backgroundImageSrc}
                >
                  清除背景
                </Button>
                <Button
                  onClick={onBackgroundImgDownload}
                  variant="outlined"
                  color="primary"
                  sx={{ margin: "1rem 0rem 1rem 1rem" }}
                  disabled={!backgroundImageSrc}
                >
                  下载背景
                </Button>

                {/* <label htmlFor="uploadAvatarImg">
                <Input
                  accept="image/*"
                  id="uploadBackGroundImgImg"
                  type="file"
                  // onChange={(e) => {
                  //   // setImgData();
                  //   uploadBackGroundImgImg(e);
                  // }}
                /> */}

                <Button
                  onClick={uploadBackGroundImgImg}
                  variant="outlined"
                  color="success"
                  sx={{ margin: "1rem" }}
                  disabled={!backgroundImageSrc}
                >
                  确认背景
                </Button>
                {/* </label> */}
                {/* <Box className={classes.imgContainer}>
                <img src={croppedImage} alt="Cropped" className={classes.img} />
              </Box> */}
              </Box>

              <Controller
                name="linkedIn"
                control={control}
                rules={{
                  required: false,
                  pattern: /linkedin.com/i,
                  maxLength: 200,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="LinkedIn 网址"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.linkedIn}
                    helperText={errors.linkedIn ? "格式不对" : null}
                  />
                )}
              />
              <div className={classes.splitter} />
              <Controller
                name="github"
                control={control}
                rules={{
                  required: false,
                  pattern: /github.com/i,
                  maxLength: 200,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="GitHub 网址"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.github}
                    helperText={errors.github ? "格式不对" : null}
                  />
                )}
              />
              <div className={classes.splitter} />
              <Controller
                name="major"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="专业"
                    variant="outlined"
                    placeholder="例如：机械工程"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.major}
                    helperText={errors.major ? "不能为空" : null}
                  />
                )}
              />
              <div className={classes.splitter} />
              <Controller
                name="intro"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 500,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="自我介绍"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    multiline
                    onChange={onChange}
                    value={value}
                    maxRows={20}
                    minRows={5}
                    error={!!errors.intro}
                    helperText={errors.intro ? "不能为空" : null}
                  />
                )}
              />
            </DialogContent>
          </Container>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
            elevation={3}
          >
            <DialogActions>
              <Button
                onClick={handleEditClose}
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
                更新
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
