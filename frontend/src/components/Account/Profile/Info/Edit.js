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
import React, { useEffect, useState } from "react";

import S3Image from "../../../S3/S3Image";
import Storage from "@aws-amplify/storage";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postSingleImage } from "../../../../redux/reducers/generalSlice";
import { putUserProfile } from "../../../../redux/reducers/profileSlice";
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
  const [avatarImgKey, setAvatarImgKey] = useState(user.avatarImgS3Key);
  const [avatarURL, setAvatarURL] = useState(null);
  const [backGroundImgKey, setBackGroundImgKey] = useState(
    user.backGroundImgKey
  );
  useEffect(() => {
    setFormData(user);
    setAvatarImgKey(user.avatarImgS3Key);
    setBackGroundImgKey(user.backGroundImgS3Key);
  }, [user]);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(user.avatarImgS3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setAvatarURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setAvatarURL(null);
      }
    };
    if (user.avatarImgS3Key) {
      getImage();
    }
  }, [user]);

  console.log("avatarURL", avatarURL);

  const [formData, setFormData] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    intro: user.intro,
    major: user.major,
    linkedIn: user.linkedIn,
    github: user.github,
  });

  const { id, firstName, lastName, intro, major, linkedIn, github } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserInput = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    intro: intro,
    major: major,
    avatarImgS3Key: avatarImgKey,
    backGroundImgS3Key: backGroundImgKey,
    linkedIn: linkedIn,
    github: github,
  };

  const uploadAvatarImg = async (e) => {
    setLoading(true);
    const imageData = e.target.files;
    const imageLocation = "user/Avatar";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      console.log("response", response);
      setAvatarImgKey(response.payload);
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
      setBackGroundImgKey(response.payload);
      setLoading(false);
    }
  };

  const update = async () => {
    setLoading(true);
    const response = await dispatch(putUserProfile({ updateUserInput }));
    handleEditClose();
    if (response) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 个人信息</DialogTitle>
          <Divider light />
          <DialogContent>
            <TextField
              required
              //autoFocus
              fullWidth
              margin="dense"
              id="firstName"
              name="firstName"
              label="名"
              variant="outlined"
              placeholder="张三的三"
              value={firstName}
              onChange={(e) => onChange(e)}
            />
            <TextField
              required
              //autoFocus
              fullWidth
              margin="dense"
              id="lastName"
              name="lastName"
              label="姓"
              variant="outlined"
              placeholder="张三的张"
              value={lastName}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <Box sx={{ textAlign: "center" }}>
              <S3Image
                S3Key={avatarImgKey}
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

            <S3Image S3Key={backGroundImgKey} style={{ width: "100%" }} />
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
            <TextField
              //autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="linkedIn"
              name="linkedIn"
              label="LinkedIn 网址"
              value={linkedIn}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              //autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="github"
              name="github"
              label="GitHub 网址"
              value={github}
              onChange={(e) => onChange(e)}
            />

            <div className={classes.splitter} />
            <TextField
              //autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="major"
              name="major"
              label="专业"
              placeholder="例如：机械工程"
              value={major}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              // autoFocus
              fullWidth
              margin="dense"
              id="intro"
              name="intro"
              label="自我介绍"
              variant="outlined"
              multiline
              value={intro}
              maxRows={20}
              minRows={5}
              onChange={(e) => onChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose} size="large">
              Cancel
            </Button>
            <Button
              onClick={update}
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
      </div>
    </div>
  );
}
