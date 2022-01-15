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
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slide,
  Slider,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";
import getCroppedImg from "../Account/Profile/Info/canvasUtils";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Cropper from "react-easy-crop";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import { dataURLtoFile } from "../Account/Profile/Info/dataURLtoFile";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
// import { styled } from "@mui/material/styles";
import { updateUwcssaMemberDetail } from "../../redux/slice/uwcssaMemberSlice";
import { usePermit } from "../../Hooks/usePermit";
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

export default function Edit({ editOpen, handleEditClose, item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPermit = usePermit(null, "admin");
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(item.imgURL);
  const [newContent, setNewContent] = useState(item.content);
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);
  const [imageSrc, setImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const departments = useSelector(selectAllDepartments);
  const [departmentID, setDepartmentID] = useState(item.departmentID);
  //console.log(departmentID);
  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);
  //console.log(departments);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
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
      content: newContent,
      startDate: startDate,
      endDate: endDate,
      departmentID: departmentID,
    };
    setLoading(true);
    const response = await dispatch(
      updateUwcssaMemberDetail({ updateUwcssaMemberInput })
    );
    handleEditClose();
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
    }
  };

  const onImgClear = () => {
    setImageSrc(null);
  };
  const noChange = () => {
    setImageSrc(null);
    handleEditClose();
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
      setImageSrc(null);
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
              {isPermit && (
                <Box>
                  <Controller
                    name="leader"
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={value}
                            onChange={onChange}
                            name="leader"
                          />
                        }
                        label="leader"
                      />
                    )}
                  />

                  <Controller
                    name="active"
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={value}
                            onChange={onChange}
                            name="active"
                          />
                        }
                        label="active"
                      />
                    )}
                  />
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={{ marginBlock: "2rem" }}
                  >
                    <InputLabel id="demo-simple-select-outlined-label2">
                      部门名称
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label2"
                      id="demo-simple-select-outlined2"
                      value={departmentID}
                      onChange={(e) => setDepartmentID(e.target.value)}
                      label="Topic"
                    >
                      {departments &&
                        departments.map((department) => {
                          return (
                            <MenuItem value={department.id} key={department.id}>
                              {department.name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
              )}
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
                    placeholder="技术部部长/成员"
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
                  maxLength: 16,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="简介（1~16个字）"
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
            </Box>
            <Box my={"2rem"}>
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
              {/* {imageSrc ? ( */}
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  编辑 头像
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    padding: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "15px",
                  }}
                >
                  <Box className={classes.cropContainer}>
                    <Cropper
                      image={imageSrc ? imageSrc : imgURL}
                      crop={crop}
                      zoom={zoom}
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
              <div className={classes.splitter} />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box className={classes.starEndDate}>
                  <div>
                    <DatePicker
                      label="加入日期"
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                  <div>
                    <DatePicker
                      label="截止日期"
                      value={endDate}
                      onChange={(e) => {
                        setEndDate(e);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </Box>
              </LocalizationProvider>
              <Box sx={{ my: "2rem" }}>
                <Typography variant="h5">编辑你的内容</Typography>
                <MUIRichTextEditor
                  label="Type something here..."
                  defaultValue={item.content}
                  inlineToolbar={true}
                  onChange={handleOnChange()}
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
