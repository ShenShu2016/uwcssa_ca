import "./styles.css";

import {
  CardActions,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoCard from "./InfoCard";
import { makeStyles } from "@mui/styles";
import { selectAllUwcssaMembers } from "../../redux/slice/uwcssaMemberSlice";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

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

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function ByDepartment({ department }) {
  const classes = useStyles();
  const uwcssaMembers = useSelector(selectAllUwcssaMembers);
  let membersByDepartment = uwcssaMembers.filter(
    (x) => x.departmentID === department.id && x.active === true
  );

  // membersByDepartment = membersByDepartment.find((x) => x.leader === true)
  //   ? [
  //       membersByDepartment.find((x) => x.leader === true),
  //       ...membersByDepartment.filter((x) => x.leader !== true),
  //     ]
  //   : membersByDepartment;

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //   console.log("department", department);
  //console.log("membersByDepartment", membersByDepartment);
  const delay = 600;

  const duration = 1000;

  const animStr = (memberIdx) =>
    `fadeIn ${duration}ms ease-out ${delay * (memberIdx + 1)}ms backwards`;
  return (
    <Box
      sx={{
        my: "1rem",
        // borderStyle: "none none dashed none",
        // borderWidth: "1px",
      }}
    >
      {/* <Box elevation={10}> */}

      <Root>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        {department.id.length < 10 ? (
          <Divider variant={"middle"}>
            <Box sx={{ overflowWrap: "break-word" }}>
              <Typography variant="h6" color="primary">
                {department.id}
              </Typography>
            </Box>
          </Divider>
        ) : (
          <Box sx={{ overflowWrap: "break-word", textAlign: "center" }}>
            <Typography variant="h6" color="primary">
              {department.id}
            </Typography>
          </Box>
        )}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className={classes.cards}>
            {membersByDepartment.map((member, memberIdx) => {
              return (
                <div key={memberIdx} style={{ animation: animStr(memberIdx) }}>
                  <InfoCard item={member} />
                </div>
              );
            })}
          </div>
        </Collapse>
        <Divider sx={{ backgroundColor: "#d9e2ee", margin: "0 20px" }} />
      </Root>
      {/* </Box> */}
    </Box>
  );
}
