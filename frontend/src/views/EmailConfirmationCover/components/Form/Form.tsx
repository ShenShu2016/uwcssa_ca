/* eslint-disable react/no-unescaped-entities */

import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { emailConfirm } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup
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
  //const { email } = useParams();
  const dispatch = useAppDispatch();

  const initialValues = {
    email: '',
    authenticationCode: '',
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const { email, authenticationCode } = values;
    const response = await dispatch(
      emailConfirm({ email, authenticationCode }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/auth/signIn');
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
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
