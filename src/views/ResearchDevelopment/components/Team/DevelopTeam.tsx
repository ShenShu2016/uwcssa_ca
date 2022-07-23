/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 21:45:47
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 17:40:16
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/components/Team/DevelopTeam.tsx
 * @Description:
 *
 */

import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from "redux/researchDevelopmentTeam/researchDevelopmentTeamSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { getAuthState } from "redux/auth/authSlice";
import DevelopCard from "./components/DeveloperCard";

function DevelopTeam(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

  const developers = useAppSelector(selectAllResearchDevelopmentTeams);
  const { fetchResearchDevelopmentTeamListStatus } = useAppSelector(
    (state) => state.researchDevelopmentTeam,
  );
  useEffect(() => {
    if (isAuth !== null && fetchResearchDevelopmentTeamListStatus === "idle") {
      dispatch(fetchResearchDevelopmentTeamList({ isAuth }));
    }
  }, [isAuth, fetchResearchDevelopmentTeamListStatus]);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color="text.secondary"
          align="center"
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant="h4" align="center">
          Small team. Big hearts.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <DevelopCard developers={developers} />
      </Grid>
    </Box>
  );
}

export default DevelopTeam;
