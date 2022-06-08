/*
 * @Author: Shikai Jin
 * @Date: 2022-06-04 21:45:47
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-05 20:47:52
 * @FilePath: /uwcssa_ca/src/views/Developers/components/Team/DevelopTeam.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { Box } from '@mui/system';
import DevelopCard from './componments/DeveloperCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getAuthState } from 'redux/auth/authSlice';

const DevelopTeam = (): JSX.Element => {
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
        fetchResearchDevelopmentTeamListStatus === 'idle'
      ) {
        await dispatch(fetchResearchDevelopmentTeamList({ isAuth }));
      }
    };
    getUwcssaDepartments();
  }, [fetchResearchDevelopmentTeamListStatus]);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Small team. Big hearts.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <DevelopCard developers={developers} />
      </Grid>
    </Box>
  );
};

export default DevelopTeam;
