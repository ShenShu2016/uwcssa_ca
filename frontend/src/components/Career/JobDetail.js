import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  selectUwcssaJobById,
  selectedUwcssaJob,
} from "../../redux/slice/uwcssaJobSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../BackdropLoading";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router";
import { useTitle } from "../../Hooks/useTitle";
import { usePermit } from "../../Hooks/usePermit";

// import { listUwcssaJobs } from "../../redux/actions/uwcssaJobActions";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "left",
    margin: "4rem 1rem",
  },
  intro: {},
  body: {
    paddingLeft: "1.5rem",
  },
}));

export default function JobDetail(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  //console.log(id);
  useTitle(`开放职位-${id}`);

  useEffect(() => {
    dispatch(selectedUwcssaJob(id));
  }, [id, dispatch]);
  const { user } = useSelector((state) => state.userAuth);
  const job = useSelector((state) => selectUwcssaJobById(state, id));
  const isPermit = usePermit(user.name, "admin");
  //console.log(job);
  return (
    <div className={classes.root}>
      {job ? (
        <Box>
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
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                to={`/career/applyJob/${job.id}`}
                component={Link}
              >
                申请
              </Button>
            </Grid>
            {isPermit ? (
              <Grid item>
                <Button
                  variant="outlined"
                  color="warning"
                  to={`/staff/uwcssaJob//editJob/${job.id}`}
                  component={Link}
                >
                  编辑（测试）
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Box>
      ) : (
        <BackdropLoading />
      )}
    </div>
  );
}
