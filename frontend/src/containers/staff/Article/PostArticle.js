import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTopic, createType } from "../../../graphql/mutations";
import {
  postArticle,
  postArticleImg,
  setTopics,
  setTypes,
} from "../../../redux/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import PublishIcon from "@mui/icons-material/Publish";
import S3Image from "../../../components/S3/S3Image";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";

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
  imgPreview: {
    minHeight: "300px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  titleInput: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  type: {
    marginBlock: "2rem",
  },
  topic: {
    marginBlock: "2rem",
  },
  newTopic: {
    textAlign: "center",
    width: "100%",
    margin: "auto",
  },
}));

const Input = styled("input")({
  display: "none",
});

export default function PostArticle() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    topicID: "",
    typeID: "",
  });

  useEffect(() => {
    dispatch(setTopics());
    dispatch(setTypes());
  }, [dispatch]);

  const { topics, types } = useSelector((state) => state.allArticles);

  const uploadArticleImg = async () => {
    const response = await dispatch(postArticleImg(imgData));
    if (response) {
      setImgKey(response.key);
    }
  };

  const uploadArticle = async () => {
    //Upload the article
    const { title, content, topicID, typeID } = articleData;

    const createArticleInput = {
      title,
      content,
      imagePath: imgKey,
      like: [],
      unlike: [],
      topicID: topicID,
      typeID: typeID,
      active: 1,
      ByCreatedAt: "Article",
    };
    const response = await dispatch(postArticle(createArticleInput));

    if (response.result) {
      history.push(`/article/${response.response.data.createArticle.id}`);
    }
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    //Upload the topic
    const { name } = topicData;
    const createTopicInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    dispatch(setTopics());
  };

  const [typeData, setTypeData] = useState({ name: "" });

  const uploadType = async () => {
    const { name } = typeData;
    const createTypeInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(graphqlOperation(createType, { input: createTypeInput }));
    dispatch(setTypes());
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        发布文章
      </Typography>
      <Box className={classes.title}>
        <TextField
          label="文章标题"
          variant="outlined"
          fullWidth
          value={articleData.title}
          className={classes.titleInput}
          onChange={(e) =>
            setArticleData({ ...articleData, title: e.target.value })
          }
        />
      </Box>
      <Box className={classes.topic}>
        <Box className="newTopic">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label2">
              Topic
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={articleData.topicID}
              onChange={(e) =>
                setArticleData({ ...articleData, topicID: e.target.value })
              }
              label="Topic"
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
        </Box>
      </Box>
      <Box className={classes.type}>
        <div className="newType">
          <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={articleData.typeID}
              onChange={(e) =>
                setArticleData({ ...articleData, typeID: e.target.value })
              }
              label="Type"
            >
              {types.map((type) => {
                return (
                  <MenuItem value={type.id} key={type.id}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </Box>
      <div className="newTopic">
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
          上传新的topic
        </Button>
      </div>
      <div className="newType">
        <TextField
          label="Type"
          value={typeData.name}
          onChange={(e) => setTypeData({ ...typeData, name: e.target.value })}
        />
        <Button
          variant="contained"
          endIcon={<PublishIcon />}
          onClick={uploadType}
          color="primary"
        >
          上传新的Type
        </Button>
      </div>
      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => {
              setImgData(e.target.files[0]);
              uploadArticleImg();
            }}
          />
          <Button variant="contained" component="span">
            上传图片
          </Button>
        </label>
      </Box>
      <S3Image S3Key={imgKey} style={{ width: "100%" }} />
      <Box className={classes.content}>
        <TextField
          label="Content"
          value={articleData.content}
          minRows={20}
          variant="outlined"
          multiline
          fullWidth
          onChange={(e) =>
            setArticleData({ ...articleData, content: e.target.value })
          }
        />
      </Box>
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        onClick={uploadArticle}
        color="primary"
      >
        上传 Article
      </Button>
    </div>
  );
}
