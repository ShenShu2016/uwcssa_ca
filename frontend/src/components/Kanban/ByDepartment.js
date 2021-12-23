import {
  CardActions,
  Collapse,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    marginBlock: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
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

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //   console.log("department", department);
  console.log("kanbansByDepartment", kanbansByDepartment);
  return (
    <Box sx={{ my: "1rem" }}>
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
          <Box>
            <Stack
              direction={"row"}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="space-between"
            >
              {KanbanStatus.map((status, idx) => {
                return (
                  <Box sx={{ hight: "600px" }} key={idx}>
                    {status}
                  </Box>
                );
              })}
            </Stack>
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
