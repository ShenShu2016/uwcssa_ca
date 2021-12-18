import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../redux/slice/generalSlice";
import { styled } from "@mui/material/styles";
import { updateUwcssaMemberDetail } from "../../redux/slice/uwcssaMemberSlice";
import { useDispatch } from "react-redux";

const Input = styled("input")({
  display: "none",
});
const useStyles = makeStyles({
  root: {},
  splitter: {
    marginBlock: "2.5rem",
  },
  starEndDate: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function Edit({ editOpen, handleEditClose, item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(item.imgURL);
  const [newContent, setNewContent] = useState(item.content);
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      summary: item.summary,
    },
  });

  const onSubmit = async (data) => {
    const updateUwcssaMemberInput = {
      ...data,
      id: item.id,
      imgURL: imgURL,
      content: newContent,
      startDate: startDate,
      endDate: endDate,
    };
    setLoading(true);
    const response = await dispatch(
      updateUwcssaMemberDetail({ updateUwcssaMemberInput })
    );
    handleEditClose();
    if (response) {
      console.log(response);
      setLoading(false);
    }
  };

  const uploadAvatarImg = async (e) => {
    setLoading(true);
    const imageData = e.target.files;
    const imageLocation = "uwcssaMember";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setImgURL(response.payload);
      setLoading(false);
    }
  };
  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setNewContent(tempContent);
  };
  return (
    <div className={classes.root}>
      <form>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 我的信息</DialogTitle>
          <Divider light />
          <DialogContent>
            <Controller
              name="title"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
                maxLength: 100,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="我的Title"
                  variant="outlined"
                  placeholder="技术部部长/成员"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.title}
                  helperText={errors.title ? "不符合" : null}
                />
              )}
            />
            <Controller
              name="summary"
              control={control}
              rules={{
                required: false,
                pattern: /\D+/,
                maxLength: 100,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="简介"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.summary}
                  helperText={errors.summary ? "不符合" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Box sx={{ textAlign: "center" }}>
              <img
                src={imgURL}
                alt="avatarImgURL"
                style={{
                  width: "100%",
                }}
              />
            </Box>
            <Box my={"2rem"}>
              <label htmlFor="uploadAvatarImg">
                <Input
                  accept="image/*"
                  id="uploadAvatarImg"
                  type="file"
                  onChange={(e) => {
                    // setImgData();
                    uploadAvatarImg(e);
                  }}
                />
                <Button
                  variant="contained"
                  component="span"
                  fullWidth
                  disabled={loading}
                >
                  上传照片
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
              </label>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box className={classes.starEndDate}>
                <div>
                  <DatePicker
                    label="加入日期"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div>
                  <DatePicker
                    label="截止日期"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </Box>
            </LocalizationProvider>
            <Box sx={{ my: "2rem" }}>
              <Typography variant="h5">编辑你的内容</Typography>
              <MUIRichTextEditor
                label="Type something here..."
                defaultValue={item.content}
                onChange={handleOnChange()}
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
          </DialogContent>

          <DialogActions>
            <Button onClick={handleEditClose} size="large">
              取消
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="large"
              disabled={loading}
            >
              更新
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
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
