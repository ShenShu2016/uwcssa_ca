import React, { useState, useEffect } from "react";
import { IconButton, TextField } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createArticle } from "../../graphql/mutations";
import { v4 as uuid } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { listTypes, listTopics } from "../../graphql/queries";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddArticle() {
  const [articleData, setArticleData] = useState({});
  const [imgData, setImgData] = useState("");
  const [typeData, setTypeData] = useState({});
  const [topicData, setTopicData] = useState({});
  const [types, setTypes] = useState([]);
  const [topics, setTopics] = useState([]);

  const classes = useStyles();

  const uploadArticle = async () => {
    //Upload the article
    console.log("articleData", articleData);
    const { title, content } = articleData;
    const { topicId } = topicData;
    const { typeId } = typeData;
    const { key } = await Storage.put(`${uuid()}.png`, imgData, {
      contentType: "image/png",
    });

    const createArticleInput = {
      title,
      content,
      imagePath: key,
      like: 0,
      unlike: 0,
      articleTopicId: topicId,
      articleTypeId: typeId,
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
      // console.log("Article list", articleList);
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
      console.log("typeData", typeData);
      // console.log("Article list", articleList);
      setTopics(topicsList);
    } catch (error) {
      console.log("error on fetching Topics", error);
    }
  };
  useEffect(() => {
    fetchTypes();
    fetchTopics();
  }, []);

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
            value={typeData.typeId}
            onChange={(e) =>
              setTypeData({ ...typeData, typeId: e.target.value })
            }
            label="Type"
          >
            {types.map((type) => {
              return <MenuItem value={type.id}>{type.name}</MenuItem>;
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
            value={topicData.topicId}
            onChange={(e) =>
              setTopicData({ ...topicData, topicId: e.target.value })
            }
            label="Topic"
          >
            {topics.map((topic) => {
              return <MenuItem value={topic.id}>{topic.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
