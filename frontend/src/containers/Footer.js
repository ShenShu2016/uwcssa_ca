import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Grid, Box, Button } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        uwcssa.ca
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
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
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Box className={classes.text}>
                <Typography variant="h6" gutterBottom>
                  关于我们
                </Typography>
                <Link href="" color="inherit">
                  团队
                </Link>
                <Link href="" color="inherit">
                  联系我们
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className={classes.text}>
                <Typography variant="h6" gutterBottom>
                  资讯
                </Typography>
                <Link href="" color="inherit">
                  uwcssa新闻
                </Link>
                <Link href="" color="inherit">
                  uwcssa活动
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className={classes.text}>
                <Typography variant="h6" gutterBottom>
                  联系我们
                </Typography>
                <Link
                  color="inherit"
                  href="mailto:uwincssa.it@gmail.com"
                  className={classes.link}
                >
                  邮箱: uwincssa.it@gmail.com
                </Link>

                <Box className={classes.icons}>
                  <FacebookIcon />
                  <LinkedInIcon />
                  <SocialIcon
                    style={{ height: 20, width: 20 }}
                    url="https://wechat.com"
                    bgColor="black"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className={classes.text}>
                <Typography variant="h6" gutterBottom>
                  职位
                </Typography>
                <Typography variant="caption" gutterBottom>
                  来和我们一起工作吧! 我们一直在寻找优秀的人才加入我们的团队。
                </Typography>
                <Button variant="outlined" color="primary" href="">
                  查看职位
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.copyright}>
            <Copyright />
          </Box>
        </Container>
      </footer>
    </div>
  );
}
