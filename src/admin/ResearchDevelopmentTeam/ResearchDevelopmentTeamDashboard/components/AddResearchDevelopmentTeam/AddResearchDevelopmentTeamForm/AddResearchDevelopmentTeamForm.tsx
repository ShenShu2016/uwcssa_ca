/*
 * @Author: Shen Shu
 * @Date: 2022-05-30 15:13:57
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 17:35:08
 * @FilePath: /uwcssa_ca/src/admin/ResearchDevelopmentTeam/ResearchDevelopmentTeamDashboard/components/AddResearchDevelopmentTeam/AddResearchDevelopmentTeamForm/AddResearchDevelopmentTeamForm.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
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
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  fetchUserProfileList,
  selectAllUserProfiles,
} from 'redux/userProfile/userProfileSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getAuthState } from 'redux/auth/authSlice';
import { postResearchDevelopmentTeam } from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { stringAvatar } from 'components/Avatar/AvatarFunction';
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
  owner: yup.string().trim().required('Owner is required'),
});
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
}

const AddResearchDevelopmentTeamForm = ({
  onClose,
  open,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState<true | false>(false);
  const isAuth = useAppSelector(getAuthState);
  const { fetchUserProfileListStatus } = useAppSelector(
    (state) => state.userProfile,
  );
  const userProfileList = useAppSelector(selectAllUserProfiles);

  useEffect(() => {
    if (isAuth !== null && fetchUserProfileListStatus === 'idle') {
      dispatch(
        fetchUserProfileList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchUserProfileListStatus]);

  const initialValues = {
    name: '',
    title: '',
    subTitle: '',
    content: '',
    email: '',
    linkedIn: '',
    github: '',
    website: '',
    owner: '',
  };

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    const createResearchDevelopmentTeamInput = {
      id: 'ResearchDevelopmentTeam-' + values.owner,
      ...values,
    };
    console.log(createResearchDevelopmentTeamInput);
    const response = await dispatch(
      postResearchDevelopmentTeam({ createResearchDevelopmentTeamInput }),
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
            Add a new Developer
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
                  Uwcssa ID
                </Typography>
                {/* <TextField
                  label="userName uuid"
                  variant="outlined"
                  name={'owner'}
                  fullWidth
                  value={formik.values.owner}
                  onChange={formik.handleChange}
                  error={formik.touched.owner && Boolean(formik.errors.owner)}
                  helperText={formik.touched.owner && formik.errors.owner}
                /> */}
                <FormControl fullWidth>
                  <InputLabel id={'getUserProfile-label-id'}>
                    {'选择人员'}
                  </InputLabel>
                  <Select
                    labelId={'getUserProfile-label-id'}
                    //id={getInputFieldName({ order: formItem.order })}
                    name={'owner'}
                    value={formik.values.owner}
                    label={'账号名称'}
                    onChange={formik.handleChange}
                    error={formik.touched.owner && Boolean(formik.errors.owner)}
                  >
                    {userProfileList.map((option, index) => {
                      return (
                        <MenuItem key={index} value={option.id}>
                          <Avatar
                            src={option.avatarURL?.objectThumbnailURL}
                            {...stringAvatar(option.name, {
                              width: 30,
                              height: 30,
                              mr: '1rem',
                            })}
                          />
                          {option.name}
                          <Typography variant={'caption'} sx={{ ml: '1rem' }}>
                            {option.email}
                          </Typography>
                          {option.id.slice(0, 6) === 'google' && (
                            <Box
                              component={LazyLoadImage}
                              effect="blur"
                              src="/assets/images/icons/google-1.svg"
                              sx={{ mx: '0.5rem' }}
                            />
                          )}
                          {option.email.includes('@uwindsor.ca') && (
                            <Box
                              component={LazyLoadImage}
                              effect="blur"
                              src="/assets/images/icons/uwindsor_shield.svg"
                              sx={{ mx: '0.5rem', height: '20px' }}
                            />
                          )}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>
                    {formik.touched.owner && Boolean(formik.errors.owner)}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Accordion
                disableGutters
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                sx={{ width: '100%', px: '16px', mt: '1rem', ml: '1rem' }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ flexShrink: 0 }}>填写更多选项</Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>一般来说不用自己填写</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item xs={12}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                      Name
                    </Typography>
                    <TextField
                      label="成员名字"
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
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
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
                        formik.touched.subTitle &&
                        Boolean(formik.errors.subTitle)
                      }
                      helperText={
                        formik.touched.subTitle && formik.errors.subTitle
                      }
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
                      helperText={
                        formik.touched.content && formik.errors.content
                      }
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
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant={'subtitle2'} sx={{ my: 1 }}>
                        个人照片
                      </Typography>
                      <TextField
                        label="imgURL"
                        variant="outlined"
                        name={'imgURL'}
                        fullWidth
                        value={formik.values.imgURL}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.imgURL && Boolean(formik.errors.imgURL)
                        }
                        helperText={
                          formik.touched.imgURL && formik.errors.imgURL
                        }
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
                          formik.touched.linkedIn &&
                          Boolean(formik.errors.linkedIn)
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
                        helperText={
                          formik.touched.github && formik.errors.github
                        }
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
                          formik.touched.website &&
                          Boolean(formik.errors.website)
                        }
                        helperText={
                          formik.touched.website && formik.errors.website
                        }
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
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

export default AddResearchDevelopmentTeamForm;
