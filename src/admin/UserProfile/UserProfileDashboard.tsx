/*
 * @Author: Shen Shu
 * @Date: 2022-05-31 23:01:18
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 20:08:01
 * @FilePath: /uwcssa_ca/src/admin/UserProfile/UserProfileDashboard.tsx
 * @Description:
 *
 */

import React, { useEffect, useState } from 'react';
import {
  fetchUserProfileList,
  selectAllUserProfiles,
} from 'redux/userProfile/userProfileSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { Box } from '@mui/material';
import Container from 'components/Container';
import { CustomerListResults } from './components';
import { getAuthState } from 'redux/auth/authSlice';

function UserProfileDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const { fetchUserProfileListStatus } = useAppSelector(
    (state) => state.userProfile,
  );
  const userProfileList = useAppSelector(selectAllUserProfiles);

  useEffect(() => {
    const getUserProfileList = async () => {
      if (isAuth !== null && fetchUserProfileListStatus === 'idle') {
        await dispatch(
          fetchUserProfileList({
            isAuth,
          }),
        );
      }
    };
    getUserProfileList();
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
        <Container>
          <CustomerListResults userProfileList={userProfileList} />
        </Container>
      </Box>
    </div>
  );
}

export default UserProfileDashboard;
