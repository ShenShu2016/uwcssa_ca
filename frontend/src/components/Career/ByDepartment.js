import {
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

//const useStyles = makeStyles((theme) => ({}));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ByDepartment({ department, uwcssaJobs }) {
  //const classes = useStyles();
  let jobsByDepartment = uwcssaJobs.filter(
    (x) => x.departmentID === department.id
  );

  jobsByDepartment = jobsByDepartment.find((x) => x.leader === true)
    ? [
        jobsByDepartment.find((x) => x.leader === true),
        ...jobsByDepartment.filter((x) => x.leader !== true),
      ]
    : jobsByDepartment;

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //   console.log("department", department);
  //   console.log("jobsByDepartment", jobsByDepartment);
  return (
    <Box sx={{ my: "1rem" }}>
      <Paper variant="outlined">
        <CardActions disableSpacing>
          <Box sx={{ ml: "1rem" }}>
            <Typography variant="h6" color="primary">
              {department.id}
            </Typography>
          </Box>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List sx={{ mx: "1rem" }}>
            {jobsByDepartment.map((job, idx) => {
              return (
                <Paper sx={{ my: "0.5rem" }}>
                  <CardActionArea
                    component={Link}
                    to={`/career/jobDetail/${job.id}`}
                  >
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="h6">{job.title}</Typography>
                        }
                        // secondary={job.createdAt.slice(0, 10)}
                      />
                    </ListItem>
                  </CardActionArea>
                </Paper>
              );
            })}
          </List>
        </Collapse>
      </Paper>
    </Box>
  );
}
