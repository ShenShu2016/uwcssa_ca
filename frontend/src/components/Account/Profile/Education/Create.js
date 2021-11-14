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
import React, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@mui/styles";
import { postUserEducation } from "../../../../redux/reducers/profileSlice";
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
    userID: username,
  };

  const create = () => {
    dispatch(postUserEducation({ createUserEducationInput }));
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
        <Dialog open={createOpen} onClose={handleCreateClose}>
          <DialogTitle>添加 教育经历</DialogTitle>
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
            <Button onClick={handleCreateClose} size="large">
              Cancel
            </Button>
            <Button onClick={create} variant="contained" size="large">
              提交
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
