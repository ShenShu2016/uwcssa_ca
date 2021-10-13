import {
  Button,
  Checkbox,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import API from "@aws-amplify/api";
import Alert from "@material-ui/lab/Alert";
import Storage from "@aws-amplify/storage";
import { createUwcssaJobResume } from "../../graphql/mutations";
import { getUwcssaJob } from "../../graphql/queries";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "left",
    margin: "4rem 1rem",
  },
  title: {
    color: "#1472CE",
  },
  input: {
    display: "none",
  },
  form: {
    width: "16rem",
    marginTop: theme.spacing(1),
  },
  fileName: {
    paddingLeft: "1rem",
  },
  Checkbox: {
    paddingLeft: "1rem",
  }
}));

export default function ApplyJob(props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailure, setSubmitFailure] = useState(false);
  const [fileSize, setFileSize] = useState(false);
  const [resume, setResume] = useState("");
  const userAuth = useSelector((state) => state.userAuth);

  const [applyData, setApplyData] = useState({
    job: "",
    applyName: userAuth.user.username,
    applyEmail: userAuth.user.attributes.email,
    applyPhone: "",
    message: "",
  });

  useEffect(() => {
    fetchJob();
    console.log("applyData", applyData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchJob = async () => {
    try {
      const jobData = await API.graphql({
        query: getUwcssaJob,
        variables: { id: id },
        authMode: "AWS_IAM",
      });
      const job = jobData.data.getUwcssaJob;
      console.log("jobTitle: ", job.title);
      setApplyData({ ...applyData, job: job });
    } catch (error) {
      console.log("error on fetching Job", error);
    }
  };

  const onChange = (event) => {
    setApplyData({ ...applyData, [event.target.name]: event.target.value });
    console.log(applyData);
  };

  const addFile = (event) => {
    setResume(event.target.files[0]);
  };

  const postResume = async (resume) => {
    try {
      const response = await Storage.put(
        `career/${uuid()}${resume.name}`,
        resume
      );
      console.log("key: ", response.key);
      return response.key;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    if (userAuth.isAuthenticated === false) {
      setOpen(true);
      setTimeout(() => {
        props.history.push("/signIn");
      }, 1200);
    } else {
      if (
        !resume ||
        !applyData.applyName ||
        !applyData.applyEmail ||
        !applyData.applyPhone
      ) {
        setInfo(true);
      } else {
        if (resume.size > 1024 * 1024 * 20) {
          setFileSize(true);
          console.log("upload file size > 20M");
          return;
        }
        const key = await postResume(resume);
        try {
          const createUwcssaJobResumeInput = {
            name: applyData.applyName,
            email: applyData.applyEmail,
            phone: applyData.applyPhone,
            resumeFilePath: key,
            message: applyData.message,
            uwcssaJobResumeUwcssaJobId: applyData.job.id,
            uwcssaJobResumeUwcssaJobResumeStatusId: "已提交",
          };
          const newUwcssaJobResume = await API.graphql(
            graphqlOperation(createUwcssaJobResume, {
              input: createUwcssaJobResumeInput,
            })
          );
          console.log(
            "newUwcssaJobResume",
            newUwcssaJobResume.data.createUwcssaJobResume
          );
          if (newUwcssaJobResume) {
            setSubmitSuccess(true);
            setTimeout(() => {
              props.history.push("/career");
            }, 1200);
          }
        } catch (error) {
          console.log("submit resume failure: ", error);
          setSubmitFailure(true);
        }
      }
    }
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleCloseInfo = (event, reason) => {
    setInfo(false);
  };

  const handleCloseSuccess = (event, reason) => {
    setSubmitSuccess(false);
  };

  const handleCloseFailure = (event, reason) => {
    setSubmitFailure(false);
  };

  const handleCloseFileSize = (event, reason) => {
    setFileSize(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>{applyData.job.title}</Typography>
      <br />
      <Typography variant="body1">
        谢谢你的兴趣.请填写下面的表格并点击"提交"
      </Typography>
      <br />
      <div>* 使用简历申请</div>
      <input
        accept="*"
        className={classes.input}
        id="contained-button-file"
        name="files"
        // multiple
        type="file"
        onChange={(event) => addFile(event)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          上传文件
        </Button>
        {resume ? (
          <Typography variant="overline" className={classes.fileName}>
            {resume.name}
          </Typography>
        ) : (
          <Typography variant="overline" className={classes.fileName}>
            未上传文件
          </Typography>
        )}
      </label>
      <br />
      <br />
      <Typography variant="body1">个人信息</Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="applyName"
              placeholder="姓名"
              type="text"
              id="applyName"
              autoComplete="applyName"
              value={applyData.applyName}
              onChange={(event) => onChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="applyEmail"
              placeholder="邮箱"
              type="email"
              id="applyEmail"
              autoComplete="applyEmail"
              value={applyData.applyEmail}
              onChange={(event) => onChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="applyPhone"
              placeholder="手机号码"
              type="tel"
              id="applyPhone"
              autoComplete="applyPhone"
              value={applyData.applyPhone}
              onChange={(event) => onChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              required
              fullWidth
              name="message"
              placeholder="备注信息"
              type="text"
              id="message"
              autoComplete="message"
              value={applyData.message}
              onChange={(event) => onChange(event)}
            />
          </Grid>
        </Grid>
      </form>
      <br />
      <p>
        我保证我对所有问题的回答都是真实和正确的,没有任何形式的间接遗漏.我明白,如果我被录用,在本申请书中或在雇用前的过程中所作的任何虚假,误导性或其它不正确的陈述,都可能成为我被立即解雇的理由.
      </p>
      <Checkbox className={classes.checkbox} name="agree" checked={true} />
      我同意
      <br />
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        提交
      </Button>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error" onClose={handleClose}>
          请先登录!
        </Alert>
      </Snackbar>
      <Snackbar
        open={info}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseInfo}
      >
        <Alert severity="warning" onClose={handleCloseInfo}>
          请上传RESUME并补充完整个人信息!
        </Alert>
      </Snackbar>
      <Snackbar
        open={submitSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert severity="success" onClose={handleCloseSuccess}>
          申请提交成功,请耐心等待!
        </Alert>
      </Snackbar>
      <Snackbar
        open={submitFailure}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseFailure}
      >
        <Alert severity="error" onClose={handleCloseFailure}>
          申请提交失败,请重试!
        </Alert>
      </Snackbar>
      <Snackbar
        open={fileSize}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseFileSize}
      >
        <Alert severity="info" onClose={handleCloseFileSize}>
          您提交的文件超过了20M限制!
        </Alert>
      </Snackbar>
    </div>
  );
}
