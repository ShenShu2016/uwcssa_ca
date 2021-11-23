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
import { Controller, useForm } from "react-hook-form";
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

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      degree: "",
      description: "",
      fieldOfStudy: "",
      grade: "",
      school: "",
    },
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onSubmit = async (data) => {
    const createUserEducationInput = {
      ...data,
      endDate: endDate,
      startDate: startDate,
      userID: username,
    };
    console.log("createUserEducationInput", createUserEducationInput);
    const response = await dispatch(
      postUserEducation({ createUserEducationInput })
    );
    if (response.meta.requestStatus === "fulfilled") {
      handleCreateClose();
      reset();
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Dialog open={createOpen} onClose={handleCreateClose}>
          <DialogTitle>添加 教育经历</DialogTitle>
          <Divider light />
          <DialogContent>
            <Controller
              name="school"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="学校"
                  variant="outlined"
                  placeholder="例如：温莎大学"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.school}
                  helperText={errors.school ? "不符合" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="degree"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="degree">文凭</InputLabel>
                  <Select
                    labelId="degree"
                    id="degree"
                    name="degree"
                    onChange={onChange}
                    value={value}
                    error={!!errors.degree}
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
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="fieldOfStudy"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  label="专业"
                  placeholder="例如：商科"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.fieldOfStudy}
                  helperText={errors.fieldOfStudy ? "不符合" : null}
                />
              )}
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
            <Controller
              name="grade"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  type="float"
                  label="分数"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.grade}
                  helperText={errors.grade ? "不符合" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="description"
              control={control}
              rules={{
                required: false,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  label="简介"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.description}
                  helperText={errors.description ? "不符合" : null}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreateClose} size="large">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="large"
            >
              提交
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
