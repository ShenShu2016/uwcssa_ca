/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 14:17:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 15:05:42
 * @FilePath: /uwcssa_ca/src/admin/ResearchDevelopmentTeam/ResearchDevelopmentTeamDashboard/ResearchDevelopmentTeamDashboard.tsx
 * @Description:
 *
 */

import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from "redux/researchDevelopmentTeam/researchDevelopmentTeamSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import Container from "components/Container";
import { getAuthState } from "redux/auth/authSlice";
import SimpleStriped from "./components/SimpleStriped/SimpleStriped";
import AddResearchDevelopmentTeamForm from "./components/AddResearchDevelopmentTeam/AddResearchDevelopmentTeamForm/AddResearchDevelopmentTeamForm";

function ResearchDevelopmentTeamDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const [open, setOpen] = useState(false);
  const { fetchResearchDevelopmentTeamListStatus } = useAppSelector(
    (state) => state.researchDevelopmentTeam,
  );
  const researchDevelopmentTeamList = useAppSelector(
    selectAllResearchDevelopmentTeams,
  );
  useEffect(() => {
    if (isAuth !== null && fetchResearchDevelopmentTeamListStatus === "idle") {
      dispatch(
        fetchResearchDevelopmentTeamList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchResearchDevelopmentTeamListStatus, dispatch]);

  return (
    <Container>
      <Typography variant="h4">Research & Development Team</Typography>
      <Button variant="contained" size="small" onClick={() => setOpen(true)}>
        Add Developer
      </Button>
      <SimpleStriped
        researchDevelopmentTeamList={researchDevelopmentTeamList}
      />
      <AddResearchDevelopmentTeamForm
        open={open}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}

export default ResearchDevelopmentTeamDashboard;
