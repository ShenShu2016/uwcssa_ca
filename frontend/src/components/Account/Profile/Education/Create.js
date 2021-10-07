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
import { postUserEducation } from "../../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {},
});

export default function Create({ createOpen, handleCreateClose, username }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    degree: "",
    description: "",
    fieldOfStudy: "",
    grade: "",
    school: "",
  });
  const { degree, description, fieldOfStudy, grade, school } = formData;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createUserEducationInput = {
    endDate: endDate,
    startDate: startDate,
    degree: degree,
    description: description,
    fieldOfStudy: fieldOfStudy,
    grade: grade,
    school: school,
    userEducationUserId: username,
  };

  const create = () => {
    dispatch(postUserEducation(createUserEducationInput));
    handleCreateClose();
    setFormData({
      degree: "",
      description: "",
      endDate: "",
      fieldOfStudy: "",
      grade: "",
      school: "",
      startDate: "",
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
          <DialogTitle>创建 教育经历</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="school"
              name="school"
              label="学校"
              variant="standard"
              value={school}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="degree"
              name="degree"
              label="文凭"
              variant="standard"
              value={degree}
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              id="fieldOfStudy"
              name="fieldOfStudy"
              label="专业"
              variant="standard"
              value={fieldOfStudy}
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
                label="结业日期"
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
              id="grade"
              name="grade"
              label="分数"
              variant="standard"
              type="number"
              value={grade}
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
