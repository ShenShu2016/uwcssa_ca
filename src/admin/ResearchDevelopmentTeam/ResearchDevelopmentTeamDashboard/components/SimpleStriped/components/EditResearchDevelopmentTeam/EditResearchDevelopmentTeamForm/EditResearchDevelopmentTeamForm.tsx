/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 15:13:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 17:16:40
 * @FilePath: /uwcssa_ca/src/admin/ResearchDevelopmentTeam/ResearchDevelopmentTeamDashboard/components/SimpleStriped/components/EditResearchDevelopmentTeam/EditResearchDevelopmentTeamForm/EditResearchDevelopmentTeamForm.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import {
  ResearchDevelopmentTeam,
  updateResearchDevelopmentTeamDetail,
} from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';

import React from 'react';
import { useAppDispatch } from 'redux/hooks';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  name: yup.string().trim(),
  title: yup.string().trim(),
  subTitle: yup.string().trim(),
  content: yup.string().trim(),
  email: yup.string().email(),
  linkedIn: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .trim(),
  github: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .trim(),
  website: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    )
    .trim(),
});
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  item: ResearchDevelopmentTeam;
}

const EditResearchDevelopmentTeamForm = ({
  onClose,
  open,
  item,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialValues = {
    id: item?.id || '',
    name: item?.name || '',
    title: item?.title || '',
    subTitle: item?.subTitle || '',
    content: item?.content || '',
    email: item?.email || '',
    linkedIn: item?.linkedIn || '',
    github: item?.github || '',
    website: item?.website || '',
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const updateResearchDevelopmentTeamInput = {
      ...values,
    };
    console.log(updateResearchDevelopmentTeamInput);
    const response = await dispatch(
      updateResearchDevelopmentTeamDetail({
        updateResearchDevelopmentTeamInput,
      }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      onClose();
      formik.resetForm();
      return true;
    } else {
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
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h5'} fontWeight={700}>
            Edit Developer
          </Typography>
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: 'pointer' }}
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
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Name
                </Typography>
                <TextField
                  label="成员名字 *"
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
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Title
                </Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Sub Title
                </Typography>
                <TextField
                  label="Sub Title"
                  variant="outlined"
                  name={'subTitle'}
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
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Introduce your self
                </Typography>
                <TextField
                  label="个人简介"
                  variant="outlined"
                  name={'content'}
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
                  <Typography variant={'subtitle2'} sx={{ my: 1 }}>
                    联系 Email
                  </Typography>
                  <TextField
                    label="Email"
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
                  <Typography variant={'subtitle2'} sx={{ my: 1 }}>
                    LinkedIn
                  </Typography>
                  <TextField
                    label="linkedIn"
                    variant="outlined"
                    name={'linkedIn'}
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
                  <Typography variant={'subtitle2'} sx={{ my: 1 }}>
                    Github
                  </Typography>
                  <TextField
                    label="github"
                    variant="outlined"
                    name={'github'}
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
                  <Typography variant={'subtitle2'} sx={{ my: 1 }}>
                    Website
                  </Typography>
                  <TextField
                    label="website"
                    variant="outlined"
                    name={'website'}
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
                <Button size={'large'} variant={'contained'} type={'submit'}>
                  Submit
                </Button>
                <Button
                  size={'large'}
                  variant={'text'}
                  sx={{ ml: '2rem' }}
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
};

export default EditResearchDevelopmentTeamForm;
