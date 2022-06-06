/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 14:17:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 15:25:38
 * @FilePath: /uwcssa_ca/src/admin/UwcssaMember/UwcssaMemberDashboard/UwcssaMemberDashboard.tsx
 * @Description:
 *
 */

import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { AddResearchDevelopmentTeamForm } from './components/AddUwcssaMemberTeam';
import Container from 'components/Container';
import SimpleStriped from './components/SimpleStriped';
import { fetchResearchDevelopmentTeamList } from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { getAuthState } from 'redux/auth/authSlice';
import { selectAllUwcssaMembers } from 'redux/uwcssaMember/uwcssaMemberSlice';

function UwcssaMemberDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const [open, setOpen] = useState(false);
  const { fetchUwcssaMemberListStatus } = useAppSelector(
    (state) => state.uwcssaMember,
  );
  const uwcssaMemberList = useAppSelector(selectAllUwcssaMembers);
  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (isAuth !== null && fetchUwcssaMemberListStatus === 'idle') {
        await dispatch(
          fetchResearchDevelopmentTeamList({
            isAuth,
          }),
        );
      }
    };
    getUwcssaDepartments();
  }, [isAuth, fetchUwcssaMemberListStatus]);

  return (
    <Container>
      <Typography variant="h4">学生会成员</Typography>
      <Button variant="contained" size={'small'} onClick={() => setOpen(true)}>
        Add 学生会成员
      </Button>
      <SimpleStriped uwcssaMemberList={uwcssaMemberList} />
      <AddResearchDevelopmentTeamForm
        open={open}
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}

export default UwcssaMemberDashboard;
