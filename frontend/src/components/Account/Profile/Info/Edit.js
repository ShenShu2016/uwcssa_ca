import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  postAvatarImg,
  postBackGroundImg,
  putUserInfo,
} from "../../../../redux/actions/userActions";

import S3Image from "../../../S3/S3Image";
import { makeStyles } from "@mui/styles";
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

  useEffect(() => {
    setFormData(user);
    setAvatarImgKey(user.avatarImgPath);
    setBackGroundImgKey(user.backGroundImgPath);
  }, [user]);

  const [formData, setFormData] = useState({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    intro: user.intro,
    major: user.major,
    linkedin: user.linkedin,
    github: user.github,
  });

  const [avatarImgKey, setAvatarImgKey] = useState(user.avatarImgPath);
  const [backGroundImgKey, setBackGroundImgKey] = useState(
    user.backGroundImgKey
  );
  //   console.log("formData", formData);
  const { id, firstName, lastName, intro, major, linkedin, github } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserInput = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    intro: intro,
    major: major,
    avatarImgPath: avatarImgKey,
    backGroundImgPath: backGroundImgKey,
    linkedin: linkedin,
    github: github,
  };

  const uploadAvatarImg = async (e) => {
    const response = await dispatch(postAvatarImg(e.target.files[0]));
    if (response) {
      setAvatarImgKey(response.key);
    }
  };

  const uploadBackGroundImgImg = async (e) => {
    const response = await dispatch(postBackGroundImg(e.target.files[0]));
    if (response) {
      setBackGroundImgKey(response.key);
    }
  };

  const update = () => {
    dispatch(putUserInfo(updateUserInput));
    handleEditClose();
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
              autoFocus
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
              autoFocus
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
            <Box>
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
                <Button variant="contained" component="span">
                  上传头像
                </Button>
              </label>
            </Box>
            <S3Image S3Key={avatarImgKey} style={{ width: "100%" }} />

            <Box>
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
                <Button variant="contained" component="span">
                  上传背景
                </Button>
              </label>
            </Box>
            <S3Image S3Key={backGroundImgKey} style={{ width: "100%" }} />
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="linkedin"
              name="linkedin"
              label="LinkedIn 网址"
              value={linkedin}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              autoFocus
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
              autoFocus
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
              autoFocus
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
            <Button onClick={update} variant="contained" size="large">
              更新
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
