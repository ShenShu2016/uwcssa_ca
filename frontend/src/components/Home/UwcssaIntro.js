import React from "react";
import GitHubButton from "react-github-btn";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import cssalogo from "../../static/cssa-logo.png";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Paper, Container } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    paddingBottom: "2rem",
  },
  webIntro: {
    minWidth: "40%",
    maxWidth: "100%",
    textAlign: "center",
    paddingBottom: "auto",
    marginBottom: "auto",
    backgroundImage: `url(${cssalogo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  titleBox: {
    height: "100%",
    width: "calc(100% - 30px)",
    margin: "auto",
    fontWeight: 500,
    paddingTop: "5rem",
    marginBottom: "2rem",

    lineHeight: "130%",
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
    marginTop: "7rem",
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

const UwcssaIntro = ({ loggedIn }) => {
  const classes = useStyles();
  // const userCounts = useSelector((state) => state.allUsers.users.count);
  // const dispatch = useDispatch();

  // const fetchUsers = async () => {
  //   const response = await axios
  //     .get(`${process.env.REACT_APP_API_URL}/users/total_counts/`)
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });

  //   dispatch(setUsers(response.data));
  // };
  // console.log(userCounts);

  // useEffect(() => {
  //   fetchUsers();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log("Users:", userCounts);

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
        {/* {userAuth.user ? userAuth.user.username : ""} */}
      </Typography>
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
                            <Typography variant="h5">666</Typography>
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
                    {loggedIn ? authButton() : guestButton()}
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
};

// 这里有奇怪的问题，具体我也不知道

export default UwcssaIntro;
