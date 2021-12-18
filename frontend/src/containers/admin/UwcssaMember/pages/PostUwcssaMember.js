import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Link } from "react-router-dom";
import MUIRichTextEditor from "mui-rte";
import PublishIcon from "@mui/icons-material/Publish";
import { convertToRaw } from "draft-js";
import { fetchDepartments } from "../../../../redux/slice/careerSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { postUwcssaMember } from "../../../../redux/slice/uwcssaMemberSlice";
import { styled } from "@mui/material/styles";
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
export default function PostUwcssaMember() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef();
  useTitle("添加学生会成员");
  const [imgURL, setImgURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [departmentID, setDepartmentID] = useState("");
  const [content, setContent] = useState(null);

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
  const { departments } = useSelector((state) => state.career);
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const handleOnChange = (prop) => (e) => {
    const tempContent = JSON.stringify(convertToRaw(e.getCurrentContent()));
    setContent(tempContent);
  };

  const uploadUwcssaTeamMemberImg = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "uwcssaMember";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImgURL(response.payload);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const createUwcssaMemberInput = {
      ...data,
      id: getValues("userID"),
      active: true,
      content: content,
      imgURL: imgURL,
      departmentID: departmentID,
      owner: getValues("userID"),
    };
    console.log(createUwcssaMemberInput);
    const response = await dispatch(
      postUwcssaMember({ createUwcssaMemberInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push("/uwcssaMember");
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
        <Box>
          <Typography variant="h5">所属部门</Typography>
          <Button
            variant="contained"
            component={Link}
            to="/staff/uwcssaJob/postDepartment"
          >
            如果没有请点击这里添加部门
          </Button>
          <FormControl
            variant="outlined"
            fullWidth
            sx={{ marginBlock: "2rem" }}
          >
            <InputLabel id="demo-simple-select-outlined-label2">
              部门名称
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label2"
              id="demo-simple-select-outlined2"
              value={departmentID}
              onChange={(e) => setDepartmentID(e.target.value)}
              label="Topic"
            >
              {departments.map((department) => {
                return (
                  <MenuItem value={department.id} key={department.id}>
                    {department.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
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
                uploadUwcssaTeamMemberImg(e);
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
