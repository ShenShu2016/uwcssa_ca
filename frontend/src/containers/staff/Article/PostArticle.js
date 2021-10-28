import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { postArticle, setTopics } from "../../../redux/actions/articleActions";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import PublishIcon from "@mui/icons-material/Publish";
import S3Image from "../../../components/S3/S3Image";
import { createTopic } from "../../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { postImage } from "../../../redux/actions/generalAction";
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
  const [imgS3Keys, setImgS3Keys] = useState("");
  const history = useHistory();
  const { username } = useSelector((state) => state.userAuth.user);
  const [tagInput, setTagInput] = useState("");
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    topicID: "",
    tags: [],
  });
  console.log(articleData);
  useEffect(() => {
    dispatch(setTopics());
  }, [dispatch]);

  const { topics } = useSelector((state) => state.article);

  const uploadArticleImg = async (e) => {
    const imageData = e.target.files[0];
    const imageLocation = "article";
    const response = await dispatch(postImage(imageData, imageLocation));
    if (response) {
      setImgS3Keys(response.key);
    }
  };

  const uploadArticle = async () => {
    //Upload the article
    const { title, content, topicID, tags } = articleData;

    const createArticleInput = {
      title,
      content,
      imgS3Keys: [imgS3Keys],
      topicID: topicID,
      active: true,
      sortKey: "SortKey",
      userID: username,
      tags: tags,
    };
    const response = await dispatch(postArticle(createArticleInput));

    if (response.result) {
      history.push(`/article/${response.response.data.createArticle.id}`);
    }
  };
  const [topicData, setTopicData] = useState({ name: "" });

  const uploadTopic = async () => {
    const createTopicInput = {
      name: topicData.name,
      userID: username,
    };
    await API.graphql(
      graphqlOperation(createTopic, { input: createTopicInput })
    );
    dispatch(setTopics());
    setTopicData({ name: "" });
  };

  const deleteHandler = (i) => () => {
    const { tags: newTags } = { ...articleData };
    setArticleData({
      ...articleData,
      tags: newTags.filter((tag) => tag !== i),
    });
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    console.log("tagSuccess", articleData.tags);
    if (e.key === "Enter" && val) {
      if (
        articleData.tags.find((tag) => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      e.preventDefault();
      const newTags = [...articleData.tags].concat([val]);
      setArticleData({ ...articleData, tags: newTags });
      setTagInput("");
      console.log("tagSuccess", articleData.tags);
    }
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
      <Box className={classes.content}>
        <TextField
          label="tags"
          value={tagInput}
          variant="outlined"
          fullWidth
          onKeyDown={inputKeyDown}
          onChange={(e) => setTagInput(e.target.value)}
        />
      </Box>

      {articleData.tags.map((data) => {
        return <Chip key={data} label={data} onDelete={deleteHandler(data)} />;
      })}
      <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => {
              // setImgData();
              uploadArticleImg(e);
            }}
          />
          <Button variant="contained" component="span">
            上传图片
          </Button>
        </label>
      </Box>
      <S3Image S3Key={imgS3Keys} style={{ width: "100%" }} />
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
