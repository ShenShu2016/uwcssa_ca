import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Slide,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import getCroppedImg from "../Account/Profile/Info/canvasUtils";
import { useDispatch } from "react-redux";

import Cropper from "react-easy-crop";

import { dataURLtoFile } from "../Account/Profile/Info/dataURLtoFile";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
// import { styled } from "@mui/material/styles";
import { updateUwcssaMemberDetail } from "../../redux/slice/uwcssaMemberSlice";
// import { usePermit } from "../../Hooks/usePermit";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import AddAPhotoRoundedIcon from "@mui/icons-material/AddAPhotoRounded";
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
  editAvatarOpen,
  handleEditAvatarClose,
  item,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   const isPermit = usePermit(null, "admin");
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(item.imgURL);

  const [imageSrc, setImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [finish, setFinish] = useState(false);

  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();

  const { handleSubmit } = useForm({
    defaultValues: {
      title: item.title,
      summary: item.summary,
      leader: item.leader,
      active: item.active,
    },
  });

  const onSubmit = async (data) => {
    const updateUwcssaMemberInput = {
      ...data,
      id: item.id,
      imgURL: imgURL,
    };
    setLoading(true);
    const response = await dispatch(
      updateUwcssaMemberDetail({ updateUwcssaMemberInput })
    );
    handleEditAvatarClose();
    if (response) {
      //console.log(response);
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
      setFinish(false);
    }
  };

  //   const onImgClear = () => {
  //     setImageSrc(null);
  //   };
  const noChange = () => {
    setImageSrc(null);
    setImgURL(item.imgURL);
    setFinish(false);
    setZoom(1);

    handleEditAvatarClose();
  };

  // const onImgDownload = () => {
  //   generateDownload(imageSrc, croppedArea);
  // };

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
      setZoom(1);
      setImageSrc(null);
      setFinish(true);
    }
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
          <DialogTitle>编辑 头像</DialogTitle>
          <Divider light />

          <DialogContent
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              padding: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {imageSrc ? ( */}
            <React.Fragment>
              <Box
              // sx={{
              //   backgroundColor: "rgba(0, 0, 0, 0.9)",
              //   padding: "1rem",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   borderRadius: "15px",
              // }}
              >
                <Box className={classes.cropContainer}>
                  <Cropper
                    image={imageSrc ? imageSrc : imgURL}
                    crop={imageSrc ? crop : { x: 0, y: 0 }}
                    zoom={imageSrc ? zoom : 1}
                    aspect={125 / 125}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </Box>

                <Box className={classes.controls}>
                  <Box className={classes.sliderContainer}>
                    <Typography
                      style={{ color: "#ffff" }}
                      variant="overline"
                      className={classes.sliderLabel}
                    >
                      缩放
                    </Typography>
                    <Slider
                      style={{ color: "#ffff" }}
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
                    <Stack spacing={2} direction="row">
                      <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        onChange={onImgFileChange}
                        style={{ display: "none" }}
                      />
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                          ":hover": {
                            color: "#9e9e9e",
                          },
                        }}
                        onClick={triggerFileSelectPopup}
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

                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                          ":hover": {
                            color: "#9e9e9e",
                          },
                        }}
                        onClick={uploadImg}
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
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
            {/* ) : (
                <div>
                  <Box sx={{ textAlign: "center" }}>
                    <img
                      src={imgURL}
                      alt={"background"}
                      style={{ width: 125, height: 125 }}
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
              )} */}
          </DialogContent>

          {/* <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
            elevation={3}
          > */}
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
              sx={{ display: finish ? "block" : "none" }}
            >
              保存
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
          {/* </Paper> */}
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
