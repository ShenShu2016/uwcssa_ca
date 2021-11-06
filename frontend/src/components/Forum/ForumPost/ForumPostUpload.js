import {
  Box,
  Grid,
  Button,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Chip,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import S3Image from "../../S3/S3Image";
import { useDispatch, useSelector } from "react-redux";
import {
  postForumPost,
  setForumSubTopics,
} from "../../../redux/actions/forumAction";
import PublishIcon from "@mui/icons-material/Publish";
import { useHistory } from "react-router";
import { postImage } from "../../../redux/actions/generalAction";
import { useTitle } from "../../../Hooks/useTitle";
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
const Input = styled("input")({
  display: "none",
});

function ForumPostUpload() {
  const classes = useStyles();
  useTitle("发布帖子");
  const dispatch = useDispatch();
  const [imgS3Keys, setImgS3Keys] = useState("");
  const history = useHistory();
  const { username } = useSelector((state) => state.userAuth.user);
  const [tagInput, setTagInput] = useState("");
  const [forumPostData, setForumPostData] = useState({
    title:"",
    content: "",
    forumSubTopicId: "",
    tags:[],
  });
  console.log(forumPostData);
  useEffect(() => {
    dispatch(setForumSubTopics());
  }, [dispatch]);
  const { forumSubTopics } = useSelector((state) => state.forum);
  // console.log("forumTopics", forumTopics);
  // console.log("forumSubTopics", forumSubTopics);

  const uploadForumPostImg = async (e) => {
    const imageData = e.target.files[0];
    const imageLocation = "forumPost";
    const response = await dispatch(postImage(imageData,imageLocation));
    console.log("response.key", response);
    if (response){
      setImgS3Keys(response.key);
    }
  };
  const deleteHandler = (i) => () => {
    const { tags: newTags } = { ...forumPostData };
    setForumPostData({
      ...forumPostData,
      tags: newTags.filter((tag) => tag !== i),
    });
  };
  const inputKeyDown = (e) => {
    const val = e.target.value;
    console.log("tagSuccess", forumPostData.tags);
    if (e.key === "Enter" && val) {
      if (
        forumPostData.tags.find((tag) => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      e.preventDefault();
      const newTags = [...forumPostData.tags].concat([val]);
      setForumPostData({ ...forumPostData, tags: newTags });
      setTagInput("");
      console.log("tagSuccess", forumPostData.tags);
    }
  };
  //Upload the forum post
  const uploadForumPost = async () => {
    const { title, content, forumSubTopicId, tags } = forumPostData;
    const createForumPostInput = {
      title,
      content,
      imgS3Keys: [imgS3Keys],
      active:true,
      // lastReplyAt:
      userID: username,
      forumSubTopicID: forumSubTopicId,
      tags: tags,
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
          <TextField
          label="tags"
          value={tagInput}
          variant="outlined"
          fullWidth
          onKeyDown={inputKeyDown}
          onChange={(e) => setTagInput(e.target.value)}
        />
        {forumPostData.tags.map((data) => {
          return <Chip key={data} label={data} onDelete={deleteHandler(data)} />;
      })}
        </Grid>
        <Grid item xs={6}>
        <Box>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => {
              // setImgData();
              uploadForumPostImg(e);
            }}
          />
          <Button variant="contained" component="span">
            上传图片
          </Button>
        </label>
      </Box>
      <S3Image S3Key={imgS3Keys} style={{ width: "100%" }} />
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
