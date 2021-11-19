import {
  Avatar,
  Box,
  Button,
  Container,
  Rating,
  Snackbar,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { forwardRef, useState } from "react";

import API from "@aws-amplify/api";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Footer from "../containers/Footer";
import MuiAlert from "@mui/material/Alert";
import { createWebFeedBack } from "../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

// 按钮

//定义评价等级
const labels = {
  1: "简直就是垃圾",
  2: "不太方便",
  3: "还可以",
  4: "挺不错",
  5: "非常棒，我要推荐给我的朋友们",
};

// 模板
//定义不同页面的字号：
const theme = createTheme();
//不要在这里用这个东西createTheme。这个是全局的
theme.typography.h5 = {
  fontSize: "0.9rem",

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

// 模板
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    // backgroundColor: "#cfe8fc",
  },
  TextField: {
    width: 250,
    [theme.breakpoints.up("md")]: {
      width: 450,
    },
  },
}));

export default function UserFeedBack() {
  const classes = useStyles();
  const { username } = useSelector((state) => state.userAuth.user);
  const [hover, setHover] = useState(-1); //不知道是做什么用的

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rate: 2,
      reason: "",
      improvement: "",
    },
  });

  const [open, setOpen] = useState(false); //”提交成功“提示的打开状态

  const handleClose = () => {
    setOpen(false);
  };

  // 网上直接抄的Alert
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await API.graphql(
        graphqlOperation(createWebFeedBack, {
          input: { ...data, userID: username },
        })
      );
      console.log("response: ", response);
      setOpen(true);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ height: "2vh" }} />
        <Container maxWidth="sm">
          <Box mt={3} />
          <Box border={3} sx={{ bgcolor: "white" }} borderRadius={15}>
            <Stack
              mt={3}
              mx={5}
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                sx={{ width: 50, height: 50, bgcolor: colors.green[500] }}
              >
                <AssignmentIcon />
              </Avatar>
              <Typography variant="h5">意见箱</Typography>
            </Stack>
            <Box mt={4} mx={5}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5">
                  你觉得我们的网站使用起来是否方便？
                </Typography>
              </ThemeProvider>
            </Box>

            <Box mt={3} mx={5}>
              <Controller
                name="rate"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Rating
                    precision={1}
                    max={5}
                    size="large"
                    onChange={onChange}
                    value={Number(value)}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                )}
              />
              {getValues("rate") !== null && (
                <Box ml={0}>
                  {labels[hover !== -1 ? hover : getValues("rate")]}
                </Box>
              )}
            </Box>
            <Box mt={5} mx={5}>
              <Box m="auto" alignItems="center" mt={2}>
                <Controller
                  name="reason"
                  control={control}
                  rules={{
                    required: true,
                    minLength: 10,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      className={classes.TextField}
                      multiline={true}
                      label={"您给我们这个分数的主要原因是什么？"}
                      variant="outlined"
                      minRows={3}
                      onChange={onChange}
                      value={value}
                      error={!!errors.reason}
                      helperText={
                        errors.reason ? "请简短的告诉我们原因， 10个字" : null
                      }
                    />
                  )}
                />
              </Box>
            </Box>
            <Box mt={5} mx={5}>
              <Box m="auto" alignItems="center" mt={2}>
                <Controller
                  name="improvement"
                  control={control}
                  rules={{
                    required: true,
                    minLength: 10,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      className={classes.TextField}
                      multiline={true}
                      label="我们可以做些什么来改善网站上的体验？"
                      variant="outlined"
                      minRows={3}
                      onChange={onChange}
                      value={value}
                      error={!!errors.improvement}
                      helperText={
                        errors.improvement
                          ? "请简短的告诉我们原因, 10个字"
                          : null
                      }
                    />
                  )}
                />
              </Box>
              <Box mt={3} mb={3}>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  // sx={{ borderRadius: 50 }}
                  type="submit"
                >
                  提交
                </Button>
              </Box>
            </Box>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message="Thank you!"
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                提交成功！感谢您的建议！
              </Alert>
            </Snackbar>
          </Box>
        </Container>
        <Box mt={3} sx={{ height: "2vh" }} />
      </form>

      <Footer />
    </div>
  );
}
