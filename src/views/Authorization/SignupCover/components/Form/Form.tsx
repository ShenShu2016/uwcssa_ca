/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 15:50:53
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 14:59:07
 * @FilePath: /uwcssa_ca/src/views/SignupCover/components/Form/Form.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

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
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { signUp } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const Form = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState('');
  const initialValues = {
    name: '',
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const response: any = await dispatch(signUp(values));

    if (response.meta.requestStatus === 'fulfilled') {
      navigate(`/auth/emailConfirmation/${values.username}`);
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
          SignUp
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Create an account
        </Typography>
        <Typography color="text.secondary">
          Fill out the form to get started.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your user name
            </Typography>
            <TextField
              label="User name *"
              variant="outlined"
              name={'name'}
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
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
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your password
            </Typography>
            <TextField
              label="Password *"
              variant="outlined"
              name={'password'}
              type={'password'}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
                  Already have an account?{' '}
                  <MUILink
                    component={Link}
                    color={'primary'}
                    to={'/auth/signIn'}
                    underline={'none'}
                  >
                    Login.
                  </MUILink>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Sign up
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography
              variant={'subtitle2'}
              color={'text.secondary'}
              align={'center'}
            >
              By clicking "Sign up" button you agree with our{' '}
              <MUILink
                component={Link}
                color={'primary'}
                to={'/terms'}
                underline={'none'}
              >
                company terms and conditions.
              </MUILink>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
