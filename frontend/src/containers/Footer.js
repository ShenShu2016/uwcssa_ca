import {
  Box,
  Button,
  // Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";
//import footerBanner from "../static/FooterBanner.png";
import uwcssaLogo from "../static/uwcssa_logo.svg";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Copyright() {
  return (
    <Stack direction="row">
      <Box spacing={2}>
        <span>
          <Button color="inherit" disabled>
            条款和条件
          </Button>
        </span>
        <span>
          <Button color="inherit" disabled>
            隐私政策
          </Button>
        </span>
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
        <Typography variant="body2" color="textSecondary">
          {"Copyright © "}
          <Button color="inherit" href="https://uwcssa.ca/">
            uwcssa.ca, {new Date().getFullYear()}
          </Button>
        </Typography>
      </Box>
    </Stack>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  footer: {
    padding: theme.spacing(3, 2),
    height: "220px",
    backgroundColor: "#FDFEFE ",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  copyright: {
    marginTop: "1rem",
  },
  icons: {
    marginTop: "0.25rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "left",
  },
  link: {
    overflowWrap: "break-word",
  },
  top: {
    padding: theme.spacing(3, 2),
    marginTop: "1rem",
    backgroundSize: "contained",
    overflow: "hidden",
    height: "150px",
    minHeight: "150px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    filter: "grayscale(80%)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contained",
    },
  },
  newsletterText: {
    color: "#fff",
    fontSize: "0.875rem",
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: "0.875rem",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Box px={2} py={6} className={classes.top} position={"relative"}>
        <div className={classes.overlay}>
          <img src={footerBanner} alt={""} />
        </div>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h5"
            className={classes.newsletterText}
            marginRight={5}
            gutterBottom
          >
            Join our newsletter
          </Typography>
          <UnstyledInput />
        </Stack>
      </Box> */}
      <Box
        className={classes.footer}
        width={"100%"}
        px={{ xs: 2, sm: 3, lg: 4 }}
      >
        <Box pt={6} pb={{ md: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
              <Box
                component={"img"}
                mt={-3}
                width={100}
                src={uwcssaLogo}
                alt={""}
              />
              <Box className={classes.icons}>
                <IconButton href="https://www.facebook.com/uwincssa">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.youtube.com/user/uwincssa">
                  <YouTubeIcon />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://wechat.com"
                    bgColor="grey"
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <Box className={classes.text}>
                    <Typography variant="h6" gutterBottom>
                      关于我们
                    </Typography>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/foundingTeam"
                        style={{ color: "#000000" }}
                      >
                        我们的团队
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/contactUs"
                        style={{ color: "#000000" }}
                      >
                        联系我们
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        href="mailto:uwincssa.it@gmail.com"
                        style={{ color: "#000000", textTransform: "none" }}
                      >
                        邮箱: uwincssa.it@gmail.com
                      </Button>
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box className={classes.text}>
                    <Typography variant="h6" gutterBottom>
                      资讯
                    </Typography>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/article"
                        style={{ color: "#000000" }}
                      >
                        uwcssa新闻
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/event"
                        style={{ color: "#000000" }}
                      >
                        uwcssa活动
                      </Button>
                    </span>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <Box className={classes.text}>
                    <Typography variant="h6" gutterBottom>
                      职位
                    </Typography>

                    <Typography variant="caption" gutterBottom>
                      来和我们一起工作吧!
                      我们一直在寻找优秀的人才加入我们的团队。
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to="/career"
                      style={{ borderColor: "#000000", color: "#000000" }}
                    >
                      查看职位
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ marginLeft: "auto" }}>
              <Typography
                variant="h6"
                //className={classes.newsletterText}
                marginRight={5}
                gutterBottom
              >
                订阅
              </Typography>
              <UnstyledInput />
            </Grid>
          </Grid>
        </Box>
        {/* <Container maxWidth="md"> */}
        {/* <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Box className={classes.text}>
              <Typography variant="h6" gutterBottom>
                关于我们
              </Typography>
              <span>
                <Button
                  color="primary"
                  variant="text"
                  component={Link}
                  to="/foundingTeam"
                  style={{ color: "#000000" }}
                >
                  我们的团队
                </Button>
              </span>
              <span>
                <Button
                  color="primary"
                  variant="text"
                  component={Link}
                  to="/contactUs"
                  style={{ color: "#000000" }}
                >
                  联系我们
                </Button>
              </span>
              <span>
                <Button
                  color="primary"
                  variant="text"
                  href="mailto:uwincssa.it@gmail.com"
                  style={{ color: "#000000", textTransform: "none" }}
                >
                  邮箱: uwincssa.it@gmail.com
                </Button>
              </span>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className={classes.text}>
              <Typography variant="h6" gutterBottom>
                资讯
              </Typography>
              <span>
                <Button
                  color="primary"
                  variant="text"
                  component={Link}
                  to="/article"
                  style={{ color: "#000000" }}
                >
                  uwcssa新闻
                </Button>
              </span>
              <span>
                <Button
                  color="primary"
                  variant="text"
                  component={Link}
                  to="/event"
                  style={{ color: "#000000" }}
                >
                  uwcssa活动
                </Button>
              </span>
            </Box>
          </Grid> */}
        {/* <Grid item xs={6} sm={3}>
            <Box className={classes.text}>
              <Typography variant="h6" gutterBottom>
                关注我们
              </Typography>
              <Box className={classes.icons}>
                <IconButton href="https://www.facebook.com/uwincssa">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.youtube.com/user/uwincssa">
                  <YouTubeIcon />
                </IconButton>
                <IconButton>
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://wechat.com"
                    bgColor="grey"
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid> */}
        {/* <Grid item xs={6} sm={3}>
            <Box className={classes.text}>
              <Typography variant="h6" gutterBottom>
                职位
              </Typography>

              <Typography variant="caption" gutterBottom>
                来和我们一起工作吧! 我们一直在寻找优秀的人才加入我们的团队。
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/career"
                style={{ borderColor: "#000000", color: "#000000" }}
              >
                查看职位
              </Button>
            </Box>
          </Grid>
        </Grid> */}
        <Divider sx={{ marginTop: "0.5rem" }} />
        <Box className={classes.copyright}>
          <Copyright />
        </Box>
        {/* </Container> */}
      </Box>
    </div>
  );
}

const StyledInputElement = styled("input")`
  font-size: 1rem;
  height: 35px;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  // padding: 6px 10px;
  //color: #20262d;
  transition: width 300ms ease;
  width: 560px;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    // width: 220px;
    //transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

function UnstyledInput() {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "auto",
        background: "rgb(243, 246, 249)",
        //border: "1px solid #e5e8ec",
        borderRadius: "10px",
      }}
    >
      <CustomInput sx={{ marginRight: "auto" }} placeholder="输入你的邮箱..." />
      <Button
        variant="contained"
        sx={{
          marginLeft: "auto",
          borderRadius: "10px",
        }}
        color="success"
        disabled
      >
        <ArrowForwardIcon />
      </Button>
    </Stack>
  );
}