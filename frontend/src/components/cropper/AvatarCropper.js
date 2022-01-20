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
import React from "react";
import Cropper from "react-easy-crop";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
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

export default function AvatarCropper({
  editAvatarOpen,
  handleEditAvatarClose,
  imageSrc,
  imgURL,
  crop,
  zoom,
  setCrop,
  onCropComplete,
  setZoom,
  inputRef,
  onImgFileChange,
  triggerFileSelectPopup,
  loading,
  uploadImg,
  noChange,
  handleSubmit,
  onSubmit,
  finish,
  aspect,
  cropShape,
  showGrid,
}) {
  const classes = useStyles();

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
            <React.Fragment>
              <Box>
                <Box className={classes.cropContainer}>
                  <Cropper
                    image={imageSrc ? imageSrc : imgURL}
                    crop={imageSrc ? crop : { x: 0, y: 0 }}
                    zoom={imageSrc ? zoom : 1}
                    aspect={aspect}
                    cropShape={cropShape}
                    showGrid={showGrid}
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
                        disabled={!imageSrc}
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
