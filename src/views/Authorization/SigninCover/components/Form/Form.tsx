/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 21:41:42
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-21 22:43:11
 * @FilePath: /uwcssa_ca/src/views/Authorization/SigninCover/components/Form/Form.tsx
 * @Description:
 *
 */
/* eslint-disable react/no-unescaped-entities */

import * as yup from 'yup';

import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Link as MUILink,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { googleSignIn, signIn } from 'redux/auth/authSlice';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'Password must be at least 8 characters long.'),
});

const Form = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  // const { signInError } = useAppSelector((state) => state.auth);
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const response: any = await dispatch(signIn(values)); //!! 这里有毛病，后期需要改一改
    console.log(response);
    if (response.meta.requestStatus === 'fulfilled') {
      enqueueSnackbar(
        `登录成功！ 欢迎回来 ${response.payload.attributes.name}`,
        { variant: 'success' },
      );
      //!! viewroutes 中redirect 当auth 成功后，会直接给你转到/dashboard 所以这里写啥都不会改变任何东西
      //navigate('/dashboard');
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

  const handleGoogleSignIn = async () => {
    dispatch(googleSignIn());
  };
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
          登录
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          欢迎回来
        </Typography>
        {/* <Typography color="text.secondary">
          Login to manage your account.
        </Typography> */}
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography> */}
            <TextField
              label="请输入邮箱 *"
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
                {/* <Typography variant={'subtitle2'}>
                  Enter your password
                </Typography> */}
              </Box>
              <Typography variant={'subtitle2'}>
                <MUILink
                  component={Link}
                  color={'primary'}
                  to={'/auth/passwordReset'}
                  underline={'none'}
                >
                  忘记密码?
                </MUILink>
              </Typography>
            </Box>
            <TextField
              label="请输入密码 *"
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
                  首次使用？{' '}
                  <MUILink
                    component={Link}
                    color={'primary'}
                    to={'/auth/signUp'}
                    underline={'none'}
                  >
                    点我注册
                  </MUILink>
                </Typography>
              </Box>
              <Button
                startIcon={
                  <LazyLoadImage
                    src={'/assets/images/uwcssa_logo.svg'}
                    width="20px"
                    style={{ marginRight: '0.5rem' }}
                  />
                }
                size={'large'}
                variant={'contained'}
                type={'submit'}
              >
                登录
              </Button>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <Divider sx={{ px: '1rem', width: '100%', lineHeight: '0' }}>
              其他方式登录
            </Divider>
          </Grid>
          <Grid item container xs={12} sx={{ justifyContent: 'center' }}>
            {/* <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            > */}
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={() => handleGoogleSignIn()}
              sx={{ lineHeight: 1 }}
            >
              <Box
                component={LazyLoadImage}
                effect="blur"
                src="/assets/images/icons/google-1.svg"
              />
              <Box sx={{ fontSize: '12px', marginLeft: '1rem' }}>
                Google登录
              </Box>
            </Button>
            {/* </Box> */}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
