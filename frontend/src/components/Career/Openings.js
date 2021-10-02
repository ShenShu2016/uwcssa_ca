import {React, useEffect} from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import {Link} from "react-router-dom"
import {setDepartments,setUwcssaJobs} from "../../redux/actions/uwcssaJobActions"
import store from "../../redux/store"
import {useSelector} from 'react-redux'


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    textAlign: "left",
    margin: "4rem",
    maxWidth: "960px",
    color: "#0D1F48",
  },
  jobLink: {
    textDecoration: "none",
    color: "#30A2EC",
  }
}));

export default function Openings() {
  const classes = useStyles();
  useEffect(() => {
    setDepartments()(store.dispatch)
    setUwcssaJobs()(store.dispatch)
  },[])

  const departments = useSelector(state=>state.allUwcssaJobs.departments)
  console.log(departments)

  return (
    <div className={classes.root}>
      {departments.length===0?"":departments.map(department=>{
        return (
          <div key={department.name}>
            <Typography variant="h5">{department.name}</Typography>
            {department.uwcssaJobs.items.length===0?"":department.uwcssaJobs.items.map(job => {
              return (
                <div key={job.id}>
                  <br />
                  <div style={{display: "inline-block",width: "70%"}}><Link  className={classes.jobLink} to={`/career/jobDetail/${job.id}`}>{job.title}</Link></div>
                  <div style={{display: "inline-block",width: "30%",textAlign: "right"}}>5</div>
                  <br />
                </div>
              )
            })}
            <br /><br />
          </div>
        ) 
      })}
    </div>
  )
}
