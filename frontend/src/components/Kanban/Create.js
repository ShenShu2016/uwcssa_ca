import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
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
  fetchUwcssaMembers,
  selectAllUwcssaMembers,
} from "../../redux/slice/uwcssaMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postKanban } from "../../redux/slice/kanbanSlice";

const useStyles = makeStyles({
  content: {
    marginTop: "1rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    width: "100%",
    maxWidth: "600px",
  },
});
export default function Create({ createOpen, handleCreateClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);

  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const uwcssaMembers = useSelector(selectAllUwcssaMembers);

  const { fetchUwcssaMembersStatus } = useSelector(
    (state) => state.uwcssaMember
  );

  useEffect(() => {
    if (fetchUwcssaMembersStatus === "idle" || undefined) {
      dispatch(fetchUwcssaMembers());
    }
  }, [dispatch, fetchUwcssaMembersStatus]);

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      kanbanStatus: "IDEA",
      deadLine: undefined,
      points: 10,
      sortKey: "SortKey",
      assigneeID: "shushen2013",
      priority: "Average",
      content: "",
      active: true,
    },
  });

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
      departmentID: uwcssaMembers.filter(
        (x) => x.id === getValues("assigneeID")
      )[0].departmentID,
      userID: username,
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
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <Box className={classes.content}>
                <Controller
                  name="content"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      margin="normal"
                      fullWidth
                      multiline
                      rows={10}
                      required
                      id="content"
                      label="详细内容"
                      variant="outlined"
                      onChange={onChange}
                      value={value}
                      error={!!errors.content}
                      helperText={errors.content ? "不能为空" : null}
                    />
                  )}
                />
              </Box>
              <Stack
                spacing={2}
                sx={{ maxWidth: "300px", width: "100%" }}
                justifyContent="space-between"
              >
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
                        <DateTimePicker
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
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      reset();
                      handleCreateClose();
                    }}
                    size="large"
                  >
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
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
}
