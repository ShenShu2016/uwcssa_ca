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
import { putUserExperience } from "../../../../redux/reducers/profileSlice";
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
export default function Edit({ experience, editOpen, handleEditClose, idx }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(experience);
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
  }, [experience]);

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
    dispatch(putUserExperience({ updateUserExperienceInput, idx }));
    handleEditClose();
  };

  return (
    <div className={classes.root}>
      <div>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 工作经历</DialogTitle>
          <Divider light />
          <DialogContent>
            <TextField
              required
              autoFocus
              fullWidth
              margin="dense"
              id="title"
              name="title"
              label="职位"
              variant="outlined"
              placeholder="例如：Rogers"
              value={title}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="employmentType">雇佣类型</InputLabel>
              <Select
                labelId="employmentType"
                id="employmentType"
                name="employmentType"
                value={employmentType}
                onChange={(e) => onChange(e)}
                label="文凭"
              >
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Contract Full-time">全职合同</MenuItem>
                <MenuItem value="Internship">实习</MenuItem>
                <MenuItem value="Permanent Full-time">全职</MenuItem>
                <MenuItem value="Co-op">Co-op</MenuItem>
                <MenuItem value="Self-employed">自雇</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.splitter} />
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="companyName"
              name="companyName"
              label="公司名称"
              value={companyName}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="location"
              name="location"
              label="位置"
              value={location}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box className={classes.starEndDate}>
                <div>
                  <DatePicker
                    label="开始日期"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                <div>
                  <DatePicker
                    label="结束日期"
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
              autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              id="industry"
              name="industry"
              label="行业"
              placeholder="例如：通讯"
              value={industry}
              onChange={(e) => onChange(e)}
            />
            <div className={classes.splitter} />
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              id="description"
              name="description"
              label="简介"
              variant="outlined"
              multiline
              value={description}
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
