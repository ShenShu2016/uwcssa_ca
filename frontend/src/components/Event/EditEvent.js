import {
  Box,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import GoogleMapsPlace, { GetAddress } from "../GoogleMap/GoogleMapsPlace";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchTopics,
  modifyEvent,
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/slice/eventSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import API from "@aws-amplify/api";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { GetTags } from "../CustomMUI/CustomTags";
import IconButton from "@mui/material/IconButton";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MUIRichTextEditor from "mui-rte";
import PublishIcon from "@mui/icons-material/Publish";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import UpdateIcon from "@mui/icons-material/Update";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import { convertToRaw } from "draft-js";
import { createTopic } from "../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
import { styled } from "@mui/material/styles";
import { useTitle } from "../../Hooks/useTitle";
import { v4 as uuid } from "uuid";
import { postAddress } from "../../redux/slice/addressSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "2rem",
    marginTop: "2rem",
  },

  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
  picture: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
  container: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
    position: "relative",
  },
  child: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const eventStatusList = [
  { value: "ComingSoon", label: "即将来临" },
  { value: "SignUpClosed", label: "报名关闭" },
  { value: "InProgress", label: "进行中" },
  { value: "Finished", label: "完成" },
  { value: "Canceled", label: "取消" },
];

const Input = styled("input")({
  display: "none",
});

