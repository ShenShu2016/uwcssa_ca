import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import API from "@aws-amplify/api";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { createUwcssaJob } from "../../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listDepartments } from "../../../graphql/queries";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "3rem",
    paddingInline: "1rem",
  },
  table: {
    marginBlock: "2rem",
  },
  button: {
    cursor: "pointer",
  },
});
export default function PostUwcssaJob(props) {
  const classes = useStyles();

  const { user } = useSelector((state) => state.userAuth);
  const [info, setInfo] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailure, setSubmitFailure] = useState(false);
  const [depart, setDepart] = useState(false);

  const [uwcssaJobData, setUwcssaJobData] = useState({
    introduction: "",
    title: "",
    requirements: [""],
    bonus: [""],
    benefits: [""],
    schedule: [""],
    owner: user ? user.username : "",
    departmentName: "",
  });

  let departmentList = [];

  const handleSubmit = async () => {
    if (
      !uwcssaJobData.title ||
      !uwcssaJobData.departmentName ||
      !uwcssaJobData.requirements.filter((e) => e !== "")
    ) {
      setInfo(true);
      return;
    }
    let allDepartments = await API.graphql(graphqlOperation(listDepartments));
    allDepartments.data.listDepartments.items.map((data) =>
      departmentList.push(data.name)
    );
    console.log("list:", departmentList);
    if (departmentList.indexOf(uwcssaJobData.departmentName) < 0) {
      setDepart(true);
      return;
    }
    console.log(uwcssaJobData);
    try {
      const createUwcssaJobInput = {
        title: uwcssaJobData.title,
        introduction: uwcssaJobData.introduction,
        requirements: uwcssaJobData.requirements.filter((e) => e !== ""),
        schedule: uwcssaJobData.schedule.filter((e) => e !== ""),
        benefits: uwcssaJobData.benefits.filter((e) => e !== ""),
        bonus: uwcssaJobData.bonus.filter((e) => e !== ""),
        like: [""],
        unlike: [""],
        active: true,
        uwcssaJobDepartmentId: uwcssaJobData.departmentName,
      };
      const newUwcssaJob = await API.graphql(
        graphqlOperation(createUwcssaJob, { input: createUwcssaJobInput })
      );
      console.log("newUwcssaJob:", newUwcssaJob.data.createUwcssaJob);
      if (newUwcssaJob) {
        setSubmitSuccess(true);
        setTimeout(() => {
          props.history.push("/staff/uwcssaJob");
        }, 1200);
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

  const handleCloseDepart = (event, reason) => {
    setDepart(false);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h5">TITLE</Typography>
        <TextField
          label="职位名称"
          variant="outlined"
          fullWidth
          value={uwcssaJobData.title}
          style={{marginBlock:"2rem"}}
          onChange={(e) =>
            setUwcssaJobData({ ...uwcssaJobData, title: e.target.value })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">DEPARTMENT NAME</Typography>
        <TextField
          label="部门名称"
          variant="outlined"
          fullWidth
          value={uwcssaJobData.departmentName}
          style={{marginBlock: "2rem"}}
          onChange={(e) =>
            setUwcssaJobData({
              ...uwcssaJobData,
              departmentName: e.target.value,
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">INTRODUCTION</Typography>
        <TextField
          label="简介"
          variant="outlined"
          fullWidth
          multiline
          minRows={5}
          value={uwcssaJobData.introduction}
          style={{marginBlock: "2rem"}}
          onChange={(e) =>
            setUwcssaJobData({ ...uwcssaJobData, introduction: e.target.value })
          }
        />
      </Box>
      <Box>
        <Typography variant="h5">REQUIREMENTS</Typography>
        <TableContainer className={classes.table}>
          <Table aria-label="simple table">
            <TableBody>
              {uwcssaJobData.requirements.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" width="1%">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="standard"
                      fullWidth
                      type="text"
                      value={row}
                      onChange={(e) => {
                        const newRequirements = uwcssaJobData.requirements;
                        newRequirements[index] = e.target.value;
                        setUwcssaJobData({
                          ...uwcssaJobData,
                          requirements: newRequirements,
                        });
                        console.log(uwcssaJobData);
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;
                          newRequirements.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;
                          console.log(newRequirements.length);
                          if (newRequirements.length > 1) {
                            newRequirements.splice(index, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Typography variant="h5">SCHEDULE</Typography>
        <TableContainer className={classes.table}>
          <Table aria-label="simple table">
            <TableBody>
              {uwcssaJobData.schedule.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" width="1%">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="standard"
                      fullWidth
                      type="text"
                      value={row}
                      onChange={(e) => {
                        const newSchedule = uwcssaJobData.schedule;
                        newSchedule[index] = e.target.value;
                        setUwcssaJobData({
                          ...uwcssaJobData,
                          schedule: newSchedule,
                        });
                        console.log(uwcssaJobData);
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newSchedule = uwcssaJobData.schedule;
                          newSchedule.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            schedule: newSchedule,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newSchedule = uwcssaJobData.schedule;
                          console.log(newSchedule.length);
                          if (newSchedule.length > 1) {
                            newSchedule.splice(index, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            schedule: newSchedule,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Typography variant="h5">BENEFITS</Typography>
        <TableContainer className={classes.table}>
          <Table aria-label="simple table">
            <TableBody>
              {uwcssaJobData.benefits.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" width="1%">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="standard"
                      fullWidth
                      type="text"
                      value={row}
                      onChange={(e) => {
                        const newBenefits = uwcssaJobData.benefits;
                        newBenefits[index] = e.target.value;
                        setUwcssaJobData({
                          ...uwcssaJobData,
                          benefits: newBenefits,
                        });
                        console.log(uwcssaJobData);
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newBenefits = uwcssaJobData.benefits;
                          newBenefits.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            benefits: newBenefits,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newBenefits = uwcssaJobData.benefits;
                          console.log(newBenefits.length);
                          if (newBenefits.length > 1) {
                            newBenefits.splice(index, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            benefits: newBenefits,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Typography variant="h5">BONUS</Typography>
        <TableContainer className={classes.table}>
          <Table aria-label="simple table">
            <TableBody>
              {uwcssaJobData.bonus.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" width="1%">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <TextField
                      variant="standard"
                      fullWidth
                      type="text"
                      value={row}
                      onChange={(e) => {
                        const newBonus = uwcssaJobData.bonus;
                        newBonus[index] = e.target.value;
                        setUwcssaJobData({ ...uwcssaJobData, bonus: newBonus });
                        console.log(uwcssaJobData);
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newBonus = uwcssaJobData.bonus;
                          newBonus.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            bonus: newBonus,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newBonus = uwcssaJobData.bonus;
                          console.log(newBonus.length);
                          if (newBonus.length > 1) {
                            newBonus.splice(index, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            bonus: newBonus,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{marginBlock: "2rem"}}
        startIcon={<CloudUploadIcon />}
        onClick={handleSubmit}
      >
        Upload
      </Button>
      <Snackbar
        open={info}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseInfo}
      >
        <Alert severity="warning" onClose={handleCloseInfo}>
          请补充完整 Title, Requirements 及 Department Name 的信息!
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
        open={depart}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={handleCloseDepart}
      >
        <Alert severity="error" onClose={handleCloseDepart}>
          部门不存在,请重新填写部门名称!
        </Alert>
      </Snackbar>
    </div>
  );
}
