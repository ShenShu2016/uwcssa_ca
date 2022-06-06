/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 14:17:41
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 17:05:54
 * @FilePath: /uwcssa_ca/src/admin/UwcssaMember/UwcssaMemberDashboard/UwcssaMemberDashboard.tsx
 * @Description:
 *
 */

import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  fetchUwcssaMemberList,
  selectAllUwcssaMembers,
} from 'redux/uwcssaMember/uwcssaMemberSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import AddUwcssaMemberForm from './components/AddUwcssaMember';
import Container from 'components/Container';
import SimpleStriped from './components/SimpleStriped';
import { getAuthState } from 'redux/auth/authSlice';

function UwcssaMemberDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const [open, setOpen] = useState(false);
  const { fetchUwcssaMemberListStatus } = useAppSelector(
    (state) => state.uwcssaMember,
  );
  const uwcssaMemberList = useAppSelector(selectAllUwcssaMembers);
  useEffect(() => {
    if (isAuth !== null && fetchUwcssaMemberListStatus === 'idle') {
      dispatch(
        fetchUwcssaMemberList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchUwcssaMemberListStatus]);

  return (
    <Container>
      <Typography variant="h4">学生会成员</Typography>
      <Button variant="contained" size={'small'} onClick={() => setOpen(true)}>
        Add 学生会成员
      </Button>
      <SimpleStriped uwcssaMemberList={uwcssaMemberList} />
      <AddUwcssaMemberForm open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}

export default UwcssaMemberDashboard;
