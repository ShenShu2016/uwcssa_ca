/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 14:57:10
 * @FilePath: /uwcssa_ca/src/views/EmailConfirmationCover/components/Form/Form.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Alert,
  Box,
  Button,
  Grid,
  Link as MUILink,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import { emailConfirm } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  authenticationCode: yup
    .string()
    .required('Please specify your code')
    .min(6, 'The code should have at minimum length of 6')
    .max(6, 'The code should have at maximum length of 6'),
});

const Form = (): JSX.Element => {
  const navigate = useNavigate();
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState('');
  const initialValues = {
    username: username,
    authenticationCode: '',
  };

  const onSubmit = async (values) => {
    const response: any = await dispatch(emailConfirm(values));
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/auth/signIn');
    } else {
      setSignInError(response.error.message);
      return false;
    }

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Email Confirmation
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Please check your email
        </Typography>
        <Typography color="text.secondary">May be in the spam box.</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'username'}
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  Enter your verification code
                </Typography>
              </Box>
              <Typography variant={'subtitle2'}>
                <MUILink
                  component={Link}
                  color={'primary'}
                  to={'/auth/passwordReset'}
                  underline={'none'}
                >
                  Forgot your password?
                </MUILink>
              </Typography>
            </Box>
            <TextField
              label="Authentication Code *"
              variant="outlined"
              name={'authenticationCode'}
              type={'string'}
              fullWidth
              value={formik.values.authenticationCode}
              onChange={formik.handleChange}
              error={
                formik.touched.authenticationCode &&
                Boolean(formik.errors.authenticationCode)
              }
              helperText={
                formik.touched.authenticationCode &&
                formik.errors.authenticationCode
              }
            />
          </Grid>
          <Grid item xs={12}>
            {signInError && <Alert severity="error">{signInError}</Alert>}
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Don't have an account yet?{' '}
                  <MUILink
                    component={Link}
                    color={'primary'}
                    to={'/auth/signUp'}
                    underline={'none'}
                  >
                    Sign up here.
                  </MUILink>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Confirm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
