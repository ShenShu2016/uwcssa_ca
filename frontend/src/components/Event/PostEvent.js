import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { fetchTopics, postEvent } from "../../redux/slice/eventSlice";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { GetTags } from "../../components/CustomMUI/CustomTags";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PublishIcon from "@mui/icons-material/Publish";
import { createTopic } from "../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "2rem",
    marginTop: "3rem",
  },

  form: {
    alignItems: "center",
    justifyContent: "center",
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
export default function PostEvent() {
  const classes = useStyles();
  useTitle("活动创建");
  const dispatch = useDispatch();

  const [backGroundImgURL, setBackGroundImgURL] = useState(undefined);
  const [qrCodeImgURL, setQrCodeImgURL] = useState(undefined);
  const [posterImgURL, setPosterImgURL] = useState(undefined);
  const [isTitleAsURL, setIsTitleAsURL] = useState(false);
  const { username } = useSelector((state) => state.userAuth.user);
  const history = useHistory();
  const timer = useRef();
  // const [eventData, setEventData] = useState({
  //   title: "",
  //   content: "",
  //   startDate: null,
  //   endDate: null,
  //   online: false,
  //   group: false,
  //   location: "",
  //   topicID: "",
  //   sponsor: "",
  //   tags: "",
  //   eventStatus: "ComingSoon",
  // });
  // console.log(eventData);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      summary: "",
      content: "",
      startDate: null,
      endDate: null,
      online: false,
      group: false,
      location: "",
      topicID: "",
      sponsor: "",
      eventStatus: "",
    },
  });

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

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
    const createEventInput = {
      ...data,
      id: isTitleAsURL ? getValues("title") : undefined,
      backGroundImgURL: backGroundImgURL,
      posterImgURL: posterImgURL,
      qrCodeImgURL: qrCodeImgURL,
      active: true,
      sortKey: "SortKey",
      userID: username,
      tags: GetTags(),
    };
    const response = await dispatch(postEvent({ createEventInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push(`/event/${response.payload.data.createEvent.id}`);
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);

      alert(response.error.message);
    }
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

  return (
    <div>
      <Box
        className={classes.root}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Typography variant="h3" sx={{ textAlign: "center" }} gutterBottom>
          活动策划
        </Typography>
        <Container maxWidth="sm">
          <Box className={classes.form}>
            <Controller
              name="title"
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={isTitleAsURL}
                  onChange={(event) => setIsTitleAsURL(event.target.checked)}
                />
              }
              label="用标题作为URL，一旦发出不能更改，除非删掉，并且有唯一性"
            />
            <Box sx={{ my: "1rem" }}>
              <Controller
                name="summary"
                control={control}
                rules={{
                  required: true,
                  minLength: 3,
                  maxLength: 300,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    label="简要概述"
                    variant="outlined"
                    fullWidth
                    multiline={true}
                    rows={4}
                    onChange={onChange}
                    value={value}
                    error={!!errors.summary}
                    helperText={errors.summary ? "不符合标准，3~300字" : null}
                  />
                )}
              />
            </Box>
            <Controller
              name="topicID"
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
                    // FormHelperHelperText={
                    //   errors.topicID
                    //     ? "选择一个主题，没有的话请上传新的类别"
                    //     : null
                    // }
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

            {/* <Controller
              name="sponsor"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="赞助商"
                  variant="outlined"
                  onChange={onChange}
                  value={value}
                />
              )}
            /> */}

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack>
                <Controller
                  name="startDate"
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
                      name="group"
                    />
                  }
                  label="group"
                />
              )}
            />
            <Controller
              name="location"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="location"
                  label="地址"
                  value={value}
                  onChange={onChange}
                  error={!!errors.location}
                  helperText={errors.title ? "不能为空" : null}
                />
              )}
            />
            <Box className={classes.type}>
              <div className="newType">
                <Controller
                  name="eventStatus"
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
            <Controller
              name="content"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Content"
                  minRows={20}
                  variant="outlined"
                  multiline
                  onChange={onChange}
                  value={value}
                  error={!!errors.content}
                  helperText={errors.content ? "不能为空" : null}
                />
              )}
            />

            <Box>
              <label htmlFor="poster">
                <Input
                  accept="poster/*"
                  id="poster"
                  type="file"
                  onChange={(e) => {
                    uploadEventPoster(e);
                  }}
                />
                <Button variant="contained" component="span" disabled={loading}>
                  上传活动海报
                </Button>
              </label>
              <img
                src={posterImgURL}
                alt="posterImgURL"
                style={{ width: "100%" }}
              />
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
                <Button variant="contained" component="span" disabled={loading}>
                  上传背景图片
                </Button>
              </label>
              <img
                src={backGroundImgURL}
                alt="backGroundImgURL"
                style={{ width: "100%" }}
              />
              <label htmlFor="uploadEventQrCode">
                <Input
                  accept="eventQrCode/*"
                  id="uploadEventQrCode"
                  type="file"
                  onChange={(e) => {
                    uploadEventQrCode(e);
                  }}
                />
                <Button variant="contained" component="span" disabled={loading}>
                  上传活动QR
                </Button>
              </label>
              <img
                src={qrCodeImgURL}
                alt="qrCodeImgURL"
                style={{ width: "100%" }}
              />
            </Box>
            <Button
              variant="contained"
              type="submit"
              endIcon={<PublishIcon />}
              color="primary"
              disabled={loading}
            >
              上传活动
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
        </Container>
      </Box>
    </div>
  );
}
