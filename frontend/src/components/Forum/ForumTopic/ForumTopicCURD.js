import {
  Button,
  Link,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PublishIcon from "@mui/icons-material/Publish";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createForumSubTopic,
  createForumTopic,
  deleteForumSubTopic,
  deleteForumTopic,
} from "../../../graphql/mutations";
import {
  setForumSubTopics,
  setForumTopics,
} from "../../../redux/actions/forumAction";
import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

// import { listForumTopics } from "../../../graphql/queries";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

function ForumTopicCURD()  {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setForumTopics());
    dispatch(setForumSubTopics());
    console.log("using effect");
  }, [dispatch]);
  const { forumTopics, forumSubTopics } = useSelector((state) => state.forum);
  // console.log("forumTopics", forumTopics);
  // console.log("forumSubTopics", forumSubTopics);
  const [forumTopicData, setForumTopicData] = useState({ name: "" });
  
  //upload the forum topic
  const uploadForumTopic = async () => {
    console.log("AddForumTopicData", forumTopicData);
    const { name } = forumTopicData;
    const createForumTopicInput = {
      name,
      like: [],
      unlike: [],
    };
    await API.graphql(
      graphqlOperation(createForumTopic, { input: createForumTopicInput })
    );
  };
  //Delete the forum topic
  const [forumTopicId, setForumTopicId] = useState({ id: "" });
  const delForumTopic = async () => {
    console.log("DelForumTopicId", forumTopicId);
    const { id } = forumTopicId;
    const DelForumTopicInput = {
      id,
    };
    await API.graphql(
      graphqlOperation(deleteForumTopic, { input: DelForumTopicInput })
    );
  };

  //upload the forum Sub topic
  const [selectForumTopicData, selectForumTopic] = useState({ id: "" });
  console.log("selectForumTopicData", selectForumTopicData);
  const [forumSubTopicData, setForumSubTopicData] = useState({});
  
  const uploadForumSubTopic = async () => {
    console.log("ForumSubTopicData", forumSubTopicData);
    const { name } = forumSubTopicData;
    const topicId = selectForumTopicData.id;
    console.log("selectForumTopicData", selectForumTopicData);
    const createForumSubTopicInput = {
      name,
      like: [],
      unlike: [],
      active:1,
      forumTopicID: topicId,
    };
    await API.graphql(
      graphqlOperation(createForumSubTopic, { input: createForumSubTopicInput })
    );
  };
  //Delete the forum Sub topic
  const [forumSubTopicId, setForumSubTopicId] = useState({ id: "" });
  const delForumSubTopic = async () => {
    console.log("DelForumSubTopicId", forumSubTopicId);
    const { id } = forumSubTopicId;
    const delForumSubTopicInput = {
      id,
    };
    await API.graphql(
      graphqlOperation(deleteForumSubTopic, { input: delForumSubTopicInput })
    );
  };

  // const [forumTopics, setForumTopics] = useState([]);
  // const fetchForumTopics = async () => {
  //   //List the forum topics
  //   try {
  //     const forumTopicData = await API.graphql({
  //       query: listForumTopics,
  //       authMode: "AWS_IAM",
  //     });

  //     const forumTopicName = forumTopicData.data.listForumTopics.items;
  //     console.log("forumTopicData", forumTopicData);

  //     setForumTopics(forumTopicName);
  //   } catch (error) {
  //     console.log("error on fetching Article", error);
  //   }
  // };
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* ForumTopicInput */}
        <Grid item xs={6}>
          <TextField
            label="Topic"
            value={forumTopicData.name}
            onChange={(e) =>
              setForumTopicData({ ...forumTopicData, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="TopicId"
            value={forumTopicId.id}
            onChange={(e) =>
              setForumTopicId({ ...forumTopicId, id: e.target.value })
            }
          />
        </Grid>
        {/* upload ForumTopic button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            component={Link}
            endIcon={<PublishIcon />}
            onClick={uploadForumTopic}
            color="primary"
            to="/forumtest"
          >
            上传新的Forum topic
          </Button>
        </Grid>
        {/* delete ForumTopic button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            component={Link}
            endIcon={<PublishIcon />}
            onClick={delForumTopic}
            color="primary"
          >
            删除Forum topic
          </Button>
        </Grid>
        {/* list forum topic */}
        <Grid item xs={12}>
          <Typography variant="h3">ForumTopic</Typography>
          {forumTopics.map((forumTopic) => {
            return (
              <div key={forumTopic.name}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Typography variant="h4">Topic:{forumTopic.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography variant="h4">Id:{forumTopic.id}</Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
        {/* select forum topic  */}
        <Grid item xs={3}>
          <FormControl sx={{ minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Topic
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={selectForumTopicData.id}
              onChange={(e) =>
                selectForumTopic({
                  ...selectForumTopicData,
                  id: e.target.value,
                })
              }
              autoWidth
              label="Topic"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {forumTopics.map((forumTopic) => {
                return (
                  <MenuItem value={forumTopic.id} key={forumTopic.id}>
                    {forumTopic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        {/* input forum sub topic */}
        <Grid item xs={3}>
          <TextField
            label="SubTopic"
            value={forumSubTopicData.name}
            onChange={(e) =>
              setForumSubTopicData({
                ...forumSubTopicData,
                name: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="SubTopicId"
            value={forumSubTopicId.id}
            onChange={(e) =>
              setForumSubTopicId({ ...forumSubTopicId, id: e.target.value })
            }
          />
        </Grid>
        {/* upload forum sub topic button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            component={Link}
            endIcon={<PublishIcon />}
            onClick={uploadForumSubTopic}
            color="primary"
          >
            增加Forum Sub topic
          </Button>
        </Grid>
        {/* delete forum topic button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            component={Link}
            endIcon={<PublishIcon />}
            onClick={delForumSubTopic}
            color="primary"
          >
            删除Forum Sub topic
          </Button>
        </Grid>
        
        {/* list forum sub topic */}
        <Grid item xs={12}>
          <Typography variant="h3">ForumSubTopic</Typography>
          {forumSubTopics.map((forumSubTopic) => {
            return (
              <div key={forumSubTopic.name}>
                <Grid container spacing={4}>
                  <Grid item xs={3}>
                    <Typography variant="h4">
                      SubTopic:{forumSubTopic.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4">
                      Topic:{forumSubTopic.forumTopic.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4">
                      Id:{forumSubTopic.id}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h4">
                      Active:{forumSubTopic.active}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};
export default ForumTopicCURD;
