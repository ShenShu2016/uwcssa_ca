import {
  CardActions,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoCard from "./InfoCard";
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

export default function ByDepartment({ department, uwcssaMembers }) {
  const classes = useStyles();
  const membersByDepartment = uwcssaMembers.filter(
    (x) => x.departmentID === department.id
  );
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("department", department);
  console.log("membersByDepartment", membersByDepartment);
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
          <div className={classes.cards}>
            {membersByDepartment.map((member, memberIdx) => {
              return <InfoCard item={member} key={memberIdx} />;
            })}
          </div>
        </Collapse>
      </Paper>
    </Box>
  );
}
