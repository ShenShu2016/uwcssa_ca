import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import API from "@aws-amplify/api";
import { Link } from "react-router-dom";
// import { listUwcssaJobs } from "../../redux/actions/uwcssaJobActions";
import { listUwcssaJobs } from "../../redux/CustomQuery/CareerQueries";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "left",
    margin: "4rem 1rem",
    color: "#1472CE",
  },
  intro: {
    color: "#0D1F48",
  },
  body: {
    color: "#0D1F48",
    paddingLeft: "1.5rem",
  },
}));

export default function JobDetail(props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [job, setJob] = useState([]);
  useTitle(`开放职位-${id}`);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await API.graphql({
          query: listUwcssaJobs,
          variables: { filter: { id: { eq: id } } },
          authMode: "AWS_IAM",
        });
        const job = jobData.data.listUwcssaJobs.items[0];
        console.log("jobData", jobData);
        setJob(job);
      } catch (error) {
        console.log("error on fetching Job", error);
      }
    };
    fetchJob();
  }, [id]);

  return (
    <div className={classes.root}>
      <Typography variant="h6">{job.title}</Typography>
      <br />
      <Typography variant="body1" className={classes.intro}>
        {job.introduction}
      </Typography>
      <br />
      <Typography variant="h6">基本要求:</Typography>
      <br />
      {job.requirements
        ? job.requirements.map((requirement, index) => {
            return (
              <div key={index}>
                <li className={classes.body}>{requirement}</li>
              </div>
            );
          })
        : ""}
      <br />
      <Typography variant="h6">额外要求(nice to have):</Typography>
      <br />
      {job.bonus
        ? job.bonus.map((bonus, index) => {
            return (
              <div key={index}>
                <li className={classes.body}>{bonus}</li>
              </div>
            );
          })
        : ""}
      <br />
      <Typography variant="h6">工作计划与时间安排:</Typography>
      <br />
      {job.schedule
        ? job.schedule.map((schedule, index) => {
            return (
              <div key={index}>
                <li className={classes.body}>{schedule}</li>
              </div>
            );
          })
        : ""}
      <br />
      <Typography variant="h6">BENEFITS:</Typography>
      <br />
      {job.benefits
        ? job.benefits.map((benefit, index) => {
            return (
              <div key={index}>
                <li className={classes.body}>{benefit}</li>
              </div>
            );
          })
        : ""}
      <br />
      <Button
        variant="outlined"
        color="primary"
        to={`/career/applyJob/${job.id}`}
        component={Link}
      >
        申请
      </Button>
    </div>
  );
}
