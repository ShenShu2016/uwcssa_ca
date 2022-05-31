/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:20:04
 * @LastEditTime: 2022-05-31 18:02:32
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/ActivityCreate.tsx
 */
import React, { useState } from 'react';
import PageTitle from 'admin/components/pageTitle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RichTextEditor from 'components/RichTextEditor';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';

const steps = [
  '填写活动信息',
  '配置报名表单',
  '完成',
];

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required('请输入活动标题'),
  name: yup
    .string()
    .trim()
    .required('Please specify your name on the card'),
  dateTime: yup
    .date()
    .nullable()
    .required('Please enter a valid date. The field cannot be left blank.'),
  address: yup
    .string()
    .trim()
    .required('请输入活动地点'),
  limit: yup
    .number()
    .min(0, '输入人数无效')
    .required('请输入活动最多限制人数'),
});

const ActivityCreate: React.FC = () => {

  const [description, setDescription] = useState('');

  const initialValues = {
    title: '',
    dateTime: null,
    address: '',
    limit: 0,
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      <PageTitle
        title='发起活动'
        marginTop='-50px'
        description={
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#aed581', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (COMPLETED)
                      },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: 'secondary.main', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (ACTIVE)
                      },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'black', // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        }
      >
        <Box paddingX={'5%'} pb={4}>
          <Card
            sx={{
              p: 4,
            }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    活动标题
                  </Typography>
                  <TextField
                    label="Title *"
                    variant="outlined"
                    name={'title'}
                    fullWidth
                    size='small'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    活动时间
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Date & Time *"
                      value={formik.values.dateTime}
                      minDate={new Date()}
                      minTime={new Date()}
                      onChange={(val) => formik.setFieldValue('dateTime', val)}
                      renderInput={(params) => 
                        <TextField
                          size='small'
                          fullWidth
                          name={'dateTime'}
                          error={formik.touched.dateTime && Boolean(formik.errors.dateTime)}
                          helperText={formik.touched.dateTime && formik.errors.dateTime}
                          {...params} 
                        />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    活动地点
                  </Typography>
                  <TextField
                    label="Address *"
                    variant="outlined"
                    name={'address'}
                    fullWidth
                    size='small'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    最多参与人数（0表示不限制）
                  </Typography>
                  <TextField
                    label="Member limitation *"
                    variant="outlined"
                    name={'limit'}
                    type="number"
                    fullWidth
                    size='small'
                    value={formik.values.limit}
                    onChange={formik.handleChange}
                    error={formik.touched.limit && Boolean(formik.errors.limit)}
                    helperText={formik.touched.limit && formik.errors.limit}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
              <Box
                width='100%'
                height='60vh'
              >
                <Typography
                  variant={'subtitle2'}
                  sx={{
                    marginTop: 2,
                    marginBottom: 1
                  }}
                  fontWeight={700}
                >
                    活动描述
                </Typography>
                <RichTextEditor content={description} setContent={setDescription} height='calc(100% - 21px)'/>
              </Box>
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                sx={{
                  width: '150px',
                  marginTop: 4,
                  float: 'right'
                }}
              >
                Save
              </Button>
            </form>
          </Card>
        </Box>
      </PageTitle>
    </>
  );
};

export default ActivityCreate;