import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { List, Link } from "@material-ui/core";
import { ListItem, Container } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";
import iconJS from "../../static/svg icons/javascript-programming-language.svg";
import iconDjango from "../../static/svg icons/django.svg";
import iconAws from "../../static/svg icons/aws.svg";
import iconDocker from "../../static/svg icons/docker.svg";
import iconGithub from "../../static/svg icons/github.svg";
import iconPython from "../../static/svg icons/python-programming-language.svg";
import iconReact from "../../static/svg icons/react-js.svg";
import iconRedis from "../../static/svg icons/redis.svg";
import iconCss from "../../static/svg icons/css.svg";
import iconMaterialUi from "../../static/svg icons/material-ui-1.svg";
import iconHtml from "../../static/svg icons/html.svg";
import iconRestAPI from "../../static/svg icons/rest-api.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "rgba(100,207,202,0.9)",
  },

  hiringInfo: {
    width: 400,
    color: "#fff",
    minWidth: "45%",
    maxWidth: "95%",
    paddingLeft: "3rem",
  },

  title: {
    fontWeight: 700,
    marginTop: "5rem",
    paddingBottom: "3rem",
  },
  responsibility: {},
  require: {},
  contractInfo: {
    paddingBottom: "2rem",
  },
  niceToHave: {
    width: 700,
    color: "#fff",
    minWidth: "45%",
    maxWidth: "95%",
    paddingBottom: "3rem",
  },
  icon: {
    width: 24,
    height: 24,
  },
}));

const Hiring = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.hiringInfo}>
          <Typography variant="h4" className={classes.title}>
            我们正在招聘!
          </Typography>
          <Typography variant="h5" className={classes.jobTitle}>
            软件开发人员
          </Typography>
          <Typography variant="h5" className={classes.responsibility}>
            职责
          </Typography>
          <List className={classes.require}>
            <ListItem>
              <ListItemText primary="-负责网页搭建与维护" />
            </ListItem>
            <ListItem>
              <ListItemText primary="-有自己的想法与建议" />
            </ListItem>
            <ListItem>
              <ListItemText primary="-热爱电脑" />
            </ListItem>
          </List>
          <Link
            variant="h6"
            color="inherit"
            href="mailto:uwincssa.it@gmail.com"
            xs={12}
            className={classes.contractInfo}
            style={{
              display: "flex",
              alignItems: "left",
              flexWrap: "wrap",
              justifyContent: "left",
            }}
          >
            请将简历发至: <EmailOutlinedIcon />
            uwincssa.it@gmail.com
          </Link>
        </Box>
        <Container className={classes.niceToHave}>
          <Typography variant="h4" className={classes.title}>
            我们使用的技术栈
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <div className={""}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <img src={iconJS} alt="iconJS" className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="JavaScript" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconPython}
                        alt="iconPython"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Python" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconDocker}
                        alt="iconDocker"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Docker" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconGithub}
                        alt="iconGithub"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconAws}
                        alt="iconGithub"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="AWS" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconRedis}
                        alt="iconRedis"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Redis" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={""}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconReact}
                        alt="iconReact"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="React JS" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconMaterialUi}
                        alt="iconMaterialUi"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Material UI" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconDjango}
                        alt="iconDjango"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Django" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconRestAPI}
                        alt="iconRestAPI"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="REST API" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconCss}
                        alt="iconCss"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="CSS" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <img
                        src={iconHtml}
                        alt="iconHtml"
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary="HTML" />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Hiring;
