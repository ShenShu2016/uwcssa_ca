/*
 * @Author: Shen Shu
 * @Date: 2022-06-12 21:51:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-12 23:05:27
 * @FilePath: /uwcssa_ca/src/views/Settings/General/components/UWindsorEmailVerify.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  uWindsorEmail: yup
    .string()
    .trim()
    .lowercase()
    .matches(/^[\w.+-]+@uwindsor\.ca$/, '结尾必须是@uwindsor.ca') //it must be @uwindsor.ca
    .email('Please enter a valid email address'),
});

function UWindsorEmailVerify() {
  const myUserProfile = useAppSelector(
    (state) => state.userProfile.myUserProfile,
  );

  const initialValues = {
    uWindsorEmail: '@uwindsor.ca',
  };

  const onSubmit = async (values) => {
    console.log(values);
    // const updateUserProfileInput = {
    //   id: ownerUsername,
    //   ...values,
    // };
    // const response = await dispatch(
    //   updateUserProfileData(updateUserProfileInput),
    // );
    // if (response.meta.requestStatus === 'fulfilled') {
    //   enqueueSnackbar('Profile updated successfully', { variant: 'success' });
    // } else {
    //   enqueueSnackbar('Profile update failed', { variant: 'error' });
    // }
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ mt: '2rem' }}>
        <Typography
          variant={'subtitle2'}
          sx={{ marginBottom: 2 }}
          fontWeight={700}
        >
          账号验证，是否是温莎大学的学生
        </Typography>
        <TextField
          label="温莎大学邮箱"
          variant="outlined"
          name={'uWindsorEmail'}
          value={formik.values.uWindsorEmail}
          onChange={formik.handleChange}
          error={
            formik.touched.uWindsorEmail && Boolean(formik.errors.uWindsorEmail)
          }
          helperText={
            formik.touched.uWindsorEmail && formik.errors.uWindsorEmail
          }
        />
        <Button
          variant="contained"
          size="medium"
          type="submit"
          color="warning"
          sx={{ lineHeight: 2.5, ml: '1rem' }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default UWindsorEmailVerify;
