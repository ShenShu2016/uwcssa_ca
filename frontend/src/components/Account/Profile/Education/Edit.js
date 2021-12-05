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
import React, { useEffect, useState } from "react";
import {
  putUserEducation,
  removeUserEducation,
} from "../../../../redux/reducers/profileSlice";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@mui/styles";
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
    setStartDate(education.startDate);
    setEndDate(education.endDate);
  }, [education]);

  const [startDate, setStartDate] = useState(education.startDate);
  const [endDate, setEndDate] = useState(education.endDate);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      degree: education.degree,
      description: education.description,
      fieldOfStudy: education.fieldOfStudy,
      grade: education.grade,
      id: education.id,
      school: education.school,
    },
  });

  const updateUserEducationInput = {
    id: education.id,
    endDate: endDate,
    startDate: startDate,
  };
  const onSubmit = async (data) => {
    const updateUserEducationInput = {
      ...data,
      endDate: endDate,
      startDate: startDate,
    };
    const response = await dispatch(
      putUserEducation({ updateUserEducationInput, idx })
    );
    if (response.meta.requestStatus === "fulfilled") {
      handleEditClose();
    }
  };
  const handleDelete = (e) => {
    dispatch(removeUserEducation({ updateUserEducationInput, idx }));
    handleEditClose();
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 教育经历</DialogTitle>
          <Divider light />
          <DialogContent>
            <Controller
              name="school"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
                maxLength: 100,
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
                maxLength: 100,
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
                min: 0,
                max: 100,
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
                  helperText={errors.grade ? "0~100之间" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="description"
              control={control}
              rules={{
                required: false,
                maxLength: 500,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  label="简介"
                  fullWidth
                  minRows="4"
                  multiline
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
            <Button onClick={handleDelete} size="large">
              删除
            </Button>
            <Button onClick={handleEditClose} size="large">
              取消
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="large"
            >
              更新
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
