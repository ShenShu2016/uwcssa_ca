import {
  Box,
  Grid,
  Button,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postForumPost,
  postForumPostImg,
  setForumSubTopics,
  setForumTopics,
} from "../../../redux/actions/forumAction";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import PublishIcon from "@mui/icons-material/Publish";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginTop: "2rem",
  },
  imgPreview: {
    minHeight: "300px",
    maxHeight: "300px",
    maxWidth: "300px",
    backgroundColor: "#f4f4f4",
  },
}));

function ForumPostUpload() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [forumPostData, setForumPostData] = useState({
    title:"",
    content: "",
    forumSubTopicId: "",
  });
  useEffect(() => {
    dispatch(setForumTopics());
    dispatch(setForumSubTopics());
    // console.log("using effect");
  }, [dispatch]);
  const { forumSubTopics } = useSelector((state) => state.forum);
  // console.log("forumTopics", forumTopics);
  // console.log("forumSubTopics", forumSubTopics);

  const uploadForumPostImg = async () => {
    const response = await dispatch(postForumPostImg(imgData));
    // console.log("response.key", response.key);
    setImgKey(response.key);
  };

  //Upload the forum post
  const uploadForumPost = async () => {
    const { title, content, forumSubTopicId } = forumPostData;
    const createForumPostInput = {
      title,
      content,
      imagePath: imgKey,
      like: [],
      unlike: [],
      active:1,
      forumSubTopicID: forumSubTopicId,
    };
    const response = await dispatch(postForumPost(createForumPostInput));
    // console.log(
    //   "response.response.data.createForumPost.id",
    //   response.response.data.createForumPost.id
    // );
    // console.log("response.result", response.result);
    if (response.result) {
      history.push(`/forumPost/${response.response.data.createForumPost.id}`);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <FormControl sx={{ minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              SubTopic
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={forumPostData.forumSubTopicId}
              onChange={(e) =>
                setForumPostData({
                  ...forumPostData,
                  forumSubTopicId: e.target.value,
                })
              }
              autoWidth
              label="SubTopic"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {forumSubTopics.map((forumSubTopic) => {
                return (
                  <MenuItem value={forumSubTopic.id} key={forumSubTopic.id}>
                    {forumSubTopic.name} - {forumSubTopic.forumTopic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Title"
            value={forumPostData.title}
            onChange={(e) =>
              setForumPostData({ ...forumPostData, title: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
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
            <Button
              variant="contained"
              color="primary"
              onClick={uploadForumPostImg}
            >
              上传图片
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.content}>
            <TextField
              label="Content"
              value={forumPostData.content}
              minRows={20}
              variant="outlined"
              multiline
              fullWidth
              onChange={(e) =>
                setForumPostData({ ...forumPostData, content: e.target.value })
              }
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            endIcon={<PublishIcon />}
            onClick={uploadForumPost}
            color="primary"
          >
            上传新的Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForumPostUpload;
