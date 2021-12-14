import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../../../components/CustomMUI/CustomTags";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchTopics,
  modifyArticle,
  removeSelectedArticle,
  selectedArticle,
} from "../../../redux/slice/articleSlice";
import {
  postMultipleImages,
  postSingleImage,
} from "../../../redux/slice/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import API from "@aws-amplify/api";
import MUIRichTextEditor from "mui-rte";
import PublishIcon from "@mui/icons-material/Publish";
import SwipeViews from "../../../components/SwipeViews";
import { convertToRaw } from "draft-js";
import { createTopic } from "../../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
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
    height: "750px",
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

export default function EditArticle() {
  const classes = useStyles();
  useTitle("编辑新闻");
  const { articleID } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (articleID && articleID !== "") {
      dispatch(selectedArticle({ articleID }));
    }
    return () => dispatch(removeSelectedArticle());
  }, [articleID, dispatch]);

  const { article } = useSelector((state) => state.article.selected);
  const { username } = useSelector((state) => state.userAuth.user);
  const [tags, setTags] = useState(article.tags);
  const [imgURLs, setImgURLs] = useState(article.imgURLs);
  const [qrCodeImgURL, setQrCodeImgURL] = useState(article.qrCodeImgURL);
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
    setImgURLs(article.imgURLs);
    setQrCodeImgURL(article.qrCodeImgURL);
    setContent(article.content);
  }, [article]);

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
    setLoading(true);
    const updateArticleInput = {
      ...data,
      id: article.id,
      imgURLs: imgURLs,
      content: content2,
      active: true,
      qrCodeImgURL: qrCodeImgURL,
      tags: GetTags(),
    };
    const response = await dispatch(modifyArticle({ updateArticleInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push(`/article/${response.payload.data.updateArticle.id}`);
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
    if (!!!topicData.name) {
      alert("空的你上传啥呢？");
      return;
    }
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
    setContent2(tempContent);
  };
  // console.log("content", content);
  return (
    <div>
      {article.active === true ? (
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
              defaultValue={article.title}
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
                  autoFocus={!!errors.title}
                  helperText={errors.title ? "不能为空" : null}
                />
              )}
            />
          </Box>
          <Box sx={{ my: "2rem" }}>
            <Controller
              name="summary"
              defaultValue={article.summary}
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
                  autoFocus={!!errors.summary}
                  helperText={errors.summary ? "不符合标准，3~300字" : null}
                />
              )}
            />
          </Box>
          <Box sx={{ my: "2rem" }}>
            <Box className="newTopic">
              <Controller
                name="topicID"
                defaultValue={article.topicID}
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
                      autoFocus={!!errors.topicID}
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
              label="新的主题"
              value={topicData.name}
              helperText={"上面主题里面没有的话再到这里输入并按上传"}
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
              上传新的Topic
            </Button>
          </Box>
          <Box sx={{ my: "2rem" }}>
            <CustomTags
              placeholder="新装修， 独立卫浴..."
              initial={article.tags}
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
                style={{ maxHeight: "250px" }}
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
              value={content}
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
          </Paper>
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            type="submit"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ my: 4 }}
          >
            更新 Article
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
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}
