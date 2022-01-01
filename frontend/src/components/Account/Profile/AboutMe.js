import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "960px",
    marginBlock: "1rem",
  },
  link: {
    color: "blue",
    "&:hover": {
      color: "blue",
    },
  },
}));

function AboutMe({ user }) {
  const classes = useStyles();

  return (
    <Card>
      <Box className={classes.title}>
        <Typography variant="h6" sx={{ m: 1, fontWeight: "600" }}>
          About Me
        </Typography>
      </Box>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <LocalLibraryRoundedIcon sx={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  专业:
                </Typography>

                <Typography
                  variant="body2"
                  color="primary"
                  gutterBottom
                  sx={{ textDecoration: "none" }}
                >
                  {user.major ? user.major : "暂未填写"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <EmailRoundedIcon sx={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  邮箱:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  gutterBottom
                  onClick={() => window.open(`mailto:${user.email}`)}
                  sx={{ textDecoration: "none" }}
                >
                  {user.email ? user.email : "暂未填写"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <LinkedInIcon sx={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  LinkedIn:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  gutterBottom
                  onClick={
                    user.linkedIn
                      ? () => {
                          window.location.href = `${user.linkedIn}`;
                        }
                      : null
                  }
                  sx={{ textDecoration: "none" }}
                >
                  {user.linkedIn ? user.linkedIn : "暂未填写"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <GitHubIcon sx={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  GitHub:
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  gutterBottom
                  onClick={
                    user.github
                      ? () => {
                          window.location.href = `${user.github}`;
                        }
                      : null
                  }
                  sx={{ textDecoration: "none" }}
                >
                  {user.github ? user.github : "暂未填写"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