export default function EditEvent() {
  const classes = useStyles();
  const { eventID } = useParams();
  useTitle(`活动编辑-${eventID}`);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (eventID && eventID !== "") {
      dispatch(selectedEvent({ eventID }));
    }
    return () => dispatch(removeSelectedEvent());
  }, [eventID, dispatch]);

  const { event } = useSelector((state) => state.event.selected);
  const { username } = useSelector((state) => state.userAuth.user);
  const [backGroundImgURL, setBackGroundImgURL] = useState(undefined);
  const [qrCodeImgURL, setQrCodeImgURL] = useState(undefined);
  const [posterImgURL, setPosterImgURL] = useState(undefined);
  //const [isTitleAsURL, setIsTitleAsURL] = useState(false);

  const [content, setContent] = useState();
  const [updatedContent, setUpdatedContent] = useState();
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const [state, setState] = useState({
    online: event.online,
    group: event.group,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  useEffect(() => {
    setBackGroundImgURL(event.backGroundImgURL);
    setQrCodeImgURL(event.qrCodeImgURL);
    setPosterImgURL(event.posterImgURL);
    setContent(event.content);
  }, [event]);

  const { topics } = useSelector((state) => state.event);

  const uploadEventImg = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setBackGroundImgURL(response.payload);
    }
  };

  const uploadEventPoster = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setPosterImgURL(response.payload);
    }
  };

  const uploadEventQrCode = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response) {
      setQrCodeImgURL(response.payload);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const address = await GetAddress();
    const addressID = uuid();
    const itemID = uuid();
    if (address) {
      const {
        description,
        place_id,
        reference,
        terms,
        types,
        apartmentNumber,
        geocodingResult,
        lat,
        lng,
      } = address;
      const createAddressInput = {
        description,
        place_id,
        reference,
        terms,
        types,
        apartmentNumber,
        geocodingResult,
        lat,
        lng,
        itemID: itemID,
        userID: username,
        id: addressID,
      };
      console.log(createAddressInput);
      const addressResponse = await dispatch(
        postAddress({ createAddressInput })
      );
      console.log(addressResponse);
    }
    const updateEventInput = {
      ...data,
      id: event.id,
      backGroundImgURL: backGroundImgURL,
      posterImgURL: posterImgURL,
      qrCodeImgURL: qrCodeImgURL,
      addressID: address && addressID,
      content: updatedContent,
      online: state.online,
      group: state.group,
      active: true,
      userID: username,
      tags: GetTags(),
    };
    const response = await dispatch(modifyEvent({ updateEventInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push(`/event/${response.payload.data.updateEvent.id}`);
    } else {
      timer.current = window.setTimeout(() => {
        setLoading(false);

        console.log(response.error.message);
      }, 1000);

      console.log(response);
    }
  };

  const handleClose = () => {
    history.goBack();
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    //Upload the topic
    const createTopicInput = {
      id: topicData.name, //为了不让数据重复，直接定义ID
      name: topicData.name,
      userID: username,
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    dispatch(fetchTopics());
    setTopicData({ name: "" });
  };
  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setUpdatedContent(tempContent);
  };

  const onPosterClear = () => {
    setPosterImgURL(null);
  };
  const onBackgroundImgClear = () => {
    setBackGroundImgURL(null);
  };
  const onQrCodeClear = () => {
    setQrCodeImgURL(null);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            活动编辑
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {event.active === true ? (
          <Box
            className={classes.root}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Box className={classes.form}>
              <Controller
                name="title"
                defaultValue={event.title}
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    required
                    id="title"
                    label="标题"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.title}
                    helperText={errors.title ? "不能为空" : null}
                  />
                )}
              />
              <Controller
                name="topicID"
                defaultValue={event.topicID}
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="topicID">主题</InputLabel>
                    <Select
                      labelId="topicID"
                      value={value}
                      onChange={onChange}
                      label="主题"
                      error={!!errors.topicID}
                    >
                      {topics.map((topic) => {
                        return (
                          <MenuItem value={topic.id} key={topic.id}>
                            {topic.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {errors.topicID && (
                      <FormHelperText sx={{ color: "#d32f2f" }}>
                        请选择一个主题，没有的话请上传新的主题
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <TextField
                margin="normal"
                fullWidth
                label="新的主题"
                value={topicData.name}
                onChange={(e) =>
                  setTopicData({ ...topicData, name: e.target.value })
                }
              />
              <Button
                variant="contained"
                endIcon={<PublishIcon />}
                onClick={uploadTopic}
                color="primary"
              >
                上传新的主题
              </Button>
              <Controller
                name="sponsor"
                defaultValue={event.sponsor}
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    label="主办方/赞助商"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                  <Controller
                    name="startDate"
                    defaultValue={event.startDate}
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Box sx={{ margin: "1rem 0" }}>
                        <DateTimePicker
                          label="开始时间"
                          value={value}
                          id="startDate"
                          error={!!errors.startDate}
                          onChange={onChange}
                          // minDateTime={new Date()}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {errors.startDate && (
                          <FormHelperText sx={{ color: "#d32f2f" }}>
                            不能为空
                          </FormHelperText>
                        )}
                      </Box>
                    )}
                  />

                  <Controller
                    name="endDate"
                    defaultValue={event.endDate}
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <div>
                        <DateTimePicker
                          label="结束时间"
                          value={value}
                          id="endDate"
                          onChange={onChange}
                          // minDateTime={new Date()}
                          renderInput={(params) => <TextField {...params} />}
                          error={!!errors.endDate}
                        />
                        {errors.endDate && (
                          <FormHelperText sx={{ color: "#d32f2f" }}>
                            不能为空
                          </FormHelperText>
                        )}
                      </div>
                    )}
                  />
                </Stack>
              </LocalizationProvider>
              {/* <Controller
                name="online"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, checked } }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={checked}
                        onChange={onChange}
                        name="online"
                      />
                    }
                    label="online"
                  />
                )}
              />

              <Controller
                name="group"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, checked } }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={checked}
                        onChange={onChange}
                        name="group"
                      />
                    }
                    label="group"
                  />
                )}
              /> */}
              <div style={{ margin: "1rem 0.5rem" }}>
                <FormLabel component="legend">Online Event?</FormLabel>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>No</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.online}
                        onChange={handleChange}
                        name="online"
                      />
                    }
                    label=""
                  />
                  <Typography>Yes</Typography>
                </Stack>
              </div>
              {state.online ? null : <GoogleMapsPlace />}

              <div style={{ margin: "0 0.5rem 1rem 0.5rem" }}>
                <FormLabel component="legend">Group?</FormLabel>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>No</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.group}
                        onChange={handleChange}
                        name="group"
                      />
                    }
                    label=""
                  />
                  <Typography>Yes</Typography>
                </Stack>
              </div>

              <Box className={classes.type}>
                <div className="newType">
                  <Controller
                    name="eventStatus"
                    defaultValue={event.eventStatus}
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="eventStatus">活动状态</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="eventStatus"
                          defaultValue=""
                          value={value}
                          onChange={onChange}
                          label="Event Status"
                          error={!!errors.eventStatus}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {eventStatusList.map((eventStatus) => {
                            return (
                              <MenuItem
                                value={eventStatus.value}
                                key={eventStatus.value}
                              >
                                {eventStatus.label}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {errors.eventStatus && (
                          <FormHelperText sx={{ color: "#d32f2f" }}>
                            请选择一个活动状态
                          </FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </div>
              </Box>
              <Box className={classes.content}>
                <MUIRichTextEditor
                  label="活动详情"
                  value={content}
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
              <Box>
                <div style={{ marginBottom: "1rem" }}>
                  {posterImgURL ? (
                    <Box className={classes.picture}>
                      <img
                        src={posterImgURL}
                        alt="posterImgURL"
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box className={classes.container}>
                      <Box className={classes.child} color={"grey.700"}>
                        <InsertPhotoIcon
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "100%",
                            height: "100px",
                            verticalAlign: "middle",
                            lineHeight: "300px",
                          }}
                        />
                        <Typography gutterBottom variant="h5">
                          上传活动海报预览
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  <label htmlFor="poster">
                    <Input
                      accept="poster/*"
                      id="poster"
                      type="file"
                      onChange={(e) => {
                        uploadEventPoster(e);
                      }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      disabled={loading}
                    >
                      上传活动海报
                    </Button>
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
                  </label>
                  <Button
                    onClick={onPosterClear}
                    variant="outlined"
                    color="error"
                    sx={{ margin: " 0 1rem" }}
                  >
                    清除活动海报
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
                <div style={{ marginBottom: "1rem" }}>
                  {backGroundImgURL ? (
                    <Box className={classes.picture}>
                      <img
                        src={backGroundImgURL}
                        alt="backGroundImgURL"
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box className={classes.container}>
                      <Box className={classes.child} color={"grey.700"}>
                        <WallpaperIcon
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "100%",
                            height: "100px",
                            verticalAlign: "middle",
                            lineHeight: "300px",
                          }}
                        />
                        <Typography gutterBottom variant="h5">
                          上传背景图片预览
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  <label htmlFor="uploadEventImg" sx={{ margin: "normal" }}>
                    <Input
                      accept="eventImg/*"
                      id="uploadEventImg"
                      type="file"
                      onChange={(e) => {
                        // setImgData();
                        uploadEventImg(e);
                      }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      disabled={loading}
                    >
                      上传背景图片
                    </Button>

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
                  </label>
                  <Button
                    onClick={onBackgroundImgClear}
                    variant="outlined"
                    color="error"
                    sx={{ margin: "0 1rem" }}
                  >
                    清除背景图片
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
                <Divider />
                <div style={{ marginBottom: "1rem" }}>
                  {qrCodeImgURL ? (
                    <Box className={classes.picture}>
                      <img
                        src={qrCodeImgURL}
                        alt="qrCodeImgURL"
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box className={classes.container}>
                      <Box className={classes.child} color={"grey.700"}>
                        <QrCodeIcon
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "100%",
                            height: "100px",
                            verticalAlign: "middle",
                            lineHeight: "300px",
                          }}
                        />
                        <Typography gutterBottom variant="h5">
                          上传QrCode预览
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  <label htmlFor="uploadEventQrCode">
                    <Input
                      accept="eventQrCode/*"
                      id="uploadEventQrCode"
                      type="file"
                      onChange={(e) => {
                        uploadEventQrCode(e);
                      }}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      disabled={loading}
                    >
                      上传活动QR
                    </Button>
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
                  </label>
                  <Button
                    onClick={onQrCodeClear}
                    variant="outlined"
                    color="error"
                    sx={{ margin: "0 1rem" }}
                  >
                    清除活动QR
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
              </Box>
              <Divider />
              <Button
                variant="contained"
                type="submit"
                endIcon={<UpdateIcon />}
                color="primary"
                disabled={loading}
                sx={{ marginBlock: "2rem" }}
              >
                更新活动
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
            </Box>
          </Box>
        ) : (
          <LinearProgress />
        )}
      </Container>
    </div>
  );
}
