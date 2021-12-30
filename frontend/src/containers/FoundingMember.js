import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchFoundingMembers,
  selectAllFoundingMembers,
} from "../redux/slice/foundingMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import Footer from "./Footer";
import InfoCard from "../components/FoundingMember/InfoCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../Hooks/usePermit";
import { useTitle } from "../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",

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

export default function FoundingMember() {
  useTitle("UWCSSA.CA-创始团队以及贡献者");
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPermit = usePermit(null, "admin");
  const foundingMembers = useSelector(selectAllFoundingMembers);
  //console.log(foundingMembers);

  useEffect(() => {
    dispatch(fetchFoundingMembers());
  }, [dispatch]);

  return (
    <Box>
      <div className={classes.root}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" className={classes.title}>
            创始团队以及贡献者
          </Typography>

          {isPermit && (
            <Button
              variant="contained"
              component={Link}
              to="/admin/foundingMember/create"
              sx={{ my: "1rem", borderRadius: "10px" }}
              size="large"
              startIcon={<AddCircleOutlineIcon />}
            >
              添加新成员
            </Button>
          )}
        </Box>
        <div className={classes.cards}>
          {foundingMembers.map((member, memberIdx) => {
            return <InfoCard item={member} key={memberIdx} />;
          })}
        </div>
      </div>
      <Footer />
    </Box>
  );
}
