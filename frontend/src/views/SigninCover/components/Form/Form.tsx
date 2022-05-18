/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 21:41:42
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-18 17:58:13
 * @FilePath: \uwcssa_ca\frontend\src\views\SigninCover\components\Form\Form.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signIn } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Form = (): JSX.Element => {
  const navigate = useNavigate();
  //const { email } = useParams();
  const dispatch = useAppDispatch();
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const { username, password } = values;
    const response = await dispatch(signIn({ username, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/');
    } else {
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
          Login
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Welcome back
        </Typography>
        <Typography color="text.secondary">
          Login to manage your account.
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
              type="email"
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
                  Enter your password
                </Typography>
              </Box>
              <Typography variant={'subtitle2'}>
                <Link
                  component={'a'}
                  color={'primary'}
                  href={'/auth/passwordReset'}
                  underline={'none'}
                >
                  Forgot your password?
                </Link>
              </Typography>
            </Box>
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
                  Don't have an account yet?{' '}
                  <Link
                    component={'a'}
                    color={'primary'}
                    href={'/auth/signUp'}
                    underline={'none'}
                  >
                    Sign up here.
                  </Link>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
