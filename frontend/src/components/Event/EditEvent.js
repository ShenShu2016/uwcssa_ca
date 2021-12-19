import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { useTitle } from "../../Hooks/useTitle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  fetchTopics,
  modifyEvent,
  removeSelectedEvent,
  selectedEvent,
} from "../../redux/slice/eventSlice";
import { green } from "@mui/material/colors";
import UpdateIcon from "@mui/icons-material/Update";
import { Controller, useForm } from "react-hook-form";
import { postSingleImage } from "../../redux/slice/generalSlice";
import { GetTags } from "../CustomMUI/CustomTags";
import { createTopic } from "../../graphql/mutations";
import API from "@aws-amplify/api";
import { convertToRaw } from "draft-js";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import PublishIcon from "@mui/icons-material/Publish";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import GoogleMapsPlace, { GetAddress } from "../GoogleMap/GoogleMapsPlace";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import QrCodeIcon from "@mui/icons-material/QrCode";
import MUIRichTextEditor from "mui-rte";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "2rem",
    marginTop: "6rem",
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

export default function EditEvent() {
  const classes = useStyles();
  useTitle("活动编辑");
  const { eventID } = useParams();
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
  const [content2, setContent2] = useState();
  const [loading, setLoading] = useState(false);
  const timer = useRef();

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
    const updateEventInput = {
      ...data,
      id: event.id,
      backGroundImgURL: backGroundImgURL,
      posterImgURL: posterImgURL,
      qrCodeImgURL: qrCodeImgURL,
      address: GetAddress(),
      content: content2,
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
    setContent2(tempContent);
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
                          minDateTime={new Date()}
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
                          minDateTime={new Date()}
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
              <Controller
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
              />
              <GoogleMapsPlace />
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
                <div>
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
                </div>
                <div>
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
                </div>

                <div>
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
                </div>
              </Box>
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
