import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubButton from "react-github-btn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";
import uwcssaLogo from "../static/uwcssa_logo.svg";

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

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  main: {
    // marginTop: spacing(2),
    marginBottom: spacing(2),
  },

  footer: {
    clear: "both",
    position: "relative",
    padding: spacing(3, 2),
    height: "220px",
    marginTop: "120px",
    // backgroundColor: "#FDFEFE ",
    [breakpoints.down("sm")]: {
      height: "350px",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    color: { palette: { text: { hint: "rgba(0, 0, 0, 0.38)" } } },
  },
  copyright: {
    marginTop: "1rem",
    [breakpoints.down("sm")]: {
      height: "150px",
    },
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
    padding: spacing(3, 2),
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
  repoInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    width: "80%",
    margin: "auto",
    marginTop: "3rem",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Box
        className={classes.footer}
        width={"100%"}
        px={{ xs: 2, sm: 3, lg: 4 }}
      >
        <Box pt={6} pb={{ md: 6 }}>
          <Grid container spacing={4} justifyContent="center">
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
              <Grid container spacing={1} className={classes.repoInfo}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    此网站 UWCSSA.CA - 为 <GitHubIcon fontSize="large" />
                    GitHub 开源项目
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <GitHubButton
                    href="https://github.com/ShenShu2016/uwcssa_ca"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star ntkme/github-buttons on GitHub"
                  >
                    Star
                  </GitHubButton>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <GitHubButton
                    href="https://github.com/ShenShu2016/uwcssa_ca/fork"
                    data-icon="octicon-repo-forked"
                    data-show-count="true"
                    aria-label="Fork ShenShu2016/uwcssa_ca on GitHub"
                  >
                    Fork
                  </GitHubButton>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <GitHubButton
                    href="https://github.com/ShenShu2016/uwcssa_ca/issues"
                    data-icon="octicon-issue-opened"
                    data-show-count="true"
                    aria-label="Issue ShenShu2016/uwcssa_ca on GitHub"
                  >
                    Issue
                  </GitHubButton>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <GitHubButton
                    href="https://github.com/ShenShu2016/uwcssa_ca/subscription"
                    data-icon="octicon-eye"
                    data-show-count="true"
                    aria-label="Watch ShenShu2016/uwcssa_ca on GitHub"
                  >
                    Watch
                  </GitHubButton>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  如果你喜欢我们的项目记得点
                  <StarBorderRoundedIcon />
                  哦~
                </Grid>
              </Grid>
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
                        to="/foundingMember"
                        sx={{
                          "&.MuiButton-text": { color: "#838A8A" },
                        }}
                      >
                        网页开发团队
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/uwcssaMember"
                        sx={{
                          "&.MuiButton-text": { color: "#838A8A" },
                        }}
                      >
                        学生会成员
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        component={Link}
                        to="/contactUs"
                        sx={{ "&.MuiButton-text": { color: "#838A8A" } }}
                      >
                        联系我们
                      </Button>
                    </span>
                    <span>
                      <Button
                        color="primary"
                        variant="text"
                        href="mailto:uwincssa.it@gmail.com"
                        sx={{
                          "&.MuiButton-text": { color: "#838A8A" },
                          textTransform: "none",
                        }}
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
                        className={classes.button}
                        variant="text"
                        component={Link}
                        to="/article"
                        sx={{ color: "#838A8A" }}
                      >
                        uwcssa新闻
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="text"
                        component={Link}
                        to="/event"
                        sx={{ color: "#838A8A" }}
                      >
                        uwcssa活动
                      </Button>
                    </span>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <Box className={classes.text}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      //sx={{ color: "#838A8A" }}
                    >
                      职位
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ padding: "6px 8px", color: "#838A8A" }}
                      // sx={{ color: "primary.light" }}
                    >
                      来和我们一起工作吧!
                      我们一直在寻找优秀的人才加入我们的团队。
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to="/career"
                      //sx={{ color: "primary.grey" }}
                    >
                      查看职位
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ marginTop: "0.5rem" }} />
        <Box className={classes.copyright}>
          <Copyright />
        </Box>

        {/* </Container> */}
      </Box>
    </div>
  );
}
