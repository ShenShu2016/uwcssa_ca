import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchUwcssaMembers,
  selectAllUwcssaMembers,
} from "../redux/slice/uwcssaMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import Footer from "./Footer";
import InfoCard from "../components/UwcssaMember/InfoCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../Hooks/usePermit";
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
  const isPermit = usePermit(null, "admin");
  const uwcssaMembers = useSelector(selectAllUwcssaMembers);
  console.log(uwcssaMembers);

  useEffect(() => {
    dispatch(fetchUwcssaMembers());
  }, [dispatch]);
  console.log(isPermit);
  return (
    <Box>
      <div className={classes.root}>
        <Typography variant="h3" className={classes.title}>
          UWCSSA 学生会成员
        </Typography>{" "}
        {isPermit && (
          <Button
            variant="contained"
            component={Link}
            to="/admin/uwcssaMember/create"
            sx={{ my: "1rem", borderRadius: "10px" }}
            size="large"
            startIcon={<AddCircleOutlineIcon />}
          >
            添加新成员
          </Button>
        )}
        <div className={classes.cards}>
          {uwcssaMembers.map((member, memberIdx) => {
            return <InfoCard item={member} key={memberIdx} />;
          })}
        </div>
      </div>
      <Footer />
    </Box>
  );
}
