import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createDepartment } from "../../../graphql/mutations";
import { fetchDepartments } from "../../../redux/slice/careerSlice";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "3rem",
    paddingInline: "1rem",
  },
  button: {
    cursor: "pointer",
  },
});

export default function PostDepartment(props) {
  const dispatch = useDispatch();
  const { departments } = useSelector((state) => state.career);
  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const classes = useStyles();
  const { user } = useSelector((state) => state.userAuth);
  const [info, setInfo] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailure, setSubmitFailure] = useState(false);
  const [exist, setExist] = useState(false);

  const [departmentData, setDepartmentData] = useState({
    name: "",
    introduction: "",
    email: undefined,
    leader: "",
  });

  const handleSubmit = async () => {
    if (!departmentData.name) {
      setInfo(true);
      return;
    }
    const departmentsList = departments.map((department) => department.name);

    if (departmentsList.includes(departmentData.name)) {
      setExist(true);
      return;
    }
    try {
      const createDepartmentInput = {
        id: departmentData.name,
        name: departmentData.name,
        introduction: departmentData.introduction,
        email: departmentData.email,
        leader: departmentData.leader,
        userID: user.username,
      };
      const newDepartment = await API.graphql(
        graphqlOperation(createDepartment, { input: createDepartmentInput })
      );
      console.log("newDepartment:", newDepartment.data.createDepartment);
      if (newDepartment) {
        setSubmitSuccess(true);

        // setTimeout(() => {
        //   const url = document.URL;
        //   window.open(url, "_self");
        //   // props.history.push("/staff/uwcssaJob");
        // }, 1200);
      }
    } catch (error) {
      console.log("submit resume failure: ", error);
      setSubmitFailure(true);
    }
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

  const handleCloseExist = (event, reason) => {
    setExist(false);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h5">部门名称</Typography>
        <TextField
          label="部门名称"
          variant="outlined"
          fullWidth
          value={departmentData.name}
          style={{ marginBlock: "2rem" }}
          onChange={(e) =>
            setDepartmentData({
              ...departmentData,
              name: e.target.value,
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">部门简介</Typography>
        <TextField
          label="部门简介"
          variant="outlined"
          fullWidth
          multiline
          minRows={5}
          value={departmentData.introduction}
          style={{ marginBlock: "2rem" }}
          onChange={(e) =>
            setDepartmentData({
              ...departmentData,
              introduction: e.target.value,
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">EMAIL</Typography>
        <TextField
          label="邮箱"
          variant="outlined"
          fullWidth
          value={departmentData.email}
          style={{ marginBlock: "2rem" }}
          onChange={(e) =>
            setDepartmentData({ ...departmentData, email: e.target.value })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">部长名称</Typography>
        <TextField
          label="部长名称"
          variant="outlined"
          fullWidth
          value={departmentData.leader}
          style={{ marginBlock: "2rem" }}
          onChange={(e) =>
            setDepartmentData({ ...departmentData, leader: e.target.value })
          }
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBlock: "2rem" }}
        startIcon={<CloudUploadIcon />}
        onClick={handleSubmit}
      >
        发布
      </Button>
      <Snackbar
        open={info}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseInfo}
      >
        <Alert severity="warning" onClose={handleCloseInfo}>
          请填写完整的部门名称!
        </Alert>
      </Snackbar>
      <Snackbar
        open={submitSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert severity="success" onClose={handleCloseSuccess}>
          提交成功!
        </Alert>
      </Snackbar>
      <Snackbar
        open={submitFailure}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseFailure}
      >
        <Alert severity="error" onClose={handleCloseFailure}>
          提交失败,请重试!
        </Alert>
      </Snackbar>
      <Snackbar
        open={exist}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseExist}
      >
        <Alert severity="error" onClose={handleCloseExist}>
          部门已存在!
        </Alert>
      </Snackbar>
    </div>
  );
}
