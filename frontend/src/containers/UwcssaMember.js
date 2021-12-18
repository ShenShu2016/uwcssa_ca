import React, { useEffect } from "react";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import {
  fetchUwcssaMembers,
  selectAllUwcssaMembers,
} from "../redux/slice/uwcssaMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import InfoCard from "../components/UwcssaMember/InfoCard";
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

export default function UwcssaMember() {
  useTitle("UWCSSA学生会成员");
  const classes = useStyles();
  const dispatch = useDispatch();

  const uwcssaMembers = useSelector(selectAllUwcssaMembers);
  console.log(uwcssaMembers);

  useEffect(() => {
    dispatch(fetchUwcssaMembers());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        UWCSSA 学生会成员
      </Typography>
      <div className={classes.cards}>
        {uwcssaMembers.map((member, memberIdx) => {
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
            to="/admin/uwcssaMember/create"
          />
        </SpeedDial>
      </Box>
    </div>
  );
}
