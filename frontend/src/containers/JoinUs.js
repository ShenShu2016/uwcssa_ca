import { AppBar, Box, Tab, Tabs, Typography, useTheme } from "@mui/material";

import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@mui/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "center",
    margin: "4rem",
  },
  slogan: {
    marginTop: "1rem",
  },
  recruit: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  jobDescription: {
    width: "80%",
    margin: "auto",
  },
  jobDetails: {
    backgroundColor: "#F7F9F9",
    textAlign: "left",
    paddingBottom: "2rem",
  },
}));

export default function JoinUs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">加入我们</Typography>
      <Typography variant="subtitle1" className={classes.slogan}>
        加入UWCSSA，你将会遇到志同道合和具启发性的人，与他们成为朋友，一起打拼。
      </Typography>
      <Typography variant="h4" className={classes.recruit}>
        成为我们的一员
      </Typography>
      <div className={classes.jobDescription}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="技术部" {...a11yProps(0)} />
            <Tab label="人事部" {...a11yProps(1)} />
            <Tab label="外联部" {...a11yProps(2)} />
            <Tab label="宣传部" {...a11yProps(3)} />
            <Tab label="法务部" {...a11yProps(4)} />
            <Tab label="活动部" {...a11yProps(5)} />
            <Tab label="财务部" {...a11yProps(6)} />
            <Tab label="顾问" {...a11yProps(7)} />
          </Tabs>
        </AppBar>
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          这里就放部门招聘的职位信息
          <br />
          TEXT BODY
          <br />
          Below is an example:
          <br />
          <br />
          Full-stack Engineer
          <br />
          <br />
          About the role
          <br />
          You will initiate the development of a bold new product vertical. We
          are looking for an experienced, and ambitious full-stack engineer that
          is ready to work in an entrepreneurial environment.
          <br />
          Skills you should have
          <br />
          Expertise in the modern JavaScript ecosystem
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Two
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Three
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Four
        </TabPanel>
        <TabPanel
          value={value}
          index={4}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Five
        </TabPanel>
        <TabPanel
          value={value}
          index={5}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Six
        </TabPanel>
        <TabPanel
          value={value}
          index={6}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Seven
        </TabPanel>
        <TabPanel
          value={value}
          index={7}
          dir={theme.direction}
          className={classes.jobDetails}
        >
          Item Eight
        </TabPanel>
      </div>
    </div>
  );
}
