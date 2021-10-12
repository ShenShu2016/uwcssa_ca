import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MUILink,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Button color="inherit" href="https://uwcssa/">
        uwcssa.ca {""} {new Date().getFullYear()}
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

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
                <span style={{ cursor: "not-allowed" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="text"
                      component={Link}
                      to="/foundingTeam"
                    >
                      团队
                    </Button>
                  </ThemeProvider>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="text"
                      component={Link}
                      to="/contactUs"
                    >
                      联系我们
                    </Button>
                  </ThemeProvider>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="text"
                      href="mailto:uwincssa.it@gmail.com"
                    >
                      邮箱: uwincssa.it@gmail.com
                    </Button>
                  </ThemeProvider>
                </span>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className={classes.text}>
                <Typography variant="h6" gutterBottom>
                  资讯
                </Typography>
                <span style={{ cursor: "not-allowed" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="text"
                      component={Link}
                      to="/article"
                    >
                      uwcssa新闻
                    </Button>
                  </ThemeProvider>
                </span>
                <span style={{ cursor: "not-allowed" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="text"
                      component={Link}
                      to="/event"
                    >
                      uwcssa活动
                    </Button>
                  </ThemeProvider>
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
                <ThemeProvider theme={theme}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/career"
                  >
                    查看职位
                  </Button>
                </ThemeProvider>
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
