/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 14:17:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-30 22:15:45
 * @FilePath: /uwcssa_ca/src/admin/ResearchDevelopmentTeam/ResearchDevelopmentTeamDashboard/ResearchDevelopmentTeamDashboard.tsx
 * @Description:
 *
 */

import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { AddResearchDevelopmentTeamForm } from './components/AddResearchDevelopmentTeam';
import Container from 'components/Container';
import SimpleStriped from './components/SimpleStriped';
import { getAuthState } from 'redux/auth/authSlice';

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
    const getUwcssaDepartments = async () => {
      if (
        isAuth !== null &&
        fetchResearchDevelopmentTeamListStatus === 'idle'
      ) {
        await dispatch(
          fetchResearchDevelopmentTeamList({
            isAuth,
          }),
        );
      }
    };
    getUwcssaDepartments();
  }, [isAuth, fetchResearchDevelopmentTeamListStatus]);

  return (
    <Container>
      <Typography variant="h4">Research & Development Team</Typography>
      <Button variant="contained" size={'small'} onClick={() => setOpen(true)}>
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
