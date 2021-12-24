import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTags, { GetTags } from "../CustomMUI/CustomTags";
import React, { useEffect, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";
import {
  fetchUwcssaMembers,
  selectAllUwcssaMembers,
} from "../../redux/slice/uwcssaMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MUIRichTextEditor from "mui-rte";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { convertToRaw } from "draft-js";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postKanban } from "../../redux/slice/kanbanSlice";

const useStyles = makeStyles({
  root: {},
  content: {
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
});
export default function Create({ createOpen, handleCreateClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const uwcssaMembers = useSelector(selectAllUwcssaMembers);
  const departments = useSelector(selectAllDepartments);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const { fetchUwcssaMembersStatus } = useSelector(
    (state) => state.uwcssaMember
  );

  useEffect(() => {
    if (fetchUwcssaMembersStatus === "idle" || undefined) {
      dispatch(fetchUwcssaMembers());
    }
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchUwcssaMembersStatus, fetchDepartmentsStatus]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      kanbanStatus: "IDEA",
      deadLine: undefined,
      points: 10,
      sortKey: "SortKey",
      departmentID: "主席团",
      assigneeID: "shushen2013",
      priority: "Low",
    },
  });
  const handleOnChange = () => (event) => {
    const content = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setContent(content);
  };
  const handleKeyDown = (e) => {
    const newTags = [...tags, e];
    setTags(newTags);
  };

  const handleDelete = (e) => {
    const newTags = tags.filter((tag) => tag !== e);
    setTags(newTags);
  };
  const onSubmit = async (data) => {
    const createKanbanInput = {
      ...data,
      userID: username,
      content: content,
      tags: GetTags(),
    };
    setLoading(true);
    console.log(createKanbanInput);
    const response = await dispatch(postKanban({ createKanbanInput }));

    if (response) {
      console.log(response);
      setLoading(false);
      reset();
      handleCreateClose();
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={createOpen}
          onClose={handleCreateClose}
        >
          <DialogTitle>添加Kanban</DialogTitle>
          <Divider light />
          <DialogContent>
            <Stack spacing={2}>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    required
                    id="title"
                    label="标题"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.title}
                    helperText={errors.title ? "不能为空" : null}
                  />
                )}
              />
              <Controller
                name="departmentID"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="departmentID">部门</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="departmentID"
                      value={value}
                      onChange={onChange}
                      label="部门"
                      error={!!errors.departmentID}
                    >
                      {departments.map((department) => {
                        return (
                          <MenuItem value={department.id} key={department.id}>
                            {department.id}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {errors.departmentID && (
                      <FormHelperText sx={{ color: "#d32f2f" }}>
                        请选择一个部门
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
              <Controller
                name="assigneeID"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="assigneeID">任务接受者</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="assigneeID"
                      value={value}
                      onChange={onChange}
                      label="任务接受者"
                      error={!!errors.assigneeID}
                    >
                      {uwcssaMembers.map((member) => {
                        return (
                          <MenuItem value={member.id} key={member.id}>
                            {`${member.departmentID}: ${member.id}`}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              />
              <Controller
                name="kanbanStatus"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="kanbanStatus">kanbanStatus</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="kanbanStatus"
                      value={value}
                      onChange={onChange}
                      label="kanbanStatus"
                      error={!!errors.kanbanStatus}
                    >
                      <MenuItem value="IDEA" key={"IDEA"}>
                        {"IDEA"}
                      </MenuItem>
                      <MenuItem value={"TODO"} key={"TODO"}>
                        {"TODO"}
                      </MenuItem>
                      <MenuItem value={"INPROGRESS"} key={"INPROGRESS"}>
                        {"INPROGRESS"}
                      </MenuItem>
                      <MenuItem value={"DONE"} key={"DONE"}>
                        {"DONE"}
                      </MenuItem>
                      <MenuItem value={"WASTED"} key={"WASTED"}>
                        {"WASTED"}
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              <Controller
                name="priority"
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="priority">priority</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="priority"
                      value={value}
                      onChange={onChange}
                      label="priority"
                      error={!!errors.priority}
                    >
                      <MenuItem value={"Low"} key={"Low"}>
                        {"Low"}
                      </MenuItem>
                      <MenuItem value={"Average"} key={"Average"}>
                        {"Average"}
                      </MenuItem>
                      <MenuItem value={"High"} key={"High"}>
                        {"High"}
                      </MenuItem>
                      <MenuItem value="Critical" key={"Critical"}>
                        {"Critical"}
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
              />

              <CustomTags
                placeholder="新装修， 独立卫浴..."
                initial={tags}
                onKeyDown={(e) => handleKeyDown(e)}
                onDelete={(e) => handleDelete(e)}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                  name="deadLine"
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Box sx={{ margin: "1rem 0" }}>
                      <MobileDatePicker
                        label="Due Date"
                        value={value}
                        id="deadLine"
                        error={!!errors.deadLine}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Box>
                  )}
                />
              </LocalizationProvider>
              <Box className={classes.content}>
                <MUIRichTextEditor
                  label="活动详情"
                  onChange={handleOnChange()}
                  inlineToolbar={true}
                  controls={[
                    "title",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "highlight",
                    "undo",
                    "redo",
                    "link",
                    "media",
                    "numberList",
                    "bulletList",
                    "quote",
                    "code",
                    "clear",
                  ]}
                />
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreateClose} size="large">
              取消
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              size="large"
              disabled={loading}
            >
              添加
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-0.75rem",
                    marginLeft: "-0.75rem",
                  }}
                />
              )}
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
