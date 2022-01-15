import { Fab, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchFoundingMembers,
  selectAllFoundingMembers,
} from "../redux/slice/foundingMemberSlice";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
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
  fabBox: {
    display: "block",
    position: "fixed",
    right: "4rem",
    bottom: "5rem",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      right: 10,
      bottom: 70,
    },
  },
}));

export default function FoundingMember() {
  useTitle("UWCSSA.CA-创始团队以及贡献者");
  const classes = useStyles();
  const dispatch = useDispatch();
  const isPermit = usePermit(null, "admin");
  const foundingMembers = useSelector(selectAllFoundingMembers);
  const { fetchFoundingMembersStatus } = useSelector(
    (state) => state.foundingMember
  );

  useEffect(() => {
    if (fetchFoundingMembersStatus === "idle" || undefined) {
      dispatch(fetchFoundingMembers());
    }
  }, [dispatch, fetchFoundingMembersStatus]);

  const delay = 600;

  const duration = 1000;

  const animStr = (memberIdx) =>
    `fadeIn ${duration}ms ease-out ${delay * (memberIdx + 1)}ms backwards`;

  return (
    <Box>
      <div className={classes.root}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "info.light" }}
          >
            创始团队以及贡献者
          </Typography>
        </Box>
        <div className={classes.cards}>
          {foundingMembers.map((member, memberIdx) => {
            return (
              <div key={member.id} style={{ animation: animStr(memberIdx) }}>
                <InfoCard item={member} />
              </div>
            );
          })}
        </div>
        {isPermit && (
          <Box className={classes.fabBox}>
            <Fab
              color="primary"
              component={Link}
              to="/admin/foundingMember/create"
            >
              <AddIcon />
            </Fab>
          </Box>
        )}
      </div>
      <Footer />
    </Box>
  );
}
