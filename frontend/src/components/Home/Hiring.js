import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import shakeHand from "../../static/shakeHand.gif";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  hiringInfo: {
    maxWidth: 1300,
    padding: 0,
    color: "#fff",
    backgroundImage: `url(${shakeHand})`,
  },
  imgBackground: {
    width: "100%",
    background: "rgba(100,207,202,0.9)",
  },
  title: {
    background: "rgba(100,207,202,0.9)",
    fontWeight: 700,
    marginTop: "5rem",
    paddingBottom: "3rem",
  },
  jobTitle: {
    background: "rgba(100,207,202,0.9)",
    paddingBottom: "2rem",
  },
  responsibility: {
    background: "rgba(100,207,202,0.9)",
  },
  require: {
    background: "rgba(100,207,202,0.9)",
  },
  contractInfo: {
    background: "rgba(100,207,202,0.9)",
    paddingBottom: "8rem",
  },
}));

const Hiring = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.root}>
        <div className={classes.imgBackground}>
          <Container className={classes.hiringInfo}>
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
            <Typography variant="h5" className={classes.contractInfo}>
              请将简历发至: <EmailOutlinedIcon />
              uwincssa.it@gmail.com
            </Typography>
          </Container>
        </div>
      </Box>
    </Fragment>
  );
};

export default Hiring;
