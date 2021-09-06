import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import cssalog from "../../static/cssalogo.png";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  webIntro: {
    maxWidth: 694,
    textAlign: "center",
  },
  title: {
    marginTop: "20%",
    marginBottom: "3rem",
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
  logoBox: {
    minHeight: 300,
    maxWidth: 700,
  },
  relateWeb: {
    display: "flex",
    marginTop: "6rem",
    marginBottom: "3rem",
    justifyContent: "space-between",
    margin: "10",
  },
  logo: {
    width: "100%",
  },
}));
const UwcssaIntro = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.root} width="100%">
        <Box maxWidth={900} className={classes.webIntro}>
          <Typography variant="h6" className={classes.title}>
            UWCSSA.CA - 温莎最大的在线华人学生学者社交网络社区
          </Typography>
          <Typography variant="h4" className={classes.slogan}>
            A STUDENT Community like No Other
          </Typography>
          <Box className={classes.webData}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper>
                  <Typography variant="h5">2000+</Typography>
                  <Typography variant="h5">用户</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <Typography variant="h5">5000</Typography>
                  <Typography variant="h5">帖子</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Button
            variant="outlined"
            size="large"
            content="textOnly"
            color="primary"
          >
            成为会员
          </Button>
          <Box className={classes.relateWeb}>
            <Typography variant="h5">相关页面</Typography>
            <ButtonGroup
              color="primary"
              aria-label="text primary button group"
              variant="outlined"
              size="large"
              content="textOnly"
            >
              <Button>UWCSSA新闻</Button>
              <Button>UWCSSA活动</Button>
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
          <img className={classes.logo} src={cssalog} alt="Diablo" />
        </Box>
      </Box>
    </Fragment>
  );
};

export default UwcssaIntro;
