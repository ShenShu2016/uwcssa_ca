import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import { fetchDepartments } from "../../../../redux/slice/careerSlice";
import { fetchUsers } from "../../../../redux/slice/generalSlice";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postUwcssaMember } from "../../../../redux/slice/uwcssaMemberSlice";
import { useHistory } from "react-router";
import { useTitle } from "../../../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingTop: "5rem",
    paddingInline: "1rem",
  },
  content: {
    border: "3px",
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
  },
  container: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
    position: "relative",
  },
  child: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function PostUwcssaMember() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef();
  useTitle("添加学生会成员");

  const [loading, setLoading] = useState(false);
  const [departmentID, setDepartmentID] = useState("");
  const [userID, setUserID] = useState("");

  const { departments } = useSelector((state) => state.career);

  const { users } = useSelector((state) => state.general);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onSubmit = async () => {
    setLoading(true);
    const createUwcssaMemberInput = {
      id: userID,
      active: true,
      departmentID: departmentID,
      owner: userID,
      userID: userID,
    };
    console.log(createUwcssaMemberInput);
    const response = await dispatch(
      postUwcssaMember({ createUwcssaMemberInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push("/uwcssaMember");
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);
      alert(response.error.message);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h3">添加学生会成员</Typography>

      <Box>
        <Typography variant="h5">所属部门</Typography>
        <Button
          variant="contained"
          component={Link}
          to="/staff/uwcssaJob/postDepartment"
        >
          如果没有请点击这里添加部门
        </Button>
        <FormControl variant="outlined" fullWidth sx={{ marginBlock: "2rem" }}>
          <InputLabel id="demo-simple-select-outlined-label2">
            部门名称
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label2"
            id="demo-simple-select-outlined2"
            value={departmentID}
            onChange={(e) => setDepartmentID(e.target.value)}
            label="Topic"
          >
            {departments &&
              departments.map((department) => {
                return (
                  <MenuItem value={department.id} key={department.id}>
                    {department.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Typography variant="h5">userID</Typography>
        <FormControl variant="outlined" fullWidth sx={{ marginBlock: "2rem" }}>
          <InputLabel id="demo-simple-select-outlined-label2">
            用户名称
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label2"
            id="demo-simple-select-outlined2"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            label="Topic"
          >
            {users &&
              users.map((user) => {
                return (
                  <MenuItem value={user.id} key={user.id}>
                    {user.id}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        endIcon={<PublishIcon />}
        type="submit"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ my: 4 }}
        onClick={() => {
          onSubmit();
        }}
      >
        点击提交
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
    </Box>
  );
}
