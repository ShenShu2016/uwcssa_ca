/*
 * @Author: Shen Shu
 * @Date: 2022-05-31 23:01:18
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 00:42:55
 * @FilePath: /uwcssa_ca/src/admin/UserProfile/UserProfileDashboard.tsx
 * @Description:
 *
 */

import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  fetchUserProfileList,
  selectAllUserProfiles,
} from 'redux/userProfile/userProfileSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { CustomerListResults } from './components';
import { getAuthState } from 'redux/auth/authSlice';

function UserProfileDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const [open, setOpen] = useState(false);
  const { fetchUserProfileListStatus } = useAppSelector(
    (state) => state.userProfile,
  );
  const userProfileList = useAppSelector(selectAllUserProfiles);

  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (isAuth !== null && fetchUserProfileListStatus === 'idle') {
        await dispatch(
          fetchUserProfileList({
            isAuth,
          }),
        );
      }
    };
    getUwcssaDepartments();
  }, [isAuth, fetchUserProfileListStatus]);

  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListResults userProfileList={userProfileList} />
        </Container>
      </Box>
    </div>
  );
}

export default UserProfileDashboard;
