/*
 * @Author: Shen Shu
 * @Date: 2022-06-12 21:51:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-23 21:32:13
 * @FilePath: /uwcssa_ca/src/views/Settings/UWindsorEmailVerify/UWindsorEmailVerify.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import Page from "views/Settings/components/Page/Page";
import React from "react";
// import { useAppSelector } from "redux/hooks";
import { useFormik } from "formik";

const validationSchema = yup.object({
  uWindsorEmail: yup
    .string()
    .trim()
    .lowercase()
    .matches(/^[\w.+-]+@uwindsor\.ca$/, "结尾必须是@uwindsor.ca") // it must be @uwindsor.ca
    .email("Please enter a valid email address"),
});

function UWindsorEmailVerify() {
  // const myUserProfile = useAppSelector(
  //   (state) => state.userProfile.myUserProfile,
  // );

  const initialValues = {
    uWindsorEmail: "@uwindsor.ca",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit,
  });

  return (
    <Page>
      <Box>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          温莎大学学生认证
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          温莎大学学生会有专属会长以及特殊会员功能哦
          {/* <MUILink
              component={Link}
              color={'primary'}
              to={'/terms'}
              underline={'none'}
            >
              terms of use
            </MUILink>
            to be informed how we manage your private data. */}
        </Typography>

        <Box paddingY={4}>
          <Divider />
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ mt: "2rem" }}>
            <Typography
              variant="subtitle2"
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              功能还没做好。账号验证，是否是温莎大学的学生
            </Typography>
            <TextField
              size="small"
              label="温莎大学邮箱"
              disabled
              variant="outlined"
              name="uWindsorEmail"
              value={formik.values.uWindsorEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.uWindsorEmail &&
                Boolean(formik.errors.uWindsorEmail)
              }
              helperText={
                formik.touched.uWindsorEmail && formik.errors.uWindsorEmail
              }
            />
            <Button
              variant="contained"
              size="small"
              type="submit"
              color="warning"
              sx={{ lineHeight: 1.5, ml: "1rem" }}
              disabled
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Page>
  );
}

export default UWindsorEmailVerify;
