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
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";
import { useDispatch, useSelector } from "react-redux";

import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postKanban } from "../../redux/slice/kanbanSlice";

const useStyles = makeStyles({
  root: {},
});
export default function Create({ createOpen, handleCreateClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);
  const departments = useSelector(selectAllDepartments);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      kanbanStatus: "IDEA",
      deadLine: undefined,
      points: 10,
      sortKey: "SortKey",
      assigneeID: "",
      departmentID: "",
    },
  });

  const onSubmit = async (data) => {
    const createKanbanInput = {
      ...data,
      userID: username,
    };
    setLoading(true);
    console.log(createKanbanInput);
    const response = await dispatch(postKanban({ createKanbanInput }));
    handleCreateClose();
    if (response) {
      console.log(response);
      setLoading(false);
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
