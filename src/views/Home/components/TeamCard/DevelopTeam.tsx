/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 21:45:47
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 00:48:16
 * @FilePath: /uwcssa_ca/src/views/Home/components/TeamCard/DevelopTeam.tsx
 * @Description:
 *
 */

import React, { useEffect } from "react";
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from "redux/researchDevelopmentTeam/researchDevelopmentTeamSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Box, Grid, Typography } from "@mui/material";

import { getAuthState } from "redux/auth/authSlice";
import DevelopCard from "./componments/DeveloperCard";

function DevelopTeam(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

  const developers = useAppSelector(selectAllResearchDevelopmentTeams);
  const { fetchResearchDevelopmentTeamListStatus } = useAppSelector(
    (state) => state.researchDevelopmentTeam,
  );
  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (
        isAuth !== null &&
        fetchResearchDevelopmentTeamListStatus === "idle"
      ) {
        await dispatch(fetchResearchDevelopmentTeamList({ isAuth }));
      }
    };
    getUwcssaDepartments();
  }, [dispatch, fetchResearchDevelopmentTeamListStatus, isAuth]);

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
