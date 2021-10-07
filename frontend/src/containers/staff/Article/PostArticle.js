import { Button, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { createTopic, createType } from "../../../graphql/mutations";
import {
  postArticle,
  postArticleImg,
  setTopics,
  setTypes,
} from "../../../redux/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { Box } from "@mui/system";
import PublishIcon from "@material-ui/icons/Publish";
import Select from "@material-ui/core/Select";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
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

export default function PostArticle() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    topicId: "",
    typeId: "",
  });
  useEffect(() => {
    dispatch(setTopics());
    dispatch(setTypes());
    console.log("using effect"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { topics, types } = useSelector((state) => state.allArticles);

  const uploadArticleImg = async () => {
    const response = await dispatch(postArticleImg(imgData));
    console.log("response.key", response.key);
    setImgKey(response.key);
  };

  const uploadArticle = async () => {
    //Upload the article
    const { title, content, topicId, typeId } = articleData;

    const createArticleInput = {
      title,
      content,
      imagePath: imgKey,
      like: [],
      unlike: [],
      articleTopicId: topicId,
      articleTypeId: typeId,
      byDate: "Article",
    };
    const response = await dispatch(postArticle(createArticleInput));

    if (response.result) {
      history.push(`/article/${response.response.data.createArticle.id}`);
    }
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    //Upload the topic
    console.log("topicData", topicData);
    const { name } = topicData;
    const createTopicInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    setTopics();
  };

  const [typeData, setTypeData] = useState({ name: "" });

  const uploadType = async () => {
    console.log("typeData", typeData);
    const { name } = typeData;
    const createTypeInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(graphqlOperation(createType, { input: createTypeInput }));
    setTypes();
  };

  return (
    <div className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h3">输入标题</Typography>
        <TextField
          label="标题"
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
        <div className="newTopic">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label2">
              Topic
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={articleData.topicId}
              onChange={(e) =>
                setArticleData({ ...articleData, topicId: e.target.value })
              }
              label="Topic"
            >
              {topics.map((topic) => {
                return (
                  <MenuItem value={topic.name} key={topic.name}>
                    {topic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="newTopic">
          <TextField
            label="Topic"
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
            上传新的topic
          </Button>
        </div>
      </Box>
      <Box className={classes.type}>
        <div className="newType">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={articleData.typeId}
              onChange={(e) =>
                setArticleData({ ...articleData, typeId: e.target.value })
              }
              label="Type"
            >
              {types.map((type) => {
                return (
                  <MenuItem value={type.name} key={type.name}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
      </Box>
      <Box className={classes.imgPreview}>
        {imgKey === "" ? (
          <Typography variant="h4">添加照片</Typography>
        ) : (
          <AmplifyS3Image path={imgKey} />
        )}
        <input
          type="file"
          accept="image/png"
          onChange={(e) => {
            setImgData(e.target.files[0]);
            console.log("imgData", imgData);
          }}
        />
        <Button variant="contained" color="primary" onClick={uploadArticleImg}>
          上传图片
        </Button>
      </Box>
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
        上传新的Type
      </Button>
    </div>
  );
}
