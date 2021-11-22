import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../../components/CustomMUI/CustomTags";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  postForumPost,
  removeSelectedForumSubTopic,
  selectedForumSubTopic,
} from "../../redux/reducers/forumSlice";
import { useDispatch, useSelector } from "react-redux";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CustomAvatar from "../../components/CustomMUI/CustomAvatar";
import ForumAdSide from "../../components/Forum/ForumAdSide";
import ForumPostImageSwipe from "../../components/Forum/ForumPost/ForumPostDetail/ForumPostImageSwipe";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PublishIcon from "@mui/icons-material/Publish";
import { Storage } from "@aws-amplify/storage";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { indigo } from "@mui/material/colors";
import { postMultipleImages } from "../../redux/reducers/generalSlice";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const Input = styled("input")({
  display: "none",
});

export default function ForumPostUpload() {
  useTitle("发布帖子");
  const { forumSubTopicID, forumTopicID } = useParams();

  console.log(forumTopicID, forumSubTopicID);
  const dispatch = useDispatch();
  const [imageKeys, setImageKeys] = useState("");
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const history = useHistory();
  const { username } = useSelector((state) => state.userAuth.user);
  const user = useSelector((state) => state.userAuth.userProfile);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [trigger, setTrigger] = useState(true);
  const [checkActive, setCheckActive] = useState(true);
  const handleClickCheck = () => setCheckActive(!checkActive);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(!open);
  const [fakePost, setFakePost] = useState({
    title: "标题在这里",
    content: "这是内容",
    tags: ["我是一个tag"],
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
    user: user,
    owner: username,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  // console.log(forumPostData);
  useEffect(() => {
    if (forumSubTopicID && forumSubTopicID !== "") {
      dispatch(selectedForumSubTopic(forumSubTopicID));
    }
    return () => dispatch(removeSelectedForumSubTopic());
  }, [forumSubTopicID, dispatch]);
  const { forumSubTopic } = useSelector((state) => state.forum.selected);
  //upload and get img
  const uploadForumPostImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = "forumPost";

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    console.log("response", response);
    if (response.meta.requestStatus === "fulfilled") {
      const newImg = response.payload.map((key) => [key, "temp"]);
      const temp = Object.entries(imageKeys).concat(newImg);
      setImageKeys(Object.fromEntries(temp));
    }
  };
  useEffect(() => {
    const getImage = async () => {
      try {
        // setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Object.keys(imageKeys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        // setImgKeyFromServer((url) => url.concat(imageAccessURL));
        setImgKeyFromServer(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    // console.log("imageKeys", imageKeys);
    if (imageKeys && trigger === true) {
      getImage();
    }
  }, [imageKeys, trigger]);
  useEffect(() => {
    if (
      Object.values(imageKeys).includes("temp") &&
      Object.values(imageKeys).length === imgKeyFromServer.length &&
      trigger
    ) {
      const images = Object.entries(imageKeys);
      console.log("Bug here!", images);
      if (Object.values(imageKeys).length === 1) {
        let temp = {};
        temp[images[0][0]] = imgKeyFromServer[0];
        console.log("almost", temp);
        setImageKeys(temp);
      } else {
        imgKeyFromServer.map((url, idx) => (images[idx][1] = url));
        console.log("almost", images);
        setImageKeys(Object.fromEntries(images));
      }
      setTrigger(false);
    }
  }, [imgKeyFromServer, imageKeys, trigger]);

  //Upload the forum post
  const onSubmit = async (data) => {
    const createForumPostInput = {
      ...data,
      imgS3Keys: imageKeys,
      active: checkActive,
      lastReplyAt: new Date().toISOString(),
      userID: username,
      forumSubTopicID: forumSubTopicID,
      tags: GetTags(),
      essential: false,
      sortKey: "SortKey",
    };
    const response = await dispatch(postForumPost(createForumPostInput));
    console.log("response: ", response);
    if (response.meta.requestStatus === "fulfilled") {
      history.push(
        `/forum/${response.payload.response.data.createForumPost.forumSubTopic.id}/${response.payload.response.data.createForumPost.forumSubTopic.forumTopicID}/${response.payload.response.data.createForumPost.id}`
      );
    }
  };
  const handleDeleteImg = (imgKey) => {
    const newImg = [...imgKeyFromServer].filter((key) => key !== imgKey);
    const images = { ...imageKeys };
    const newKeys = Object.fromEntries(
      Object.entries(images).filter(([key, value]) => value !== imgKey)
    );
    setImgKeyFromServer(newImg);
    setImageKeys(newKeys);
  };

  const handleKeyDown = (e) => {
    const newTags = [...fakePost.tags, e];
    setFakePost({ ...fakePost, tags: newTags });
  };

  const handleDelete = (e) => {
    const newTags = fakePost.tags.filter((tag) => tag !== e);
    setFakePost({ ...fakePost, tags: newTags });
  };
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "grey.50",
        margin: "auto",
        maxWidth: "100%",
        paddingInline: { xs: 0, sm: "1rem" },
      }}
    >
      {/* main  */}
      <Box
        sx={{
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        {Object.keys(forumSubTopic).length === 0 ? (
          <Skeleton
            variant="rectangular"
            width={220}
            height={50}
            sx={{ m: 4 }}
          />
        ) : (
          <Box sx={{ padding: "1rem", maxWidth: "100%" }}>
            <Breadcrumbs aria-label="breadcrumb">
              <span style={{}}>
                <Button color="inherit" component={Link} to={`/`}>
                  UWCSSA
                </Button>
              </span>
              <span style={{}}>
                <Button color="inherit" component={Link} to={`/forum`}>
                  论坛
                </Button>
              </span>
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  color="inherit"
                  component={Link}
                  to={`/forum/${forumSubTopic.forumTopic.id}`}
                >
                  {forumSubTopic.forumTopic.name}
                </Button>
              </span>
              <span style={{ cursor: "not-allowed" }}>
                <Button
                  color="inherit"
                  component={Link}
                  // disabled
                  to={`/forum/${forumTopicID}/${forumSubTopic.id}`}
                >
                  {forumSubTopic.name}
                </Button>
              </span>
            </Breadcrumbs>
          </Box>
        )}
        {/* upload and preview */}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          // divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 3 }}
        >
          {/* upload */}
          <Paper
            elevation={2}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            //variant="outlined"
            sx={{ p: 1, width: { xs: 360, sm: 550, md: 880 } }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                fontWeight="bold"
                color="primary"
                sx={{ p: 1 }}
              >
                发布新帖子
              </Typography>
              <Box sx={{ my: 1 }}>
                <IconButton onClick={handleClickOpen}>
                  <VisibilityIcon
                    sx={open ? { color: "grey" } : { color: "teal" }}
                  />
                </IconButton>
              </Box>
            </Stack>

            <Stack>
              {/* title */}
              <Box sx={{ my: 1 }}>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={`标题${Boolean(errors.title) ? " 必填!" : ""}`}
                      variant="outlined"
                      placeholder="请想一个好的标题"
                      autoFocus
                      fullWidth
                      required
                      helperText={
                        errors.title ? "标题都想不出来怎么发帖啊" : null
                      }
                      error={!!errors.title}
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setFakePost({ ...fakePost, title: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>
              {/* tags */}
              <Box
                // display="flex"
                // display="inline-block"
                overflowY="hidden"
                // flexWrap="wrap"
                sx={{ my: 1 }}
              >
                <CustomTags
                  placeholder="请输入简单的关键词"
                  initial={fakePost.tags}
                  onKeyDown={(e) => handleKeyDown(e)}
                  onDelete={(e) => handleDelete(e)}
                />
              </Box>
              {/* content */}
              <Box sx={{ my: 1 }}>
                <Controller
                  name="content"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      placeholder="畅所欲言......"
                      label={`内容${Boolean(errors.content) ? " 必填!" : ""}`}
                      error={!!errors.content}
                      helperText={errors.content ? "你在想什么" : null}
                      value={value}
                      minRows={6}
                      variant="outlined"
                      required
                      multiline
                      fullWidth
                      onChange={(e) => {
                        onChange(e);
                        setFakePost({ ...fakePost, content: e.target.value });
                      }}
                    />
                  )}
                />
              </Box>
              {/* images */}
              <Paper
                elevation={2}
                sx={{
                  my: 1,
                  bgcolor: indigo[50],
                  width: "100%",
                  minHeight: 60,
                }}
              >
                <Stack
                  direction="column"
                  // justifyContent="center"
                  // alignItems="center"
                >
                  <Box
                    sx={{
                      p: 1,
                      maxWidth: 420,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        multiple
                        onChange={(e) => {
                          uploadForumPostImg(e);
                          setTrigger(true);
                          setUploadStatus("succeeded");
                          setTimeout(() => {
                            setUploadStatus("idle");
                          }, 2500);
                        }}
                      />
                      <Button
                        variant="outlined"
                        component="span"
                        sx={{ width: 140, height: 36 }}
                      >
                        <AddPhotoAlternateIcon sx={{ fontSize: 36 }} />
                        <Typography fontSize="12px">上传媒体图片</Typography>
                      </Button>
                    </label>

                    {imgKeyFromServer.length === 0 ? (
                      uploadStatus !== "succeeded" ? null : (
                        <Stack
                          direction="row"
                          spacing={1}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography fontSize="15px" color="primary">
                            正在上传中...
                          </Typography>
                          <CircularProgress />
                        </Stack>
                      )
                    ) : (
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          p: 1,
                        }}
                      >
                        <Typography
                          fontSize="15px"
                          color="primary"
                          fontWeight="lighter"
                        >
                          已上传 {imgKeyFromServer.length}/5
                        </Typography>
                        {uploadStatus !== "succeeded" ? null : (
                          <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Typography fontSize="15px" color="primary">
                              正在上传中...
                            </Typography>
                            <CircularProgress />
                          </Stack>
                        )}
                      </Stack>
                    )}
                  </Box>
                  <Stack direction="row" spacing={{ sm: 1, md: 3 }}>
                    {imgKeyFromServer &&
                      imgKeyFromServer.map((imgKey, imgKeyIdx) => (
                        <Box
                          key={imgKeyIdx}
                          sx={{
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            zIndex: "1",
                            bgcolor: "white",
                            borderRadius: "5px",
                            // opacity: 0.2,
                          }}
                        >
                          <Box
                            component="img"
                            src={imgKey}
                            key={imgKeyIdx}
                            alt="images"
                            zIndex="1"
                            borderRadius="5px"
                            sx={{
                              top: "50%",
                              left: "50%",
                              position: "absolute",
                              transform: "translate(-50%,-50%)",
                              maxHeight: "100px",
                              maxWidth: "100%",
                            }}
                          />
                          <IconButton
                            color="inherit"
                            key={imgKey}
                            onClick={() => handleDeleteImg(imgKey)}
                            sx={{
                              top: 0,
                              right: 0,
                              zIndex: "2",
                              position: "absolute",
                            }}
                          >
                            <HighlightOffIcon />
                          </IconButton>
                        </Box>
                      ))}
                  </Stack>
                </Stack>
              </Paper>
              {/* submit */}
              <Stack
                sx={{ my: 1 }}
                direction="row"
                justifyContent="space-between"
              >
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={checkActive}
                        onChange={handleClickCheck}
                      />
                    }
                    label={"公开帖子"}
                  />
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  endIcon={<PublishIcon />}
                  // onClick={uploadForumPost}
                  color="primary"
                >
                  上传新的帖子
                </Button>
              </Stack>
            </Stack>
          </Paper>
          {/* preview */}
          {open && (
            <Paper
              elevation={2}
              //variant="outlined"
              sx={{ p: 1, width: { xs: 360, sm: 550, md: 880 } }}
            >
              {fakePost.title}
              <Stack
                direction="row"
                spacing={{ sm: 1, md: 2 }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                  minWidth: { xs: 200, md: 600 },
                  height: "100%",
                }}
                // sx={{ width: 200, heigh: 200 }}
              >
                <Box
                  sx={{
                    minWidth: 80,
                  }}
                >
                  <Stack
                    direction="column"
                    spacing={1}
                    justifyContent="space-between"
                    alignContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        m: { xs: 0, sm: 1 },
                        width: { xs: 23, sm: 32 },
                      }}
                    >
                      <CustomAvatar user={user} link={true} />
                    </Box>

                    <Box component="span" sx={{ fontSize: 14 }}>
                      {fakePost.owner}
                    </Box>
                    <Box component="span" sx={{ fontSize: 14 }}>
                      (楼主）
                    </Box>
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontSize: 18 }}
                    >
                      徽章
                    </Box>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    // minWidth: 200,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                      height: "100%",
                    }}
                  >
                    <Box sx={{ mt: 1, minHeight: 120 }}>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {fakePost.content}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "96%",
                        maxHeight: 210,
                      }}
                    >
                      {imgKeyFromServer.length !== 0 ? (
                        <Box sx={{ height: 210 }}>
                          <ForumPostImageSwipe images={imgKeyFromServer} />
                        </Box>
                      ) : (
                        <Box sx={{ height: 40 }}>
                          <Typography variant="subtitle1">
                            你上传图片的将出现在这里
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          )}
        </Stack>
      </Box>
      {/* forum ad side */}
      <Box
        sx={
          {
            // width: 220,
          }
        }
      >
        <ForumAdSide />
      </Box>
    </Box>
  );
}
