/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 21:41:54
 * @FilePath: /uwcssa_ca/src/views/Settings/Security/Security.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Link as MUILink,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import Page from '../components/Page';
import React from 'react';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  currentPassword: yup.string().required('Please specify your password'),
  newPassword: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
  repeatPassword: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Security = (): JSX.Element => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
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
              Change your password
            </Typography>
            {/* <Button
              size={'large'}
              variant={'outlined'}
              sx={{ marginTop: { xs: 2, md: 0 } }}
            >
              Log out
            </Button> */}
            {/* !!之后再干 */}
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Current password
                </Typography>
                <TextField
                  variant="outlined"
                  disabled
                  name={'currentPassword'}
                  type={'password'}
                  fullWidth
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.currentPassword &&
                    Boolean(formik.errors.currentPassword)
                  }
                  helperText={
                    formik.touched.currentPassword &&
                    formik.errors.currentPassword
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  New password
                </Typography>
                <TextField
                  variant="outlined"
                  disabled
                  name={'newPassword'}
                  type={'password'}
                  fullWidth
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.newPassword &&
                    Boolean(formik.errors.newPassword)
                  }
                  helperText={
                    formik.touched.newPassword && formik.errors.newPassword
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Repeat password
                </Typography>
                <TextField
                  variant="outlined"
                  disabled
                  name={'repeatPassword'}
                  type={'password'}
                  fullWidth
                  value={formik.values.repeatPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.repeatPassword &&
                    Boolean(formik.errors.repeatPassword)
                  }
                  helperText={
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  disabled={true}
                  control={<Switch color="primary" defaultChecked />}
                  label={
                    <Typography variant="subtitle1" fontWeight={700}>
                      Public Profile
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  disabled={true}
                  control={<Switch color="primary" />}
                  label={
                    <Typography variant="subtitle1" fontWeight={700}>
                      Expose your email
                    </Typography>
                  }
                  labelPlacement="end"
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
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <MUILink
                        component={Link}
                        color={'primary'}
                        to={'/account-notifications'}
                        underline={'none'}
                      >
                        notification settings.
                      </MUILink>
                    </Typography>
                  </Box>
                  <Button
                    size={'large'}
                    variant={'contained'}
                    type={'submit'}
                    disabled
                  >
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

export default Security;
