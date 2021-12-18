import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, {
  GetTags,
} from "../../../../components/CustomMUI/CustomTags";
import React, { useRef, useState } from "react";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MUIRichTextEditor from "mui-rte";
import PublishIcon from "@mui/icons-material/Publish";
import { convertToRaw } from "draft-js";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postFoundingMember } from "../../../../redux/slice/foundingMemberSlice";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTitle } from "../../../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
    paddingInline: "1rem",
  },
  content: {
    border: "3px",
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
  },
  container: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
    position: "relative",
  },
  child: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
const Input = styled("input")({
  display: "none",
});
export default function PostFoundingMember() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef();
  useTitle("添加创作者");
  const [imgURL, setImgURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [tags, setTags] = useState([]);
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      summary: "",
      userID: "",
    },
  });

  const handleOnChange = (prop) => (e) => {
    const tempContent = JSON.stringify(convertToRaw(e.getCurrentContent()));
    setContent(tempContent);
  };
  const handleKeyDown = (e) => {
    const newTags = [...tags, e];
    setTags(newTags);
  };

  const handleDelete = (e) => {
    const newTags = tags.filter((tag) => tag !== e);
    setTags(newTags);
  };

  const uploadFoundingMemberMemberImg = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "foundingMember";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImgURL(response.payload);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const createFoundingMemberInput = {
      ...data,
      id: getValues("userID"),
      active: true,
      content: content,
      mainParts: GetTags(),
      imgURL: imgURL,
      owner: getValues("userID"),
    };
    console.log(createFoundingMemberInput);
    const response = await dispatch(
      postFoundingMember({ createFoundingMemberInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push("/foundingMember");
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);
      alert(response.error.message);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h3">添加创作者 </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              margin="normal"
              fullWidth
              required
              id="title"
              label="职称"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={!!errors.title}
              helperText={errors.title ? "不能为空" : null}
            />
          )}
        />
        <Controller
          name="summary"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              margin="normal"
              fullWidth
              required
              id="summary"
              label="简短描述"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={!!errors.summary}
              helperText={errors.summary ? "不能为空" : null}
            />
          )}
        />
        <Controller
          name="userID"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              margin="normal"
              fullWidth
              required
              id="userID"
              label="用户名"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={!!errors.userID}
              helperText={errors.userID ? "不能为空" : null}
            />
          )}
        />
        <CustomTags
          placeholder="负责哪几个部分"
          initial={tags}
          onKeyDown={(e) => handleKeyDown(e)}
          onDelete={(e) => handleDelete(e)}
        />
        <div>
          {imgURL ? (
            <Box className={classes.picture}>
              <img
                src={imgURL}
                alt="imgURL"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height: "300px",
                }}
              />
            </Box>
          ) : (
            <Box className={classes.container}>
              <Box className={classes.child} color={"grey.700"}>
                <InsertPhotoIcon
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "100%",
                    height: "100px",
                    verticalAlign: "middle",
                    lineHeight: "300px",
                  }}
                />
                <Typography gutterBottom variant="h5">
                  上传个人照片
                </Typography>
              </Box>
            </Box>
          )}
          <label htmlFor="poster">
            <Input
              accept="poster/*"
              id="poster"
              type="file"
              onChange={(e) => {
                uploadFoundingMemberMemberImg(e);
              }}
            />
            <Button variant="contained" component="span" disabled={loading}>
              上传个人照片
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-0.75rem",
                  marginLeft: "-0.75rem",
                }}
              />
            )}
          </label>
        </div>
        <Box className={classes.content}>
          <MUIRichTextEditor
            label="活动详情"
            onChange={handleOnChange()}
            inlineToolbar={true}
            controls={[
              "title",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "highlight",
              "undo",
              "redo",
              "link",
              "media",
              "numberList",
              "bulletList",
              "quote",
              "code",
              "clear",
            ]}
          />
        </Box>
        <Button
          variant="contained"
          endIcon={<PublishIcon />}
          type="submit"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ my: 4 }}
        >
          上传 Article
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-0.75rem",
                marginLeft: "-0.75rem",
              }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
}
