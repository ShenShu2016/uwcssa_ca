import {
  CardActions,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import ByStatus from "./ByStatus";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "1120px",
    maxWidth: "1536px",
    marginBlock: "1rem",
    marginInline: "auto",
  },
  kanbanStatus: {
    display: "flex",
    flexWrap: "noWrap",
    justifyContent: "space-between",
  },
}));
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

const KanbanStatus = ["IDEA", "TODO", "INPROGRESS", "DONE"];

export default function ByDepartment({ department, kanbans }) {
  const classes = useStyles();
  let kanbansByDepartment = kanbans.filter(
    (x) => x.departmentID === department.id
  );

  kanbansByDepartment = kanbansByDepartment.find((x) => x.leader === true)
    ? [
        kanbansByDepartment.find((x) => x.leader === true),
        ...kanbansByDepartment.filter((x) => x.leader !== true),
      ]
    : kanbansByDepartment;

  const canExpanded = kanbansByDepartment.length > 0 ? true : false;
  const [expanded, setExpanded] = useState(canExpanded);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //   console.log("department", department);
  //console.log("kanbansByDepartment", kanbansByDepartment);
  return (
    <Box className={classes.root}>
      <Paper elevation={10}>
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
          <Box className={classes.kanbanStatus}>
            {KanbanStatus.map((status, idx) => {
              return (
                <Box key={idx} sx={{ width: "100%", hight: "100%" }}>
                  <ByStatus
                    status={status}
                    kanbansByDepartment={kanbansByDepartment}
                  />
                </Box>
              );
            })}
          </Box>
          {/* <div className={classes.cards}>
            {kanbansByDepartment.map((ticket, idx) => {
              return <Ticket item={ticket} key={idx} />;
            })}
          </div> */}
        </Collapse>
      </Paper>
    </Box>
  );
}
