import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Button color="inherit" href="https://uwcssa.ca/">
        uwcssa.ca, {new Date().getFullYear()}
      </Button>
    </Typography>
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
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
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
            </Grid>
            <Grid item xs={6} sm={3}>
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
            </Grid>
            <Grid item xs={6} sm={3}>
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
          </Grid>
          <Box className={classes.copyright}>
            <Copyright />
          </Box>
        </Container>
      </footer>
    </div>
  );
}
