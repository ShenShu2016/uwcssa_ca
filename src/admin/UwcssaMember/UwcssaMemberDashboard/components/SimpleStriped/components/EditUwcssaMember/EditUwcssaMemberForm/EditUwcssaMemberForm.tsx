/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 15:13:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 17:18:33
 * @FilePath: /uwcssa_ca/src/admin/UwcssaMember/UwcssaMemberDashboard/components/SimpleStriped/components/EditUwcssaMember/EditUwcssaMemberForm/EditUwcssaMemberForm.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchUwcssaDepartmentList,
  selectAllUwcssaDepartments,
} from "redux/uwcssaDepartment/uwcssaDepartmentSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { getAuthState } from "redux/auth/authSlice";
import { updateResearchDevelopmentTeamDetail } from "redux/researchDevelopmentTeam/researchDevelopmentTeamSlice";
import { updateUwcssaMemberDetail } from "redux/uwcssaMember/uwcssaMemberSlice";
import { useFormik } from "formik";

const validationSchema = yup.object({
  uwcssaDepartmentUwcssaMembersId: yup
    .string()
    .trim()
    .required("Department is required"),
  name: yup.string().trim(),
  title: yup.string().trim(),
  subTitle: yup.string().trim(),
  content: yup.string().trim(),
  email: yup.string().email(),
  linkedIn: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!",
    )
    .trim(),
  github: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!",
    )
    .trim(),
  website: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!",
    )
    .trim(),
});
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  item: {
    id: string;
    name?: string | null;
    title?: string | null;
    subTitle?: string | null;
    content?: string | null;
    email?: string | null;
    uwcssaDepartmentUwcssaMembersId?: string;
    linkedIn?: string | null;
    website?: string | null;
    github?: string | null;
    owner?: string;
  };
}

function EditUwcssaMemberForm({ onClose, open, item }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const { fetchUwcssaDepartmentListStatus } = useAppSelector(
    (state) => state.uwcssaDepartment,
  );
  const uwcssaDepartmentList = useAppSelector(selectAllUwcssaDepartments);

  useEffect(() => {
    if (isAuth !== null && fetchUwcssaDepartmentListStatus === "idle") {
      dispatch(
        fetchUwcssaDepartmentList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchUwcssaDepartmentListStatus]);

  const initialValues = {
    id: item?.id || "",
    name: item?.name || "",
    title: item?.title || "",
    subTitle: item?.subTitle || "",
    content: item?.content || "",
    email: item?.email || "",
    uwcssaDepartmentUwcssaMembersId:
      item?.uwcssaDepartmentUwcssaMembersId || "",
    linkedIn: item?.linkedIn || "",
    website: item?.website || "",
    github: item?.github || "",
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const updateUwcssaMemberInput = {
      ...values,
    };
    console.log(updateUwcssaMemberInput);
    const response = await dispatch(
      updateUwcssaMemberDetail({
        updateUwcssaMemberInput,
      }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      onClose();
      formik.resetForm();
      return true;
    }
    return false;
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight={700}>
            编辑成员
          </Typography>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </Box>
        </Box>
        <Box paddingY={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  部门
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="getDepartment-label-id">选择部门</InputLabel>
                  <Select
                    labelId="getDepartment-label-id"
                    // id={getInputFieldName({ order: formItem.order })}
                    name="uwcssaDepartmentUwcssaMembersId"
                    value={formik.values.uwcssaDepartmentUwcssaMembersId}
                    label="部门"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.uwcssaDepartmentUwcssaMembersId &&
                      Boolean(formik.errors.uwcssaDepartmentUwcssaMembersId)
                    }
                  >
                    {uwcssaDepartmentList.map((option, index) => (
                      <MenuItem key={index} value={option.id}>
                        {option.id}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {formik.touched.uwcssaDepartmentUwcssaMembersId &&
                      Boolean(formik.errors.uwcssaDepartmentUwcssaMembersId)}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Name
                </Typography>
                <TextField
                  label="成员名字"
                  variant="outlined"
                  name="name"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Title
                </Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  name="title"
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Sub Title
                </Typography>
                <TextField
                  label="Sub Title"
                  variant="outlined"
                  name="subTitle"
                  fullWidth
                  value={formik.values.subTitle}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subTitle && Boolean(formik.errors.subTitle)
                  }
                  helperText={formik.touched.subTitle && formik.errors.subTitle}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Introduce your self
                </Typography>
                <TextField
                  label="个人简介"
                  variant="outlined"
                  name="content"
                  fullWidth
                  multiline
                  rows={5}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.content && Boolean(formik.errors.content)
                  }
                  helperText={formik.touched.content && formik.errors.content}
                />
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>
                    联系 Email
                  </Typography>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>
                    LinkedIn
                  </Typography>
                  <TextField
                    label="linkedIn"
                    variant="outlined"
                    name="linkedIn"
                    fullWidth
                    value={formik.values.linkedIn}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.linkedIn && Boolean(formik.errors.linkedIn)
                    }
                    helperText={
                      formik.touched.linkedIn && formik.errors.linkedIn
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>
                    Github
                  </Typography>
                  <TextField
                    label="github"
                    variant="outlined"
                    name="github"
                    fullWidth
                    value={formik.values.github}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.github && Boolean(formik.errors.github)
                    }
                    helperText={formik.touched.github && formik.errors.github}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>
                    Website
                  </Typography>
                  <TextField
                    label="website"
                    variant="outlined"
                    name="website"
                    fullWidth
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.website && Boolean(formik.errors.website)
                    }
                    helperText={formik.touched.website && formik.errors.website}
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Button size="large" variant="contained" type="submit">
                  Submit
                </Button>
                <Button
                  size="large"
                  variant="text"
                  sx={{ ml: "2rem" }}
                  onClick={() => onClose()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
}

export default EditUwcssaMemberForm;
