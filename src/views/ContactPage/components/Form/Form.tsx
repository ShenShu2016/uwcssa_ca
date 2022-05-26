/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 21:16:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-23 12:08:42
 * @FilePath: /uwcssa_ca/frontend/src/views/ContactPage/components/Form/Form.tsx
 * @Description:
 *
 */
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postContactUs } from 'redux/contactUs/ContactUsSlice';
import { useFormik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(50, 'Please enter a valid full name')
    .required('Please specify your full name'),
  message: yup.string().trim().required('Please specify your message'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .trim()
    .min(9, 'Please enter a valid phone number')
    .max(15, 'Please enter a valid phone number'),
  //.required('Please specify your phone number'),
});

const Form = (): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const ownerUserName = useAppSelector(getOwnerUserName);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const initialValues = {
    fullName: '',
    message: '',
    email: '',
    phone: '',
  };

  const onSubmit = async (values) => {
    const { fullName, message, email, phone } = values;
    const createContactUsInput = {
      id: undefined,
      fullName,
      message,
      email,
      phone,
      owner: ownerUserName && ownerUserName,
    };
    const response = await dispatch(postContactUs({ createContactUsInput }));
    if (response.meta.requestStatus === 'fulfilled') {
      alert('提交成功');
    } else {
      alert('提交失败');
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
      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          Can't find the answer you need?
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          Keep track of what's happening with your data, change permissions, and
          run reports against your data anywhere in the world. Keep track of
          what's happening with your data, change permissions.
        </Typography>
      </Box>
      <Box
        maxWidth={600}
        margin={'0 auto'}
        component={'form'}
        onSubmit={formik.handleSubmit}
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Phone Number
            </Typography>
            <TextField
              placeholder="Your phone number"
              variant="outlined"
              size="medium"
              name="phone"
              fullWidth
              //type="email"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Send the question
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
