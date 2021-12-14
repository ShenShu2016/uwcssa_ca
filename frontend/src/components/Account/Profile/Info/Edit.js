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
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { putUserProfile } from "../../../../redux/slice/profileSlice";
import { styled } from "@mui/material/styles";
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

export default function Edit({ user, editOpen, handleEditClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [avatarImgURL, setAvatarImgURL] = useState(user.avatarImgURL);
  const [backGroundImgURL, setBackGroundImgURL] = useState(
    user.backGroundImgURL
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      intro: user.intro,
      major: user.major,
      linkedIn: user.linkedIn,
      github: user.github,
    },
  });

  const onSubmit = async (data) => {
    const updateUserInput = {
      ...data,
      avatarImgURL: avatarImgURL,
      backGroundImgURL: backGroundImgURL,
    };
    setLoading(true);
    const response = await dispatch(putUserProfile({ updateUserInput }));
    handleEditClose();
    if (response) {
      setLoading(false);
    }
  };

  const uploadAvatarImg = async (e) => {
    setLoading(true);
    const imageData = e.target.files;
    const imageLocation = "user/Avatar";
    const maxPixel = 300;
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation, maxPixel })
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setAvatarImgURL(response.payload);
      setLoading(false);
    }
  };

  const uploadBackGroundImgImg = async (e) => {
    setLoading(true);
    const imageData = e.target.files;
    const imageLocation = "user/BackGround";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setBackGroundImgURL(response.payload);
      console.log("response", response);
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 个人信息</DialogTitle>
          <Divider light />
          <DialogContent>
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: false,
                pattern: /\D+/,
                maxLength: 100,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="名"
                  variant="outlined"
                  placeholder="张三的三"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? "不符合" : null}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: false,
                pattern: /\D+/,
                maxLength: 100,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="姓"
                  variant="outlined"
                  placeholder="张三的张"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? "不符合" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Box sx={{ textAlign: "center" }}>
              <img
                src={avatarImgURL}
                alt="avatarImgURL"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
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
                  上传头像
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
            <img
              src={backGroundImgURL}
              alt={"background"}
              style={{ width: "100%" }}
            />
            <Box my={"2rem"}>
              <label htmlFor="uploadBackGroundImgImg">
                <Input
                  accept="image/*"
                  id="uploadBackGroundImgImg"
                  type="file"
                  onChange={(e) => {
                    // setImgData();
                    uploadBackGroundImgImg(e);
                  }}
                />
                <Button
                  variant="contained"
                  component="span"
                  fullWidth
                  disabled={loading}
                >
                  上传背景
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

            <Controller
              name="linkedIn"
              control={control}
              rules={{
                required: false,
                pattern: /linkedin.com/i,
                maxLength: 200,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="LinkedIn 网址"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.linkedIn}
                  helperText={errors.linkedIn ? "格式不对" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="github"
              control={control}
              rules={{
                required: false,
                pattern: /github.com/i,
                maxLength: 200,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="GitHub 网址"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.github}
                  helperText={errors.github ? "格式不对" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="major"
              control={control}
              rules={{
                required: false,
                pattern: /\D+/,
                maxLength: 100,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="专业"
                  variant="outlined"
                  placeholder="例如：机械工程"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.major}
                  helperText={errors.major ? "不能为空" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="intro"
              control={control}
              rules={{
                required: false,
                pattern: /\D+/,
                maxLength: 500,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="自我介绍"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  multiline
                  onChange={onChange}
                  value={value}
                  maxRows={20}
                  minRows={5}
                  error={!!errors.intro}
                  helperText={errors.intro ? "不能为空" : null}
                />
              )}
            />
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
