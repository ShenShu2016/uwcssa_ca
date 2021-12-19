import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../../../components/CustomMUI/CustomTags";
import React, { useEffect, useRef, useState } from "react";
import { fetchTopics, postArticle } from "../../../redux/slice/articleSlice";
import {
  postMultipleImages,
  postSingleImage,
} from "../../../redux/slice/generalSlice";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MUIRichTextEditor from "mui-rte";
import PublishIcon from "@mui/icons-material/Publish";
import SwipeViews from "../../../components/SwipeViews";
import { convertToRaw } from "draft-js";
import { createTopic } from "../../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
    paddingInline: "1rem",
  },
  formControl: {
    margin: theme.spacing(2, 0),
    minWidth: 300,
  },
  swipeViews: {
    width: "100%",
    height: "300px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
  content: {
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
  },
}));

const Input = styled("input")({
  display: "none",
});

export default function PostArticle() {
  const classes = useStyles();
  useTitle("发布新闻");
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useSelector((state) => state.userAuth.user);
  const [tags, setTags] = useState([]);
  const [imgURLs, setImgURLs] = useState();
  const [qrCodeImgURL, setQrCodeImgURL] = useState();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const timer = useRef();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      summary: "",
      topicID: "",
    },
  });
  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  const { topics } = useSelector((state) => state.article);

  const uploadArticleImg = async (e) => {
    setLoading(true);
    const imagesData = e.target.files;
    const imageLocation = "article";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    console.log("我是function 返回值 response", response);
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setImgURLs(response.payload);
      setLoading(false);
    }
  };
  const uploadArticleQrCode = async (e) => {
    setLoading(true);
    const imageData = e.target.files;
    const imageLocation = "article/qrCode";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setQrCodeImgURL(response.payload);
      setLoading(false);
    }
  };
  const onSubmit = async (data) => {
    //Upload the article
    if (!content) {
      alert("内容里面右上角忘记按保存了！");
      return;
    }
    setLoading(true);
    const createArticleInput = {
      ...data,
      id: id ? id : undefined,
      imgURLs: imgURLs,
      content: content,
      active: true,
      sortKey: "SortKey",
      qrCodeImgURL: qrCodeImgURL,
      userID: username,
      createdAt: createdAt ? createdAt : undefined,
      tags: GetTags(),
    };
    const response = await dispatch(postArticle({ createArticleInput }));

    if (response.meta.requestStatus === "fulfilled") {
      history.push(`/article/${response.payload.data.createArticle.id}`);
    } else {
      timer.current = window.setTimeout(() => {
        setLoading(false);

        console.log(response.error.message);
      }, 1000);

      console.log(response);
    }
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    const createTopicInput = {
      id: topicData.name,
      name: topicData.name,
      userID: username,
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    dispatch(fetchTopics());
    setTopicData({ name: "" });
  };
  const handleKeyDown = (e) => {
    const newTags = [...tags, e];
    setTags(newTags);
  };

  const handleDelete = (e) => {
    const newTags = tags.filter((tag) => tag !== e);
    setTags(newTags);
  };

  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setContent(tempContent);
  };
  return (
    <Box
      className={classes.root}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        发布文章
      </Typography>
      <Box sx={{ my: "2rem" }}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              required
              label="文章标题"
              variant="outlined"
              fullWidth
              onChange={onChange}
              value={value}
              error={!!errors.title}
              helperText={errors.title ? "不能为空" : null}
            />
          )}
        />
        <Box sx={{ my: "2rem" }}>
          <TextField
            required
            label="id"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setId(e.target.value);
            }}
            helperText={"不能有空格不能有中文，不能有标点符号"}
          />
        </Box>
        <Typography variant="body1" color="HighlightText">
          最后的URL为:https://uwcssa.ca/article/{id}
          {id
            ? `最后的URL为:https://uwcssa.ca/article/${id}`
            : "不明白就不要瞎点了"}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setId(null);
          }}
        >
          清零url id
        </Button>
      </Box>
      <Box sx={{ my: "2rem" }}>
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
      <Box sx={{ my: "2rem" }}>
        <Box className="newTopic">
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
            )}
          />
        </Box>
      </Box>
      <Box sx={{ my: "2rem" }}>
        <TextField
          label="Topic"
          value={topicData.name}
          onChange={(e) => setTopicData({ ...topicData, name: e.target.value })}
        />
        <Button
          variant="contained"
          endIcon={<PublishIcon />}
          onClick={uploadTopic}
          color="primary"
        >
          上传新的Topic
        </Button>
      </Box>
      <Box sx={{ my: "2rem" }}>
        <CustomTags
          placeholder="新装修， 独立卫浴..."
          initial={tags}
          onKeyDown={(e) => handleKeyDown(e)}
          onDelete={(e) => handleDelete(e)}
        />
      </Box>
      <Box className={classes.swipeViews}>
        {imgURLs ? (
          <SwipeViews images={imgURLs} />
        ) : (
          <Typography variant="h4">上传图片预览：</Typography>
        )}
      </Box>
      <Box sx={{ my: "1rem" }}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            multiple
            onChange={(e) => {
              // setImgData();
              uploadArticleImg(e);
            }}
          />

          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              component="span"
              fullWidth
              disabled={loading}
            >
              上传图片
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
        </label>
      </Box>
      <Box sx={{ my: "2rem" }}>
        {qrCodeImgURL ? (
          <img
            src={qrCodeImgURL}
            alt="qrCodeImgURL"
            style={{ width: "100%", height: "300px" }}
          />
        ) : (
          <Typography variant="h4">上传QRCODE预览</Typography>
        )}
        <label htmlFor="uploadArticleQrCode">
          <Input
            accept="image/*"
            id="uploadArticleQrCode"
            type="file"
            onChange={(e) => {
              uploadArticleQrCode(e);
            }}
          />
          <Button
            variant="contained"
            component="span"
            fullWidth
            disabled={loading}
          >
            上传articleQR code
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
      </Box>
      <Typography variant="h4" sx={{ my: 2 }}>
        输入内容:
      </Typography>
      <Paper className={classes.content}>
        <MUIRichTextEditor
          label="Type something here..."
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
      </Paper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box className={classes.starEndDate}>
          <div>
            <DatePicker
              label="创建日期"
              value={createdAt}
              helperText="不填的话以现在时间为准"
              onChange={(e) => {
                setCreatedAt(e);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </Box>
        <Button
          onClick={() => {
            setCreatedAt(null);
          }}
        >
          点击清零日期
        </Button>
      </LocalizationProvider>
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        type="submit"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ my: 4 }}
      >
        上传 Article
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
  );
}
