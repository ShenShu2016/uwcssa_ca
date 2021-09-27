import { API, Storage, graphqlOperation } from "aws-amplify";
import { IconButton, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { listTopics, listTypes } from "../../graphql/queries";

import AddTopic from "./AddTopic";
import AddType from "./AddType";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PublishIcon from "@material-ui/icons/Publish";
import Select from "@material-ui/core/Select";
import { createArticle } from "../../graphql/mutations";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddArticle() {
  const classes = useStyles();
  const [articleData, setArticleData] = useState({
    title: "",
    content: "",
    topicId: "",
    typeId: "",
  });
  const [imgData, setImgData] = useState("");
  const [types, setTypes] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTypes();
    fetchTopics();
  }, []);

  const uploadArticle = async () => {
    //Upload the article
    console.log("articleData", articleData);
    const { title, content, topicId, typeId } = articleData;
    const { key } = await Storage.put(`article/${uuid()}.png`, imgData, {
      contentType: "image/png",
    });

    const createArticleInput = {
      title,
      content,
      imagePath: key,
      like: [],
      unlike: [],
      articleTopicId: topicId,
      articleTypeId: typeId,
      byDate: "Article",
    };
    await API.graphql(
      graphqlOperation(createArticle, { input: createArticleInput })
    );
  };

  const fetchTypes = async () => {
    try {
      const typeData = await API.graphql({
        query: listTypes,
        authMode: "AWS_IAM",
      });
      const typesList = typeData.data.listTypes.items;
      console.log("typeData", typeData);
      setTypes(typesList);
    } catch (error) {
      console.log("error on fetching Type", error);
    }
  };
  const fetchTopics = async () => {
    try {
      const topicData = await API.graphql({
        query: listTopics,
        authMode: "AWS_IAM",
      });
      const topicsList = topicData.data.listTopics.items;
      console.log("topicData", topicsList);
      setTopics(topicsList);
    } catch (error) {
      console.log("error on fetching Topics", error);
    }
  };

  return (
    <div>
      <div className="newArticle">
        <TextField
          label="Title"
          value={articleData.title}
          onChange={(e) =>
            setArticleData({ ...articleData, title: e.target.value })
          }
        />
        <TextField
          label="Content"
          value={articleData.content}
          onChange={(e) =>
            setArticleData({ ...articleData, content: e.target.value })
          }
        />
        <input
          type="file"
          accept="image/png"
          onChange={(e) => setImgData(e.target.files[0])}
        />
        <IconButton onClick={uploadArticle}>
          <PublishIcon />
        </IconButton>
      </div>
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
                <MenuItem value={type.id} key={type.id}>
                  {type.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="newTopic">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label2">Topic</InputLabel>
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
                <MenuItem value={topic.id} key={topic.id}>
                  {topic.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <AddTopic />
      <AddType />
    </div>
  );
}
