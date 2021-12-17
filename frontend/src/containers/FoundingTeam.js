import React, { useEffect } from "react";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import {
  fetchFoundingMembers,
  selectAllFoundingMembers,
} from "../redux/slice/foundingMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import InfoCard from "../components/FoundingTeam/InfoCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "4rem auto",
    maxWidth: "1536px",
    color: "#0D1F48",
  },
  cards: {
    marginBlock: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },
}));

export default function FoundingTeam() {
  useTitle("UWCSSA.CA-创始团队以及贡献者");
  const classes = useStyles();
  const dispatch = useDispatch();

  const foundingMembers = useSelector(selectAllFoundingMembers);
  console.log(foundingMembers);

  useEffect(() => {
    dispatch(fetchFoundingMembers());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        创始团队以及贡献者
      </Typography>
      <div className={classes.cards}>
        {foundingMembers.map((member, memberIdx) => {
          return <InfoCard item={member} key={memberIdx} />;
        })}
      </div>
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          <SpeedDialAction
            icon={<AddIcon />}
            tooltipTitle={"添加成员"}
            component={Link}
            to="/admin/foundingTeam/create"
          />
        </SpeedDial>
      </Box>
    </div>
  );
}
