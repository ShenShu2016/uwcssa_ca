import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  // Stack,
  // Switch,
  Typography,
} from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
// import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
// import { usePermit } from "../../../Hooks/usePermit";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: "960px",
  //   marginBlock: "1rem",
  // },
  link: {
    color: "blue",
    "&:hover": {
      color: "blue",
    },
  },
}));

function AboutMe({ user, ownerID }) {
  const classes = useStyles();
  // const [showEmail, setShowEmail] = React.useState(false);
  // const handleChange = (event) => {
  //   setShowEmail(event.target.checked);
  // };
  // console.log(showEmail);
  // const isPermit = usePermit(ownerID, "admin");

  return (
    <Card>
      <Box className={classes.title}>
        <Typography variant="h6" sx={{ m: "0.5rem 1rem", fontWeight: "600" }}>
          简介
        </Typography>
      </Box>
      <CardContent>
        <Grid container spacing={1} marginBottom={"1rem"}>
          <Grid item xs={12}>
            <Stack direction={"row"} style={{ verticalAlign: "middle" }}>
              <LocalLibraryRoundedIcon
                sx={{ height: 25, width: 25, marginRight: "0.5rem" }}
              />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ textDecoration: "none" }}
              >
                专业：{user.major ? user.major : "暂未填写"}
              </Typography>
            </Stack>
          </Grid>
          {/* <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="body2" component="div">
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
            </Grid> */}
          <Grid item xs={12}>
            <Stack direction={"row"} style={{ verticalAlign: "middle" }}>
              <LinkedInIcon
                sx={{ height: 25, width: 25, marginRight: "0.5rem" }}
              />
              <Typography
                variant="body2"
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
                LinkedIn：
                <span color="primary">
                  {user.linkedIn ? user.linkedIn : "暂未填写"}
                </span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction={"row"} style={{ verticalAlign: "middle" }}>
              <GitHubIcon
                sx={{ height: 25, width: 25, marginRight: "0.5rem" }}
              />
              <Typography
                variant="body2"
                gutterBottom
                color="primary"
                onClick={
                  user.github
                    ? () => {
                        window.location.href = `${user.github}`;
                      }
                    : null
                }
                sx={{ textDecoration: "none" }}
              >
                GitHub：
                <span> {user.github ? user.github : "暂未填写"}</span>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Grid container spacing={1} margin={"1rem"}></Grid>

        {/* {isPermit ? (
          <div>
            {showEmail ? null : (
              <Grid item>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>隐藏邮箱</Typography>
                  <Switch
                    checked={showEmail}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography>显示邮箱</Typography>
                </Stack>
              </Grid>
            )}
          </div>
        ) : null}
        {showEmail ? (
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
            <div>
              {isPermit ? (
                <Grid item>
                  <Switch
                    checked={showEmail}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Grid>
              ) : null}
            </div>
          </Grid>
        ) : null} */}

        <Grid container spacing={2}>
          {/* <Grid item xs={6} sm container>
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
            </Grid> */}
        </Grid>
        <Grid container spacing={1}>
          {/* <Grid item xs={6} sm container>
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
            </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
