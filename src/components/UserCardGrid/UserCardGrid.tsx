/*
 * @Author: 李佳修
 * @Date: 2022-05-19 17:21:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-25 22:20:31
 * @FilePath: /uwcssa_ca/src/components/UserCardGrid/UserCardGrid.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import stringAvatar from "components/Avatar/AvatarFunction";
import { useAppSelector } from "redux/hooks";

function UserCardGrid(): JSX.Element {
  const theme = useTheme();
  // const userInfo = useAppSelector(getUserInfo); //用这个代替直接从store拿，但是要注意google 登录的话sub 和username不一样，owner一定要用username，有另一个api叫 getOwnerUserName
  const myUserProfile = useAppSelector(
    (state) => state.userProfile.myUserProfile,
  );

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
        height: 1,
        background: "transparent",
        backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 75%, ${theme.palette.primary.main} 0%)`,
      }}
    >
      {myUserProfile.id ? (
        <>
          <Avatar
            src={myUserProfile.avatarURL?.objectCompressedURL}
            variant="circular"
            alt={myUserProfile.name}
            {...stringAvatar(myUserProfile.name, {
              width: 50,
              height: 50,
              fontSize: { xs: "24px", sm: "32px" },
            })}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <Typography fontWeight={600}>{myUserProfile.name}</Typography>
            {myUserProfile.id ? (
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={22}
                height={22}
                color="primary.main"
                marginLeft={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </Box>
            ) : null}
          </Box>
          <Typography fontSize={12} color="text.secondary">
            {myUserProfile.contactEmail}
          </Typography>
          <Box flexGrow={1} />
          <Stack spacing={2} marginTop={2} width={1} alignItems="center">
            {/* <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={18}
                height={18}
                color={'text.secondary'}
                marginRight={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </Box>
              <Typography color={'text.secondary'} variant={'subtitle2'}>
                {'300 info.followers'}
              </Typography>
            </Box> */}
            <Button
              component={Link}
              variant="outlined"
              color="primary"
              to="/settings/general"
            >
              View profile
            </Button>
          </Stack>
        </>
      ) : (
        <Box display="flex" width="100%" justifyContent="space-around" mt={4}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            // target="blank"
            to="/auth/signIn"
            size="large"
            sx={{
              width: "35%",
            }}
          >
            登录
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            // target="blank"
            to="/auth/signUp"
            size="large"
            sx={{
              width: "35%",
            }}
          >
            注册
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default UserCardGrid;
