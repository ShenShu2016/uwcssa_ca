import {
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GitHubButton from "react-github-btn";
import { Link } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import cssalogo from "../../static/cssa-logo.png";
import { makeStyles } from "@mui/styles";
import { setUserCounts } from "../../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    paddingBottom: "2rem",
    backgroundImage: `url(${cssalogo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  webIntro: {
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
    paddingBottom: "auto",
    marginBottom: "auto",
  },
  titleBox: {
    height: "100%",
    width: "calc(100% - 30px)",
    margin: "auto",
    fontWeight: 500,
    paddingTop: "5rem",
    marginBottom: "2rem",
    lineHeight: "130%",
    [theme.breakpoints.only("sm")]: {
      width: "calc(100% - 190px)",
      marginLeft: "190px",
    },
    [theme.breakpoints.only("md")]: {
      width: "calc(100% - 260px)",
      marginLeft: "260px",
    },
  },
  title: {
    marginBottom: "2rem",
    maxWidth: 1000,
  },
  slogan: {
    marginBottom: "2rem",
  },
  webData: {
    marginTop: "3rem",
    marginBottom: "3rem",
    fontWeight: 700,
  },
  repoInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    width: "80%",
    margin: "auto",
    marginTop: "3rem",
  },
  relateWeb: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  relateButton: {
    marginLeft: "1rem",
  },
}));
export default function UwcssaIntro() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const userCounts = useSelector((state) => state.allUsers.userCounts);
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  useEffect(() => {
    dispatch(setUserCounts()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const guestButton = () => (
    <div>
      <Button
        variant="outlined"
        size="large"
        content="textOnly"
        color="primary"
        component={Link}
        to="/signIn"
      >
        成为会员
      </Button>
    </div>
  );

  const authButton = () => (
    <div>
      {
        <div>
          <Typography variant="h4">欢迎 : </Typography>
          <Box mt={1} mb={1}>
            <Typography variant="h5" noWrap>
              {userAuth.user.username}
            </Typography>
          </Box>
          <Box mt={1} mb={1}>
            <Typography variant="subtitle1" color={"secondary"}>
              {userAuth.user.username.slice(0, 7) === "google_"
                ? "我们建议您在我们网站注册账户，体验完整的系统"
                : ""}
            </Typography>
          </Box>
          <Box mt={2} mb={1}>
            <Button
              variant="contained"
              color={"primary"}
              size="large"
              component={Link}
              to="/account/dashboard"
            >
              个人中心
            </Button>
          </Box>
        </div>
      }
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <div className={classes.root}>
          <Box className={classes.webIntro}>
            <Container size="lg">
              <Grid item sm>
                <Box className={classes.titleBox}>
                  <Grid item xs={12} sm={8} md={7}>
                    <Typography variant="h6" className={classes.title}>
                      UWCSSA.CA - 温莎最大的在线华人学生学者社交网络社区
                    </Typography>
                    <Typography variant="h4" className={classes.slogan}>
                      <b>A Student Community like No Other</b>
                    </Typography>

                    <Box className={classes.webData}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>
                            <Typography variant="h5">{userCounts}</Typography>
                            <Typography variant="h5">用户</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>
                            <Typography variant="h5">5000</Typography>
                            <Typography variant="h5">帖子</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Box>
                    {isAuthenticated ? authButton() : guestButton()}
                    <Grid container spacing={1} className={classes.repoInfo}>
                      <Grid item xs={12} align="center">
                        <Typography variant="h6" gutterBottom>
                          此网站 UWCSSA.CA - 为 GitHub 开源项目
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <GitHubButton
                          href="https://github.com/ShenShu2016/uwcssa_ca"
                          data-icon="octicon-star"
                          data-show-count="true"
                          aria-label="Star ntkme/github-buttons on GitHub"
                        >
                          Star
                        </GitHubButton>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <GitHubButton
                          href="https://github.com/ShenShu2016/uwcssa_ca/fork"
                          data-icon="octicon-repo-forked"
                          data-show-count="true"
                          aria-label="Fork ShenShu2016/uwcssa_ca on GitHub"
                        >
                          Fork
                        </GitHubButton>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <GitHubButton
                          href="https://github.com/ShenShu2016/uwcssa_ca/issues"
                          data-icon="octicon-issue-opened"
                          data-show-count="true"
                          aria-label="Issue ShenShu2016/uwcssa_ca on GitHub"
                        >
                          Issue
                        </GitHubButton>
                      </Grid>
                      <Grid item xs={6} sm={3}>
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
                        xs={12}
                        align="center"
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
                    <Box className={classes.relateWeb}>
                      <Typography variant="h5">相关页面</Typography>
                      <ButtonGroup
                        color="primary"
                        aria-label="text primary button group"
                        variant="outlined"
                        size="medium"
                        content="textOnly"
                        className={classes.relateButton}
                      >
                        <Button disabled={true}>UWCSSA新闻</Button>
                        <Button disabled={true}>UWCSSA活动</Button>
                        <Button
                          variant="outlined"
                          size="medium"
                          content="textOnly"
                          color="primary"
                          disabled={true}
                        >
                          UWCSSA论坛（建设中）
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}
