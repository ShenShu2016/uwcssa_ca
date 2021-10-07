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
import { putUserExperience } from "../../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {},
});
export default function Edit({ experience, editOpen, handleEditClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    companyName: experience.companyName,
    description: experience.description,
    employmentType: experience.employmentType,
    id: experience.id,
    industry: experience.industry,
    location: experience.location,
    title: experience.title,
  });
  const [startDate, setStartDate] = useState(experience.startDate);
  const [endDate, setEndDate] = useState(experience.endDate);
  const {
    companyName,
    description,
    employmentType,
    id,
    industry,
    location,
    title,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserExperienceInput = {
    companyName: companyName,
    description: description,
    employmentType: employmentType,
    endDate: endDate,
    id: id,
    industry: industry,
    location: location,
    startDate: startDate,
    title: title,
  };

  const update = () => {
    dispatch(putUserExperience(updateUserExperienceInput));
    handleEditClose();
  };

  return (
    <div className={classes.root}>
      <div>
        <Dialog
          open={editOpen}
          onClose={handleEditClose}
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle>修改 工作经历</DialogTitle>
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
                label="入学日期"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <DatePicker
                label="毕业日期"
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
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={update}>更新</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
