/*
 * @Author: Shen Shu
 * @Date: 2022-05-31 23:01:18
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 14:11:00
 * @FilePath: /uwcssa_ca/src/admin/UserProfile/UserProfileDashboard.tsx
 * @Description:
 *
 */

import React, { useEffect } from "react";
import {
  fetchUserProfileList,
  selectAllUserProfiles,
} from "redux/userProfile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { Box } from "@mui/material";
import Container from "components/Container";
import { getAuthState } from "redux/auth/authSlice";
import CustomerListResults from "./components/CustomerListResults";

function UserProfileDashboard() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const { fetchUserProfileListStatus } = useAppSelector(
    (state) => state.userProfile,
  );
  const userProfileList = useAppSelector(selectAllUserProfiles);

  useEffect(() => {
    const getUserProfileList = async () => {
      if (fetchUserProfileListStatus === "idle") {
        await dispatch(
          fetchUserProfileList({
            isAuth,
          }),
        );
      }
    };
    getUserProfileList();
  }, [isAuth, fetchUserProfileListStatus, dispatch]);

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
