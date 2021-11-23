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
  putUserExperience,
  removeUserExperience,
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
export default function Edit({ experience, editOpen, handleEditClose, idx }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
  }, [experience]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: experience.companyName,
      description: experience.description,
      employmentType: experience.employmentType,
      id: experience.id,
      industry: experience.industry,
      location: experience.location,
      title: experience.title,
    },
  });
  const [startDate, setStartDate] = useState(experience.startDate);
  const [endDate, setEndDate] = useState(experience.endDate);

  const updateUserExperienceInput = {
    id: experience.id,
    endDate: endDate,
    startDate: startDate,
  };

  const onSubmit = async (data) => {
    const updateUserExperienceInput = {
      ...data,
      endDate: endDate,
      startDate: startDate,
    };
    const response = await dispatch(
      putUserExperience({ updateUserExperienceInput, idx })
    );
    if (response.meta.requestStatus === "fulfilled") {
      handleEditClose();
    }
  };

  const handleDelete = (e) => {
    dispatch(removeUserExperience({ updateUserExperienceInput, idx }));
    handleEditClose();
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog open={editOpen} onClose={handleEditClose}>
          <DialogTitle>编辑 工作经历</DialogTitle>
          <Divider light />
          <DialogContent>
            <Controller
              name="title"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="职位"
                  variant="outlined"
                  placeholder="例如：Rogers"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.title}
                  helperText={errors.title ? "不符合" : null}
                />
              )}
            />

            <div className={classes.splitter} />
            <Controller
              name="employmentType"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="employmentType">雇佣类型</InputLabel>
                  <Select
                    labelId="employmentType"
                    id="employmentType"
                    name="employmentType"
                    onChange={onChange}
                    value={value}
                    error={!!errors.degree}
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
              )}
            />

            <div className={classes.splitter} />

            <Controller
              name="companyName"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="公司名称"
                  variant="outlined"
                  placeholder="Rogers"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.companyName}
                  helperText={errors.companyName ? "不符合" : null}
                />
              )}
            />
            <div className={classes.splitter} />
            <Controller
              name="location"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="位置"
                  variant="outlined"
                  placeholder="多伦多"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.location}
                  helperText={errors.location ? "不符合" : null}
                />
              )}
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
            <Controller
              name="industry"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  label="行业"
                  placeholder="例如：通讯"
                  fullWidth
                  margin="dense"
                  onChange={onChange}
                  value={value}
                  error={!!errors.industry}
                  helperText={errors.industry ? "不符合" : null}
                />
              )}
            />

            <div className={classes.splitter} />

            <Controller
              name="description"
              control={control}
              rules={{
                required: true,
                pattern: /\D+/,
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
            <Button onClick={handleDelete} size="large">
              删除
            </Button>
            <Button onClick={handleEditClose} size="large">
              Cancel
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
