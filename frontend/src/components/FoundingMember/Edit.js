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
  Tooltip,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
// import { styled } from "@mui/material/styles";
import { updateFoundingMemberDetail } from "../../redux/slice/foundingMemberSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import getCroppedImg, {
  generateDownload,
} from "../Account/Profile/Info/canvasUtils";
import Cropper from "react-easy-crop";
import { dataURLtoFile } from "../Account/Profile/Info/dataURLtoFile";
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

export default function Edit({ editOpen, handleEditClose, item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(item.imgURL);
  const [newContent, setNewContent] = useState(item.content);
  const [imageSrc, setImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      summary: item.summary,
    },
  });

  const onSubmit = async (data) => {
    const updateFoundingMemberInput = {
      ...data,
      id: item.id,
      imgURL: imgURL,
      content: newContent,
    };
    setLoading(true);
    const response = await dispatch(
      updateFoundingMemberDetail({ updateFoundingMemberInput })
    );
    handleEditClose();
    if (response) {
      console.log(response);
      setLoading(false);
    }
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onImgFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const onImgClear = () => {
    setImageSrc(null);
  };

  const onImgDownload = () => {
    generateDownload(imageSrc, croppedArea);
  };

  const uploadImg = async (e) => {
    setLoading(true);

    const canvas = await getCroppedImg(imageSrc, croppedArea);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      `croppedImg${uuid()}.jpeg`
    );
    const files = [convertedUrlToFile];
    const fileInputFiles = new FileListItems(files);
    const imageData = fileInputFiles;
    const imageLocation = "foundingMember";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setImgURL(response.payload);
      setLoading(false);
    }
  };
  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setNewContent(tempContent);
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
          <DialogTitle>编辑 我的信息</DialogTitle>
          <Divider light />
          <Container maxWidth="md">
            <DialogContent>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="我的Title"
                    variant="outlined"
                    placeholder="开发总监"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.title}
                    helperText={errors.title ? "不符合" : null}
                  />
                )}
              />
              <Controller
                name="summary"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="简介"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.summary}
                    helperText={errors.summary ? "不符合" : null}
                  />
                )}
              />
              <div className={classes.splitter} />
              {/* <Box sx={{ textAlign: "center" }}>
                <img
                  src={imgURL}
                  alt="avatarImgURL"
                  style={{
                    width: "100%",
                  }}
                />
              </Box> */}
              {/* <Box my={"2rem"}>
                <label htmlFor="uploadImg">
                  <Input
                    accept="image/*"
                    id="uploadImg"
                    type="file"
                    onChange={(e) => {
                      // setImgData();
                      uploadImg(e);
                    }}
                  />
                  <Button
                    variant="contained"
                    component="span"
                    fullWidth
                    disabled={loading}
                  >
                    上传照片
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
              {imageSrc ? (
                <React.Fragment>
                  <Box className={classes.cropContainer}>
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={264 / 170}
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
                      onChange={onImgFileChange}
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      onClick={triggerFileSelectPopup}
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
                      onClick={onImgClear}
                      variant="outlined"
                      color="error"
                      sx={{ margin: "1rem 0 1rem 1rem" }}
                      disabled={!imageSrc}
                    >
                      清除头像
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
                    <Tooltip title="点击下载剪裁好的头像" placement="top">
                      <Button
                        onClick={onImgDownload}
                        variant="outlined"
                        color="warning"
                        sx={{ margin: "1rem 0rem 1rem 1rem" }}
                        disabled={!imageSrc}
                      >
                        下载头像
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
                    </Tooltip>
                    <Tooltip title="点击完成裁剪" placement="top">
                      <Button
                        onClick={uploadImg}
                        variant="contained"
                        color="success"
                        sx={{ margin: "1rem" }}
                        disabled={!imageSrc}
                      >
                        确认头像
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
                    </Tooltip>
                  </Box>
                </React.Fragment>
              ) : (
                <div>
                  <Box sx={{ textAlign: "center" }}>
                    <img
                      src={imgURL}
                      alt={"background"}
                      style={{ width: 264, height: 170 }}
                    />
                  </Box>
                  <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={onImgFileChange}
                    style={{ display: "none" }}
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    onClick={triggerFileSelectPopup}
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
              )}
              <Box>
                <MUIRichTextEditor
                  label="Type something here..."
                  defaultValue={item.content}
                  onChange={handleOnChange()}
                  inlineToolbar={true}
                  controls={[
                    "title",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "highlight",
                    "undo",
                    "redo",
                    "link",
                    "media",
                    "numberList",
                    "bulletList",
                    "quote",
                    "code",
                    "clear",
                  ]}
                />
              </Box>
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
