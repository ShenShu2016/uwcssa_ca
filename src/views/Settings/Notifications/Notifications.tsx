/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 18:23:03
 * @FilePath: /uwcssa_ca/src/views/Settings/Notifications/Notifications.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link as MUILink,
  Typography,
} from '@mui/material';
import { getOwnerUserName, getUserInfo } from 'redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { Link } from 'react-router-dom';
import Page from '../components/Page';
import React from 'react';
import { updateUserProfileData } from 'redux/userProfile/userProfileSlice';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

const validationSchema = yup.object({
  emailSubscription: yup.boolean(),
});
const Notifications = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const userInfo = useAppSelector(getUserInfo);
  const ownerUserName = useAppSelector(getOwnerUserName);

  const myUserProfile = useAppSelector(
    (state) => state.userProfile.myUserProfile,
  );
  console.log(myUserProfile);
  const initialValues = {
    emailSubscription: myUserProfile.emailSubscription,
  };
  console.log(initialValues);
  const onSubmit = async (values) => {
    const updateUserProfileInput = {
      id: ownerUserName,
      ...values,
    };
    const response = await dispatch(
      updateUserProfileData(updateUserProfileInput),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      enqueueSnackbar('Profile updated successfully', { variant: 'success' });
    } else {
      enqueueSnackbar('Profile update failed', { variant: 'error' });
    }
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <>
      <Page>
        <Box>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={'space-between'}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography variant="h6" fontWeight={700}>
              Update website notifications
            </Typography>
            {/* <Button
              size={'large'}
              variant={'outlined'}
              sx={{ marginTop: { xs: 2, md: 0 } }}
            >
              Reset all
            </Button> */}
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">System settings</Typography>
                <Typography variant="caption">
                  You will receive emails in {userInfo.email} when new article
                  and event are published.
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      name={'emailSubscription'}
                      value={formik.values.emailSubscription}
                      onChange={formik.handleChange}
                      control={
                        <Checkbox
                          color="primary"
                          checked={formik.values.emailSubscription}
                        />
                      }
                      label="E-mail subscription"
                    />
                  </Box>
                  {/* <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Push notifications"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Text messages"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={false} color="primary" />
                      }
                      label="Phone calles"
                    />
                  </Box> */}
                </Box>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <Typography variant="h6">Chat settings</Typography>
                <Typography variant="caption">
                  You will recieve emails in your business email address
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={false} color="primary" />
                      }
                      label="E-mail alerts"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Push notifications"
                    />
                  </Box>
                </Box>
              </Grid> */}
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <MUILink
                        component={Link}
                        color={'primary'}
                        to={'/account-security'}
                        underline={'none'}
                      >
                        security settings.
                      </MUILink>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
    </>
  );
};

export default Notifications;
