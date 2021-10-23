import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Switch,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useEffect, useState } from "react";
import {
  postEvent,
  postEventPoster,
  postEventImg,
  setTopics,
} from "../../redux/actions/eventActions";
import { useDispatch, useSelector } from "react-redux";
import { createTopic } from "../../graphql/mutations";
import API from "@aws-amplify/api";
import PublishIcon from "@mui/icons-material/Publish";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";
import S3Image from "../../components/S3/S3Image";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import DatePicker from "@mui/lab/DatePicker";
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

  const dispatch = useDispatch();
  const [imgKey, setImgKey] = useState("");

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
    eventStatus: "ComingSoon",
    poster: imgKey,
    backGroundImgPath: imgKey,
  });
  console.log("eventData", eventData);
  useEffect(() => {
    dispatch(setTopics());
  }, [dispatch]);

  const { topics } = useSelector((state) => state.allEvents);

  const uploadEventImg = async (e) => {
    const response = await dispatch(postEventImg(e.target.files[0]));
    if (response) {
      setImgKey(response.key);
    }
  };

  const uploadEventPoster = async (e) => {
    const response = await dispatch(postEventPoster(e.target.files[0]));
    if (response) {
      setImgKey(response.key);
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
    } = eventData;

    const createEventInput = {
      title,
      content,
      startDate,
      endDate,
      online,
      group,
      location,
      eventStatus,
      topicID: topicID,
      active: 1,
      ByCreatedAt: "Event",
    };
    const response = await dispatch(postEvent(createEventInput));

    if (response.result) {
      history.push(`/event/${response.response.data.createEvent.id}`);
    }
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    //Upload the topic
    const { name } = topicData;
    const createTopicInput = {
      name,
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    dispatch(setTopics());
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
          </Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box>
              <div>
                <DateTimePicker
                  label="入学日期"
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
                  label="结业日期"
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
              <label htmlFor="contained-button-file">
                <Input
                  accept="poster/*"
                  id="contained-button-file"
                  type="file"
                  onChange={(e) => {
                    // setImgData();
                    uploadEventPoster(e);
                  }}
                />
                <Button variant="contained" component="span">
                  上传活动海报
                </Button>
              </label>
              <label htmlFor="contained-button-file" sx={{ margin: "normal" }}>
                <Input
                  accept="image/*"
                  id="contained-button-file"
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
            </Box>
            <S3Image S3Key={imgKey} style={{ width: "100%" }} />
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
