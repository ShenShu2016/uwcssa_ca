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
import { fetchUsers, selectAllUsers } from "../../../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

import PublishIcon from "@mui/icons-material/Publish";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postFoundingMember } from "../../../../redux/slice/foundingMemberSlice";
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

export default function PostFoundingMember() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef();
  useTitle("添加创作者");

  const [loading, setLoading] = useState(false);

  const [userID, setUserID] = useState("");

  const users = useSelector(selectAllUsers);

  const { fetchUsersStatus } = useSelector((state) => state.user);
  useEffect(() => {
    if (fetchUsersStatus === "idle" || undefined) {
      dispatch(fetchUsers());
    }
  }, [dispatch, fetchUsersStatus]);

  const onSubmit = async () => {
    setLoading(true);
    const createFoundingMemberInput = {
      id: userID,
      active: true,
      userID: userID,
      owner: userID,
    };
    console.log(createFoundingMemberInput);
    const response = await dispatch(
      postFoundingMember({ createFoundingMemberInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push("/foundingMember");
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
      <Typography variant="h3">添加创作者 </Typography>
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
        点击上传
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
