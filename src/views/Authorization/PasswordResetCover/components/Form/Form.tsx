/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:10:37
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-21 23:19:11
 * @FilePath: /uwcssa_ca/src/views/Authorization/PasswordResetCover/components/Form/Form.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

import * as yup from 'yup';

import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { forgotPassword } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

const Form = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState('');
  const initialValues = {
    username: '',
  };

  const onSubmit = async (values: { username: string }) => {
    console.log(values);
    const { username } = values;
    const response: any = await dispatch(forgotPassword(username));
    console.log(response);
    if (response.meta.requestStatus === 'fulfilled') {
      navigate(`/auth/passWordResetSubmit/${username}`);
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
          Recover account
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Forgot your password?
        </Typography>
        <Typography color="text.secondary">
          Enter your email address below and we'll get you back on track.
        </Typography>
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
            {signInError && (
              <Alert severity="error">
                {signInError}{' '}
                请查看邮箱是否有临时密码，很有可能在垃圾（spam）信箱，请用邮件中临时密码登录.
                如还有问题请联系uwincssa.it@gmail.com.
              </Alert>
            )}
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
                <Button
                  size={'large'}
                  variant={'outlined'}
                  component={Link}
                  to={'/auth/signIn'}
                  fullWidth
                >
                  Back to login
                </Button>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Send reset link
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
