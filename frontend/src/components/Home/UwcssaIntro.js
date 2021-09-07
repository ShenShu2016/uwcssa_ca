import React from "react";
import GitHubButton from "react-github-btn";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import cssalog from "../../static/cssalogo.png";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../redux/store";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  webIntro: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
  },
  title: {
    marginTop: "5rem",
    marginBottom: "3rem",
    fontWeight: 700,
  },
  slogan: {
    marginTop: "3rem",
    marginBottom: "3rem",
    fontWeight: 700,
  },
  webData: {
    marginTop: "3rem",
    marginBottom: "3rem",
    fontWeight: 700,
  },
  paper: {
    marginInline: "0.5rem",
  },
  logoBox: {
    width: 700,
    minWidth: "40%",
    maxWidth: "100%",
    backgroundImage: `url(${cssalog})`,
    backgroundSize: "cover",
    minHeight: 500,
  },
  relateWeb: {
    display: "flex",
    marginTop: "6rem",
    marginBottom: "3rem",
    justifyContent: "space-between",
    margin: "10",
    paddingRight: "1rem",
  },
  repoInfo: {
    textAlign: "start",
    width: "80%",
    margin: "auto",
    marginTop: "7rem",
  },
}));

const UwcssaIntro = () => {
  const classes = useStyles();
  const { userAuth } = store.getState();

  const guestButton = () => (
    <div>
      <Button
        variant="outlined"
        size="large"
        content="textOnly"
        color="primary"
        component={Link}
        to="/login"
      >
        成为会员
      </Button>
    </div>
  );

  const authButton = () => (
    <div>
      <Typography variant="h4">Welcome: </Typography>
      <Typography variant="h5">
        {userAuth.user ? userAuth.user.username : ""}
      </Typography>
    </div>
  );

  return (
    <div>
      <Box className={classes.root} width="100%">
        <Box className={classes.webIntro}>
          <Typography variant="h6" className={classes.title}>
            UWCSSA.CA - 温莎最大的在线华人学生学者社交网络社区
          </Typography>
          <Typography variant="h4" className={classes.slogan}>
            A STUDENT Community like No Other
          </Typography>
          <Box className={classes.webData}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h5">2000+</Typography>
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
          {userAuth.isAuthenticated ? authButton() : guestButton()}
          <Box className={classes.relateWeb}>
            <Typography variant="h5">相关页面</Typography>
            <ButtonGroup
              color="primary"
              aria-label="text primary button group"
              variant="outlined"
              size="large"
              content="textOnly"
            >
              <Button disabled="true">UWCSSA新闻</Button>
              <Button disabled="true">UWCSSA活动</Button>
              <Button
                variant="outlined"
                size="large"
                content="textOnly"
                color="primary"
                disabled="true"
              >
                UWCSSA论坛（建设中）
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box className={classes.logoBox}>
          <Box className={classes.webIntro}>
            <Typography variant="h4" className={classes.title}>
              此网站 UWCSSA_CA - 为 GitHub 开源项目
            </Typography>

            <Grid container spacing={1} className={classes.repoInfo}>
              <Grid item xs={12} sm={3}>
                <GitHubButton
                  href="https://github.com/ShenShu2016/uwcssa_ca"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star ShenShu2016/uwcssa_ca on GitHub"
                >
                  Star
                </GitHubButton>
              </Grid>
              <Grid item xs={12} sm={9}>
                喜欢我们的网站请点个赞吧！
              </Grid>
              <Grid item xs={12} sm={3}>
                <GitHubButton
                  href="https://github.com/ShenShu2016/uwcssa_ca/fork"
                  data-icon="octicon-repo-forked"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Fork ShenShu2016/uwcssa_ca on GitHub"
                >
                  Fork
                </GitHubButton>
              </Grid>
              <Grid item xs={12} sm={9}>
                如果你兴趣成为我们的协作者，等待你的Pull Request！
              </Grid>
              <Grid item xs={12} sm={3}>
                <GitHubButton
                  href="https://github.com/ShenShu2016/uwcssa_ca/issues"
                  data-icon="octicon-issue-opened"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Issue ShenShu2016/uwcssa_ca on GitHub"
                >
                  Issue
                </GitHubButton>
              </Grid>
              <Grid item xs={12} sm={9}>
                如果有BUG请提交，我们会第一时间处理。
              </Grid>
              <Grid item xs={12} sm={3}>
                <GitHubButton
                  href="https://github.com/ShenShu2016/uwcssa_ca/subscription"
                  data-icon="octicon-eye"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Watch ShenShu2016/uwcssa_ca on GitHub"
                >
                  Watch
                </GitHubButton>
              </Grid>
              <Grid item xs={12} sm={9}>
                开发者如有更新，会马上提醒的哦～
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
  user: state.userAuth.user,
});

// 这里有奇怪的问题，具体我也不知道

export default connect(mapStateToProps, {})(UwcssaIntro);
