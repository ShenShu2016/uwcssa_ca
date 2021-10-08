import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect, useSelector } from "react-redux";
import { API } from "aws-amplify";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { makeStyles, Typography } from "@material-ui/core";
import { getForumTopic, listForumTopics } from "../../../graphql/queries";
import {
  setForumTopics,
  setForumSubTopics,
  postForumPost,
  postForumPostImg,
} from "../../../redux/actions/forumAction";
import { createForumPost } from "../../../graphql/mutations";
import { InputLabel, Button, Box, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PublishIcon from "@material-ui/icons/Publish";
import Grid from "@mui/material/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginTop: "2rem",
  },
  imgPreview: {
    minHeight: "300px",
    maxHeight:"300px",
    maxWidth:"300px",
    backgroundColor: "#f4f4f4",
  },
}));

const ForumPost = ({
  setForumTopics,
  setForumSubTopics,
  postForumPost,
  postForumPostImg,
}) => {
  const classes = useStyles();
  const [imgData, setImgData] = useState("");
  const [imgKey, setImgKey] = useState("");
  const history = useHistory();
  const [forumPostData, setForumPostData] = useState({
    content: "",
    forumSubTopicId: "",
  });
  useEffect(() => {
    setForumTopics();
    setForumSubTopics();
    console.log("using effect");
  }, []);
  const { forumTopics, forumSubTopics } = useSelector((state) => state.forum);
  console.log("forumTopics", forumTopics);
  console.log("forumSubTopics", forumSubTopics);

  const uploadForumPostImg = async () => {
    const response = await postForumPostImg(imgData);
    console.log("response.key", response.key);
    setImgKey(response.key);
  };

  //Upload the forum post
  const uploadForumPost = async () => {
    const { content, forumSubTopicId } = forumPostData;
    const createForumPostInput = {
      content,
      imagePath: imgKey,
      like: [],
      unlike: [],
      forumPostForumSubTopicId: forumSubTopicId,
    };
    const response = await postForumPost(createForumPostInput);
    console.log(
      "response.response.data.createForumPost.id",
      response.response.data.createForumPost.id
    );
    console.log("response.result", response.result);
    if (response.result) {
      history.push(`/forumPost/${response.response.data.createForumPost.id}`);
    }
  };
  
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
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
                  <MenuItem value={forumSubTopic.name} key={forumSubTopic.name}>
                    {forumSubTopic.name} - {forumSubTopic.forumTopic.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
            上传新的Type
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null, {
  setForumTopics,
  setForumSubTopics,
  postForumPost,
  postForumPostImg
})(ForumPost);
