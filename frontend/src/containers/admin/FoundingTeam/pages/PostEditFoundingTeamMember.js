import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

import { makeStyles } from "@mui/styles";
import { postFoundingMember } from "../../../../redux/slice/foundingMemberSlice";
import { postSingleImage } from "../../../../redux/slice/generalSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useTitle } from "../../../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "block",
    marginBottom: "2rem",
    marginTop: "3rem",
  },
}));

export default function PostEditFoundingTeamMember() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useRef();
  useTitle("添加创作者");
  const [imgURLs, setImgURLs] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({});

  const uploadFoundingTeamMemberImg = async (e) => {
    const imageData = e.target.files;
    const imageLocation = "foundingTeam";
    const response = await dispatch(
      postSingleImage({ imageData, imageLocation })
    );
    if (response.meta.requestStatus === "fulfilled") {
      setImgURLs(response.payload);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const createFoundingTeamInput = {
      ...data,
      // id: ID!
      // active: Boolean!
      // title: String
      // brief: String
      // content: String
      // mainPart: [String]
      // imgURLs: AWSURL
      // userID: ID!
    };
    console.log(createFoundingTeamInput);
    const response = await dispatch(
      postFoundingMember({ createFoundingTeamInput })
    );

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.push("/foundingTeam");
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
    </Box>
  );
}
