/*
 * @Author: Shen Shu
 * @Date: 2022-05-18 15:31:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-10 14:58:35
 * @FilePath: /uwcssa_ca/src/views/ForgotPassWordSubmit/components/Form/Form.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Alert,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { forgotPassWordSubmit } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  code: yup
    .string()
    .required('Please specify your code')
    .min(6, 'The code should have at minimum length of 6')
    .max(6, 'The code should have at maximum length of 6'),
  new_password: yup
    .string()
    .required('Please specify your password')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

const Form = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { username } = useParams();
  console.log(username);
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState('');
  const initialValues = {
    username: username,
    code: '',
    new_password: '',
  };

  const onSubmit = async (values) => {
    const response: any = await dispatch(forgotPassWordSubmit(values));
    console.log(response);
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/auth/signIn');
    } else {
      setSignInError(response.error.message);
      return false;
    }
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Box display="flex" flexDirection={'column'}>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Email"
              type="email"
              variant="outlined"
              color="primary"
              size="medium"
              name="username"
              disabled
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Verification code"
              variant="outlined"
              color="primary"
              size="medium"
              name="code"
              fullWidth
              value={formik.values.code}
              onChange={formik.handleChange}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
            />
          </Box>

          <Box marginBottom={6}>
            <TextField
              sx={{ height: 54 }}
              label="New Password"
              type="password"
              variant="outlined"
              color="primary"
              size="medium"
              name="new_password"
              fullWidth
              value={formik.values.new_password}
              onChange={formik.handleChange}
              error={
                formik.touched.new_password &&
                Boolean(formik.errors.new_password)
              }
              helperText={
                formik.touched.new_password && formik.errors.new_password
              }
            />
          </Box>
          <Box marginBottom={6}>
            <TextField
              sx={{ height: 54 }}
              label="Confirm Password"
              type="password"
              variant="outlined"
              color="primary"
              size="medium"
              name="passwordConfirmation"
              fullWidth
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              helperText={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
            />
          </Box>
          <Grid item xs={12}>
            {signInError && <Alert severity="error">{signInError}</Alert>}
          </Grid>
          <Box>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
              type={'submit'}
            >
              Create an account
            </Button>
          </Box>
          <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
            <Divider />
          </Box>
          <Box>
            <Typography component="p" variant="body2" align="left">
              By creating you account you agree to our{' '}
              <Box
                component="a"
                href="#"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Privacy Policy
              </Box>
              ,{' '}
              <Box
                component="a"
                href="#"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Data Policy
              </Box>{' '}
              and{' '}
              <Box
                component="a"
                href="#"
                color={theme.palette.text.primary}
                fontWeight={'700'}
              >
                Cookie Policy
              </Box>
              .
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
