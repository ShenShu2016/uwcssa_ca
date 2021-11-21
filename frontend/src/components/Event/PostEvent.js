import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchTopics, postEvent } from "../../redux/reducers/eventSlice";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PublishIcon from "@mui/icons-material/Publish";
import S3Image from "../../components/S3/S3Image";
import { createTopic } from "../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/reducers/generalSlice";
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
  const [backGroundImgS3Key, setBackGroundImgS3Key] = useState("");
  const [qrCodeImgS3Key, setQrCodeImgS3Key] = useState("");
  const [posterImgS3Key, setPosterImgS3Key] = useState("");

  const history = useHistory();
  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    startDate: null,
    endDate: null,
    online: false,
    group: false,
    location: "",
    topicID: "",
    sponsor: "",
    tags: "",
    eventStatus: "ComingSoon",
  });
  console.log(eventData);
  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  const { topics } = useSelector((state) => state.event);
  const { username } = useSelector((state) => state.userAuth.user);

  const uploadEventImg = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setBackGroundImgS3Key(response.payload);
    }
  };

  const uploadEventPoster = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setPosterImgS3Key(response.payload);
    }
  };

  const uploadEventQrCode = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "event";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response) {
      setQrCodeImgS3Key(response.payload);
    }
  };

  const uploadEvent = async () => {
    const {
      title,
      content,
      startDate,
      endDate,
      online,
      group,
      location,
      topicID,
      eventStatus,
      sponsor,
      tags,
    } = eventData;

    const createEventInput = {
      title,
      content,
      startDate,
      endDate,
      online,
      group,
      location,
      backGroundImgS3Key,
      posterImgS3Key,
      qrCodeImgS3Key,
      eventStatus,
      sortKey: "SortKey",
      topicID: topicID,
      active: true,
      sponsor,
      tags,
      userID: username,
    };

    const response = await dispatch(postEvent({ createEventInput }));

    if (response.meta.requestStatus === "fulfilled") {
      history.push(`/event/${response.payload.data.createEvent.id}`);
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
      <Box className={classes.root}>
        <Typography variant="h3" sx={{ textAlign: "center" }} gutterBottom>
          活动策划
        </Typography>
        <Container maxWidth="sm">
          <Box className={classes.form} noValidate>
            <TextField
              margin="normal"
              fullWidth
              required
              id="title"
              label="标题"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
            />
            <FormControl
              variant="outlined"
              sx={{ m: 2, margin: "normal" }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-outlined-label2">
                Topic
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined2"
                value={eventData.topicID}
                onChange={(e) =>
                  setEventData({ ...eventData, topicID: e.target.value })
                }
                label="类别"
              >
                {topics.map((topic) => {
                  return (
                    <MenuItem value={topic.id} key={topic.id}>
                      {topic.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              fullWidth
              label="类别"
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
              上传新的类别
            </Button>
            <TextField
              margin="normal"
              fullWidth
              label="赞助商"
              value={eventData.sponsor}
              onChange={(e) =>
                setEventData({ ...eventData, sponsor: e.target.value })
              }
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box>
              <div>
                <DateTimePicker
                  label="开始时间"
                  value={eventData.startDate}
                  id="startDate"
                  onChange={(e) => {
                    console.log("e", e);
                    setEventData({
                      ...eventData,
                      startDate: e,
                    });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div>
                <DateTimePicker
                  label="结束时间"
                  value={eventData.endDate}
                  id="endDate"
                  onChange={(e) => {
                    setEventData({ ...eventData, endDate: e });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Box>
          </LocalizationProvider>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={eventData.online}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setEventData({ ...eventData, online: e.target.checked });
                  }}
                  name="online"
                />
              }
              label="online"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={eventData.group}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setEventData({ ...eventData, group: e.target.checked });
                  }}
                  name="group"
                />
              }
              label="group"
            />
          </FormGroup>

          <Box className={classes.form} noValidate>
            <TextField
              margin="normal"
              fullWidth
              required
              id="location"
              label="地址"
              value={eventData.location}
              onChange={(e) =>
                setEventData({ ...eventData, location: e.target.value })
              }
            />
            <Box className={classes.type}>
              <div className="newType">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Condition
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={eventData.eventStatus}
                    onChange={(e) =>
                      setEventData({
                        ...eventData,
                        eventStatus: e.target.value,
                      })
                    }
                    label="Condition"
                  >
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
                </FormControl>
              </div>
            </Box>

            <TextField
              margin="normal"
              fullWidth
              required
              id="content"
              label="内容"
              value={eventData.content}
              onChange={(e) =>
                setEventData({ ...eventData, content: e.target.value })
              }
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
                <Button variant="contained" component="span">
                  上传活动海报
                </Button>
              </label>
              <S3Image S3Key={posterImgS3Key} style={{ width: "100%" }} />

              <label htmlFor="uploadEventImg" sx={{ margin: "normal" }}>
                <Input
                  accept="image/*"
                  id="uploadEventImg"
                  type="file"
                  onChange={(e) => {
                    // setImgData();
                    uploadEventImg(e);
                  }}
                />
                <Button variant="contained" component="span">
                  上传背景图片
                </Button>
              </label>
              <S3Image S3Key={backGroundImgS3Key} style={{ width: "100%" }} />
              <label htmlFor="uploadEventQrCode">
                <Input
                  accept="poster/*"
                  id="uploadEventQrCode"
                  type="file"
                  onChange={(e) => {
                    uploadEventQrCode(e);
                  }}
                />
                <Button variant="contained" component="span">
                  上传活动QR
                </Button>
              </label>
              <S3Image S3Key={qrCodeImgS3Key} style={{ width: "100%" }} />
            </Box>
            <Button
              variant="contained"
              endIcon={<PublishIcon />}
              onClick={uploadEvent}
              color="primary"
            >
              上传活动
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
