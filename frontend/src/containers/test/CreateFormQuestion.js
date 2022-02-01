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
import { useDispatch, useSelector } from "react-redux";

import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { postFormQuestion } from "../../redux/slice/formQuestionSlice";

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

const formTypeList = [
  "TextFieldShort",
  "TextFieldLong",
  "RadioGroupH",
  "RadioGroupV",
  "DatePicker",
  "DateTimePicker",
  "TimePicker",
  "FileUpload",
  "Checkbox",
  "Select",
];

export default function CreateFormQuestion() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "爱我吗",
      description: "就是那种发自内心的感觉",
      formType: "TextFieldShort",
      helperText: "表达自己的心意就行",
      //   imgURLs: "",
      pattern: undefined,
      minLength: "0",
      maxLength: "100",
      placeholder: "就像老鼠爱大米",
      label: "爱的",
      choices: undefined,
    },
  });

  const onSubmit = async (data) => {
    console.log("进来了");
    const createFormQuestionInput = {
      ...data,
      userID: username,
    };
    console.log("createUserEducationInput", createFormQuestionInput);
    const response = await dispatch(
      postFormQuestion({ createFormQuestionInput })
    );
    if (response.meta.requestStatus === "fulfilled") {
      reset();
    }
  };

  return (
    <div>
      <form>
        <Typography variant="h6">CreateFormQuestion</Typography>
        <DialogTitle>添加 教育经历</DialogTitle>
        <Divider light />
        <DialogContent>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="name"
                variant="outlined"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.name}
                helperText={errors.name ? "不符合" : null}
              />
            )}
          />
          <div className={classes.splitter} />
          <Controller
            name="formType"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="formType">formType</InputLabel>
                <Select
                  labelId="formType"
                  id="formType"
                  name="formType"
                  onChange={onChange}
                  value={value}
                  error={!!errors.formType}
                  label="formType"
                >
                  {formTypeList.map((formType) => {
                    return (
                      <MenuItem value={formType} key={formType}>
                        {formType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          />
          <div className={classes.splitter} />
          <Controller
            name="helperText"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                label="helperText"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.helperText}
                helperText={errors.helperText ? "不符合" : null}
              />
            )}
          />
          <div className={classes.splitter} />
          <Controller
            name="minLength"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                type="int"
                label="minLength"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.minLength}
                helperText={errors.minLength ? "不符合" : null}
              />
            )}
          />
          <div className={classes.splitter} />{" "}
          <Controller
            name="maxLength"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                type="int"
                label="maxLength"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.maxLength}
                helperText={errors.maxLength ? "不符合" : null}
              />
            )}
          />
          <div className={classes.splitter} />
          <Controller
            name="placeholder"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                label="placeholder"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.placeholder}
                helperText={errors.placeholder ? "不符合" : null}
              />
            )}
          />
          <div className={classes.splitter} />
          <Controller
            name="label"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="outlined"
                label="label"
                fullWidth
                margin="dense"
                onChange={onChange}
                value={value}
                error={!!errors.label}
                helperText={errors.label ? "不符合" : null}
              />
            )}
          />
          {/* <Controller
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
        /> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            size="large"
          >
            提交
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}
