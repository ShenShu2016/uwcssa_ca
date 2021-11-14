import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@mui/styles";
import { putUserEducation } from "../../../../redux/reducers/profileSlice";
import { useDispatch } from "react-redux";

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

export default function Edit({ education, editOpen, handleEditClose, idx }) {
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
    dispatch(putUserEducation({ updateUserEducationInput, idx }));
    handleEditClose();
  };
  return (
    <div className={classes.root}>
      <div>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 教育经历</DialogTitle>
          <Divider light />
          <DialogContent>
            <TextField
              required
              //autoFocus
              fullWidth
              margin="dense"
              id="school"
              name="school"
              label="学校"
              variant="outlined"
              placeholder="例如：温莎大学"
              value={school}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="degree">文凭</InputLabel>
              <Select
                labelId="degree"
                id="degree"
                name="degree"
                value={degree}
                onChange={(e) => onChange(e)}
                label="文凭"
              >
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Junior high school">初中</MenuItem>
                <MenuItem value="High school">高中</MenuItem>
                <MenuItem value="Undergraduate">本科</MenuItem>
                <MenuItem value="Postgraduate">研究生</MenuItem>
                <MenuItem value="PhD">博士</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.splitter} />
            <TextField
              //autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="fieldOfStudy"
              name="fieldOfStudy"
              label="专业"
              placeholder="例如：商科"
              value={fieldOfStudy}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box className={classes.starEndDate}>
                <div>
                  <DatePicker
                    label="入学日期"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div>
                  <DatePicker
                    label="结业日期"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </Box>
            </LocalizationProvider>
            <div className={classes.splitter} />
            <TextField
              //autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="grade"
              name="grade"
              label="分数"
              type="number"
              value={grade}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              //autoFocus
              margin="dense"
              variant="outlined"
              id="description"
              name="description"
              label="简介"
              multiline
              value={description}
              fullWidth
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
