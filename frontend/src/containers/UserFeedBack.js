import { createTheme, responsiveFontSizes } from "@mui/material";

import { Box } from "@mui/system";
import { Button } from "@mui/material"; // 按钮
import { Rating } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material"; // 文字输入
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//定义评价等级
const labels = {
  1: "totally useless",
  2: "very difficult",
  3: "Poor",
  4: "Ok",
  5: "Good",
  6: "very easy",
  7: "perfect",
};

//定义不同页面的字号：
const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:1200px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.7rem",
  },
};

// 模板
const useStyles = makeStyles(() => ({
  root: { textAlign: "center" },
}));

export default function UserFeedBack() {
  const classes = useStyles();
  const [value, setValue] = React.useState(7); // 评价默认值是7 （满分）
  const [hover, setHover] = React.useState(-1); //

  return (
    <div className={classes.root}>
      <Box mt={10} mx={5}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            How easy do you find the website to use?
          </Typography>
          <Typography variant="h5">
            你觉得我们的网站使用起来是否方便？
          </Typography>
        </ThemeProvider>
      </Box>

      <Box mt={3} mx={5}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          max={7}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && (
          <Box ml={0}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>

      <Box mt={5} mx={5}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            What was the main reason you gave us that score?
          </Typography>
          <Typography variant="h5">
            您给我们这个分数的主要原因是什么？
          </Typography>

          <Box m="auto" width={"75%"} alignItems="center">
            <TextField
              multiline="True"
              fullWidth
              id="reason"
              label="请在这里输入文字"
              variant="standard"
            />
          </Box>
        </ThemeProvider>
      </Box>

      <Box mt={5} mx={5}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">
            What could we do to improve your experience on the website?
          </Typography>
          <Typography variant="h5">
            我们可以做些什么来改善网站上的体验？
          </Typography>
        </ThemeProvider>

        <Box m="auto" width={"75%"} alignItems="center">
          <TextField
            multiline="True"
            fullWidth
            id="improvement"
            label="请在这里输入文字"
            variant="standard"
          />
        </Box>
      </Box>
      <Box mt={5} mb={5}>
        <Button
          type="submit"
          color="primary"
          size="large"
          sx={{ borderRadius: 50 }}
        >
          提交
        </Button>
      </Box>
    </div>
  );
}
