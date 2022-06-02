/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 22:20:18
 * @FilePath: /uwcssa_ca/src/views/Settings/General/General.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  Divider,
  Grid,
  Link as MUILink,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Page from '../components/Page';
import React from 'react';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { updateUserProfileData } from 'redux/userProfile/userProfileSlice';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name'),
  contactEmail: yup.string().trim().email('Please enter a valid email address'),
  about: yup.string().trim().max(1000, 'Should be less than 1000 chars'),
  title: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name'),

  avatarURL: yup
    .string()
    .trim()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    ),

  website: yup
    .string()
    .trim()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    ),
});

const General = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const ownerUsername = useAppSelector(getOwnerUserName);
  const myUserProfile = useAppSelector(
    (state) => state.userProfile.myUserProfile,
  );

  const initialValues = {
    fullName: myUserProfile.fullName || '',
    about: myUserProfile.about || '',
    contactEmail: myUserProfile.contactEmail || '',
    title: myUserProfile.title || '',
    website: myUserProfile.website || '',
  };
  const onSubmit = async (values) => {
    const updateUserProfileInput = {
      id: ownerUsername,
      ...values,
    };
    const response = await dispatch(
      updateUserProfileData(updateUserProfileInput),
    );
    console.log('response', response);
    return values;
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
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your private information
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our
            <MUILink
              color={'primary'}
              href={'/company-terms'}
              underline={'none'}
            >
              terms of use
            </MUILink>
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your Full Name
                </Typography>
                <TextField
                  label="Full Name *"
                  variant="outlined"
                  name={'fullName'}
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your email
                </Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  name={'contactEmail'}
                  fullWidth
                  value={formik.values.contactEmail}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contactEmail &&
                    Boolean(formik.errors.contactEmail)
                  }
                  helperText={
                    formik.touched.contactEmail && formik.errors.contactEmail
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  About
                </Typography>
                <TextField
                  label="Tell us about yourself"
                  variant="outlined"
                  name={'about'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.about}
                  onChange={formik.handleChange}
                  error={formik.touched.about && Boolean(formik.errors.about)}
                  helperText={formik.touched.about && formik.errors.about}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Title
                </Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter your website
                </Typography>
                <TextField
                  label="Website"
                  variant="outlined"
                  name={'website'}
                  fullWidth
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  {/* <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <Link
                      
                        color={'primary'}
                        href={'/account-billing'}
                        underline={'none'}
                      >
                        billing information.
                      </Link>
                    </Typography>
                  </Box> */}
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

export default General;
