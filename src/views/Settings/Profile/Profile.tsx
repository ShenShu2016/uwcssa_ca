/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 22:20:59
 * @FilePath: /uwcssa_ca/src/views/Settings/Profile/Profile.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import Container from 'components/Container';
import CropperDialog from 'components/Cropper/CropperDialog';
import React from 'react';
import { stringAvatar } from 'components/Avatar/AvatarFunction';
import { useAppSelector } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';

// import CropperDialog from 'components/Cropper/CropperDialog';

const Profile = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { myUserProfile } = useAppSelector((state) => state.userProfile);
  const avatarErrorHandler = () => {
    console.log('avatar error');
  };
  return (
    <>
      <Box
        sx={{
          background: 'transparent',
          backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 40%, ${theme.palette.primary.main} 0%)`,
        }}
      >
        <Container maxWidth={800} sx={{ margin: 'auto' }}>
          {/* margin auto 自己加上去的 */}
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box position={'relative'}>
              <Avatar
                src={myUserProfile.avatarURL?.objectCompressedURL}
                imgProps={{
                  onError: avatarErrorHandler,
                }}
                variant={'circular'}
                {...stringAvatar(myUserProfile.name, {
                  fontSize: { xs: '64px', sm: '80px' },
                  width: { xs: theme.spacing(16), sm: theme.spacing(20) },
                  height: { xs: theme.spacing(16), sm: theme.spacing(20) },
                  border: `8px solid ${theme.palette.background.paper}`,
                })}
              />
              <CropperDialog />
            </Box>

            <Card
              sx={{
                p: { xs: 2, md: 4 },
                marginTop: theme.spacing(-10),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 1,
                height: 1,
              }}
            >
              <Button
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                sx={{
                  alignSelf: 'flex-end',
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.divider,
                  paddingX: 2,
                }}
                onClick={() => {
                  navigate('/settings/general');
                }}
              >
                Edit
              </Button>
              <Box marginTop={2}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant={'subtitle2'}>
                    {myUserProfile.name}
                  </Typography>
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  marginTop={1}
                >
                  <Typography fontWeight={700} variant={'h4'}>
                    {myUserProfile.fullName}
                  </Typography>
                  {myUserProfile.name ? (
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={28}
                      height={28}
                      color={'primary.dark'}
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
                <Typography
                  color={'text.secondary'}
                  variant={'h6'}
                  align={'center'}
                >
                  {myUserProfile.title}
                </Typography>
                <Stack
                  spacing={2}
                  marginTop={4}
                  width={1}
                  alignItems={'center'}
                >
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 1, md: 2 }}
                  >
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
                        color={'primary.dark'}
                        marginRight={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </Box>
                      <Typography color={'primary'} variant={'subtitle2'}>
                        {myUserProfile.title}
                      </Typography>
                    </Box> */}
                    {myUserProfile.website && (
                      <Box
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
                          color={'primary.dark'}
                          marginRight={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </Box>

                        <Typography color={'primary'} variant={'subtitle2'}>
                          {myUserProfile.website}
                        </Typography>
                      </Box>
                    )}
                    {myUserProfile.contactEmail && (
                      <Box
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
                          color={'primary.dark'}
                          marginRight={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </Box>
                        <Typography color={'primary'} variant={'subtitle2'}>
                          {myUserProfile.contactEmail}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                  <Box
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
                      300 followers
                    </Typography>
                  </Box>
                  <Button
                    component={'a'}
                    variant={'contained'}
                    color={'primary'}
                    href={myUserProfile.website}
                  >
                    View profile
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
