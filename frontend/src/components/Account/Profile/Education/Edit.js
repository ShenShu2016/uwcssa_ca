import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@material-ui/core/styles";
import { putUserEducation } from "../../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {},
});

export default function Edit({ education, editOpen, handleEditClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(education);
    setStartDate(education.startDate);
    setEndDate(education.endDate);
  }, [education]);

  const [startDate, setStartDate] = useState(education.startDate);
  const [endDate, setEndDate] = useState(education.endDate);
  const [formData, setFormData] = useState({
    degree: education.degree,
    description: education.description,
    fieldOfStudy: education.fieldOfStudy,
    grade: education.grade,
    id: education.id,
    school: education.school,
  });

  const { degree, description, fieldOfStudy, grade, id, school } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserEducationInput = {
    degree: degree,
    description: description,
    endDate: endDate,
    fieldOfStudy: fieldOfStudy,
    grade: grade,
    id: id,
    school: school,
    startDate: startDate,
  };
  const update = (e) => {
    dispatch(putUserEducation(updateUserEducationInput));
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
          <DialogTitle>修改 教育经历</DialogTitle>
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
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={update}>更新</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
