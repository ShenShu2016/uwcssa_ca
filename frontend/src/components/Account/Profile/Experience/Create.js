import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@material-ui/core/styles";
import { postUserExperience } from "../../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {},
});

export default function Create({ createOpen, handleCreateClose, username }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    employmentType: "",
    industry: "",
    location: "",
    title: "",
  });
  const {
    companyName,
    description,
    employmentType,
    id,
    industry,
    location,
    title,
  } = formData;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createUserExperienceInput = {
    companyName: companyName,
    description: description,
    employmentType: employmentType,
    endDate: endDate,
    id: id,
    industry: industry,
    location: location,
    startDate: startDate,
    title: title,
    userExperienceUserId: username,
  };

  const create = () => {
    dispatch(postUserExperience(createUserExperienceInput));
    handleCreateClose();
    setFormData({
      companyName: "",
      description: "",
      employmentType: "",
      endDate: "",
      industry: "",
      location: "",
      startDate: "",
      title: "",
    });
  };

  return (
    <div className={classes.root}>
      <div>
        <Dialog
          open={createOpen}
          onClose={handleCreateClose}
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle>创建 工作经历</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="职位"
              variant="standard"
              value={title}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="employmentType"
              name="employmentType"
              label="雇佣类型"
              variant="standard"
              value={employmentType}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="companyName"
              name="companyName"
              label="公司名称"
              variant="standard"
              value={companyName}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="location"
              name="location"
              label="位置"
              variant="standard"
              value={location}
              onChange={(e) => onChange(e)}
            />
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="开始日期"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <DatePicker
                label="结束日期"
                value={endDate}
                onChange={(e) => {
                  console.log(e);
                  setEndDate(e);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
            </LocalizationProvider>
            <TextField
              autoFocus
              margin="dense"
              id="industry"
              name="industry"
              label="行业"
              variant="standard"
              value={industry}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              name="description"
              label="简介"
              variant="standard"
              multiline
              value={description}
              fullWidth
              maxRows={20}
              minRows={5}
              onChange={(e) => onChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreateClose}>Cancel</Button>
            <Button onClick={create}>提交</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
